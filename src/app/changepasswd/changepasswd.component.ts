import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changepasswd',
  templateUrl: './changepasswd.component.html',
  styleUrls: ['./changepasswd.component.scss'],
  providers: [MessageService],
})
export class ChangepasswdComponent {
  form: FormGroup;
  currentPassword = '1234';



  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private router: Router
  ) {
    this.form = this.fb.group({
      oldPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  changePassword() {
    const oldPassword = this.form.get('oldPassword')?.value;

    if (oldPassword === this.currentPassword) {
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Password updated successfully.'
      });
      this.router.navigate(['/home']);
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Old password is incorrect.'
      });
    }
  }
  
}
