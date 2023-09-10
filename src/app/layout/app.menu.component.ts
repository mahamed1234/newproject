import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import { Router, RouterLink } from '@angular/router';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];
    projectList = [
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
    _router: any;

    constructor(public layoutService: LayoutService,private router: Router) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Overview', icon: 'pi pi-fw pi-home', routerLink: ['/home'] }
                ]
            },
           
            {
                label: 'Projects',
                items: [
                    
                            {
                                label: 'Projects', icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    //{ label: 'Project 1.', icon: 'pi pi-fw pi-bookmark', routerLink: ['/projects'] },
                                    // { label: 'Project 2', icon: 'pi pi-fw pi-bookmark' },
                                    // { label: 'Project 3', icon: 'pi pi-fw pi-bookmark' },
                                ]
                            },
                           
                        ]
            },
           
            {
                label: 'Settings',
                items: [
                    { label: 'Settings', icon: 'pi pi-cog', routerLink: ['/changepasswd'] }
                ]
            },
        ];
        this.projectList.forEach(el=>{
            this.model[1].items[0].items.push({label:el.projectName,icon:'pi pi-fw pi-bookmark',command:()=>{
                this.projectDetails(el)
                
            }})
        })
    }
    projectDetails(project){
        console.log(project);
        localStorage.setItem('project',JSON.stringify(project))
        this.router.navigate(['/projects']);
        
        
        // set in local storage

        // redirection
    }
}
