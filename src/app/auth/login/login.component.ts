import { Component, OnInit } from '@angular/core';
import { AsyncSubject } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  //valCheck: string[] = ['remember'];
  
  form: any = {
    username: null, 
    password: null
  };

  isLoggedIn = false;
  errorMessage = '';

  constructor(private authService: AuthService, private storageService: StorageService, private router: Router){}

  ngOnInit(): void {
    
  }

  onLoginAttempt(): void {
    const { username, password } = this.form;
    console.log(this.form);

    this.authService.login(username, password).subscribe({
      next: data => {
        this.isLoggedIn = true;
        console.log('Success');
        console.log(data);
        this.router.navigate(['/home']);
      },
      error: err => {
        this.errorMessage = err.error.message;
        console.log(this.errorMessage);
      }
    });
  }
}
