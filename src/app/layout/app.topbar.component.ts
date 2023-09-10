import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";
import { Router } from '@angular/router';
import { Menubar, MenubarModule } from 'primeng/menubar'; // Make sure this line is included

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html',
    
})
export class AppTopBarComponent implements OnInit {
    @ViewChild('menubutton') menuButton!: ElementRef;
    @ViewChild('topbarmenu') menu!: ElementRef;
    @ViewChild('topbarMenuButton') topbarMenuButton!: ElementRef;
    userName: string = "Mhamed";
    
    menuItems: MenuItem[] = [  ];
    items=[{
        label: 'Users',
        icon: 'pi pi-fw pi-user',
        items: [
            {
                label: 'Profile',
                icon: 'pi pi-fw pi-user-plus',
                command:()=>{
                    this.router.navigate(['/updpro']);
                }

            },
            {
                label: 'logout',
                icon: 'pi pi-fw pi-user-minus',
                command:()=>{
                    this.logoutData()
                }
            },
        ]
    },]
    constructor(public layoutService: LayoutService, private router: Router) {
        
     }
     profileOptions: MenuItem[] = [
        {
            label: 'Profile',
            icon: 'pi pi-user',
            command: () => {
                // Handle profile action
            }
        },
        // Other profile options...
    ];

    showProfileSplit: boolean = false; // 
    connectedUser
     ngOnInit(): void {
        this.connectedUser= JSON.parse( localStorage.getItem('user'))
    
        }


    logoutData() {
        localStorage.removeItem('user');
        this.router.navigate(['/training']);
    }

    openProfileMenu() {
       
    }
}
