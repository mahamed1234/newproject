import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder, Validators, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import {MessageService} from 'primeng/api';
@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css'],
  providers: [MessageService,],
})
export class TrainingComponent implements OnInit {
editingIndex: number | null = null;
searchText: any="";
applyFilter() {
throw new Error('Method not implemented.');
}
 
  form: FormGroup;
  NUMERIC_PATTREN = '^-?[0-9]\\d*(\\.\\d{1,2})?$';
  email_Pattren = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; 
  saved: boolean = false;


  usersList:any[]=[
    {
      fullName:"mhammed massoud",
      email:"mhammed@email.com",
      password:"1234",
      avatar:"assets/demo/images/avatar/amyelsner.png"
    },
    {
      fullName:"zaher bouzid",
      email:"zaher@email.com",
      password:"12345",
      avatar:"assets/demo/images/avatar/annafali.png"
    }
  ]
  constructor(private fb: FormBuilder, private router: Router,
    private messageService: MessageService
    ) {}

  ngOnInit(): void {
    this.loadForm();
  }

  loadForm() {
    this.form = this.fb.group({
      email: ['', Validators.pattern(this.email_Pattren)],
      Password: ['', Validators.pattern(this.NUMERIC_PATTREN)]
    });
  }

  save() {
    this.saved = true;

    if (this.form.valid) {
      if (this.editingIndex !== null) {
        this.usersList[this.editingIndex] = this.form.value;
        this.editingIndex = null;
       
      } 
      const email = this.form.controls['email'].value;
      const enteredPassword = this.form.controls['Password'].value;
      const foundUser= this.usersList.find(x=>x.email==email)
      if (foundUser && foundUser.password==enteredPassword) {
        localStorage.setItem('user',JSON.stringify(foundUser))
        this.router.navigate(['/home']);
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Login successful' });
      } else {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Login failed. Invalid email or password.' });
      }
    } 
  }
}
/**  deleteItem(item: string): void {
  if(confirm("are you sure to delete")){
    const index =this.usersList.indexOf(item)
    if (index !== -1){
    this.usersList.splice( index ,1);
    alert("suppression succés");
  }
  else{
    alert("suppression echoué");
  }
}
  }
  editItem(item: any) {
    this.editingIndex = this.usersList.indexOf(item);
    this.form.patchValue(item);
    }
}
*/