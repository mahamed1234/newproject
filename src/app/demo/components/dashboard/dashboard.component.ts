import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Product } from '../../api/product';
import { ProductService } from '../../service/product.service';
import { Subscription } from 'rxjs';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    templateUrl: './dashboard.component.html',
    selector: 'badge-severity-demo',


})
export class DashboardComponent implements OnInit, OnDestroy {

    items!: MenuItem[];

    products!: Product[];

    chartData: any;

    chartOptions: any;

    subscription!: Subscription;
    form: FormGroup;
    NUMERIC_PATTREN = '^-?[0-9]\\d*(\\.\\d{1,2})?$';
    Owner_Pattren = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    usersList: any[] = [];

    constructor(private productService: ProductService, public layoutService: LayoutService) {
        this.subscription = this.layoutService.configUpdate$.subscribe(() => {
            this.initChart();
        });
    }

    ngOnInit() {
        this.form = new FormGroup({
            projectId: new FormControl(null, Validators.required),
            projectName: new FormControl(null, Validators.required),
            latestTestDate: new FormControl(null, [Validators.pattern(this.NUMERIC_PATTREN), Validators.minLength(8), Validators.maxLength(13)]),
            Owner: new FormControl(null, [Validators.required, Validators.pattern(this.Owner_Pattren)])

        });
    
        this.usersList = [
            {
                projectId: "1",
                projectName: "Titus",
                Owner: "Mhamed",
                latestTestDate: "28/05/2023",
                status: "failed",
                description:"Le restaurant sera dirigé par M Paul Cunningham et M David Jones. Paul et David partagent une passion pour la cuisine française ainsi qu'une grande expérience de la restauration Ils ont travaillé tous les deux plusieurs années dans des établissement similaires à Chez Paul Ils se sont rencontrés à The Old Oak un gastro pub sur Paddington Street où ils ont travaillé ensemble pendant 3 ans  Paul et David sont également très complémentaires. Paul a travaillé dans la vente et le marketing avant de se reconvertir dans la restauration en devenant gérant de The Old Oak. David quant à lui a passé toute sa carrière dans la restauration. Son dernier poste était responsable des cuisines à The Old Oak.Mme Sarah James, une amie de David et Paul, a prévue d'investir dans le restaurant au coté de Paul.",
                
            },
            {
                projectId: "2",
                projectName: "c'est nettement mieux",
                Owner: "zeher",
                latestTestDate: "22/05/2023",
                status: "success",
                description:"c'est un grand projet d'une societé qui contient plusieurs domaine par example web ita etc.. "
            },
            {
                projectId: "3",
                projectName: "aziza",
                Owner: "yassine",
                latestTestDate: "23/05/2023",
                status: "failed", 
                description:"Bien, nous avons donc pris en compte toutes les conditions nécessaires au démarrage d’une entreprise de supermarché. Nous sommes également allés plus loin en analysant et en élaborant un exemple de modèle de plan de marketing pour les supermarchés, assorti d’idées de marketing guérilla concrètes pour les supermarchés. Nous allons donc passer à la section de planification dentreprise"
            },
            
        ];
    }
    
    getSuccessTestCount(): number {
        return this.usersList.filter(user => user.status === 'success').length;
    }
    
    getFailedTestCount(): number {
        return this.usersList.filter(user => user.status === 'failed').length;
    }
    
        

    initChart() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.chartData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    backgroundColor: documentStyle.getPropertyValue('--bluegray-700'),
                    borderColor: documentStyle.getPropertyValue('--bluegray-700'),
                    tension: .4
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    backgroundColor: documentStyle.getPropertyValue('--green-600'),
                    borderColor: documentStyle.getPropertyValue('--green-600'),
                    tension: .4
                }
            ]
        };

        this.chartOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
