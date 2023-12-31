import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { LoginServiceService } from 'src/app/Services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient,private loginService:LoginServiceService, private router:Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
           
        this.loginService.login(formData).subscribe(
          (data) => {
            // Handle successful API response
            console.log('API Response:', data);
             // Store the received data in localStorage
            localStorage.setItem('logindata', JSON.stringify(data));

            // Redirect to the 'addscore' route upon successful login
            this.router.navigate(['/addscore']);
          },
          (error) => {
            // Handle error from API
            console.error('API Error:', error);
          }
        );
    } 
  }

  
}

