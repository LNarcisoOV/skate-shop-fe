import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  title = 'SkateStoreApp';
  validationMessage = '';
  login = new Login;

  constructor(private router: Router) { }


  authenticate() {
    if (this.login.username == 'abc' && this.login.password == '123') {
      this.router.navigate(['home/', JSON.stringify(this.login)]);
    } else {
      this.validationMessage = 'Wrong credentials, try again.'
    }
  }

  redirectToRegisterPage() {

  }

}
