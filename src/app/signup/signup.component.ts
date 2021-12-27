import { HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { get } from '@angular/fire/database';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('',Validators.required),
  });

  constructor(private authService: AuthenticationService,
    private router: Router,
    private toast:HotToastService
    ) {}


  ngOnInit(): void {}

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
  submit() {
    if (!this.loginForm.valid){
      return;
    }
    const { email, password} = this.loginForm.value;
    this.authService.login(email, password).pipe(
      this.toast.observe({
        success: 'Logged In!',
        loading: 'Logging In...',
        error: 'There was an error'
      })
    ).subscribe(() => {
      this.router.navigate(['home']);
    })
  }
}
