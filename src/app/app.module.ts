import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { ProductService } from './demo/service/product.service';
import { CountryService } from './demo/service/country.service';
import { CustomerService } from './demo/service/customer.service';
import { EventService } from './demo/service/event.service';
import { IconService } from './demo/service/icon.service';
import { NodeService } from './demo/service/node.service';
import { PhotoService } from './demo/service/photo.service';
import { TrainingComponent } from './training/training.component';
import { ToastModule } from 'primeng/toast';
import { SplitButtonModule } from 'primeng/splitbutton';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { ChangepasswdComponent } from './changepasswd/changepasswd.component';
import { MessageService } from 'primeng/api';
import { PasswordModule } from 'primeng/password';
import { TableModule } from 'primeng/table';
import { MenubarModule } from 'primeng/menubar'; // Import MenubarModule
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectsComponent } from './projects/projects.component';
import { BadgeModule } from 'primeng/badge';
import { UpdproComponent } from './updpro/updpro.component';
import { FileUploadModule } from 'primeng/fileupload'; 
@NgModule({
    declarations: [
        AppComponent, NotfoundComponent, TrainingComponent, ChangepasswdComponent, ProjectsComponent, UpdproComponent ],

    imports: [
        AppRoutingModule,
        AppLayoutModule,
        ToastModule,
        TableModule,
        FormsModule,
        FileUploadModule,
        ReactiveFormsModule,
        SplitButtonModule,
        CommonModule,
        DropdownModule,
        PasswordModule,
        MenubarModule,
        BrowserAnimationsModule,
        BadgeModule
      
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService,MessageService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
