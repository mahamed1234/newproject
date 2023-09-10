import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-updpro',
  templateUrl: './updpro.component.html',
  styleUrls: ['./updpro.component.scss'],
  providers: [MessageService],
})
export class UpdproComponent {
  updateForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private messageService: MessageService) {
    this.updateForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      avatar: ['']
    });
    
  }
  }


