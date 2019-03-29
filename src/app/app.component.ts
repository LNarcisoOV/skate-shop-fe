import { Component } from '@angular/core';
import { Login } from './models/login';
import { Router } from '@angular/router';
 

@Component({ 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'skateShopApp';
  validationMessage = '';
  login = new Login();
 
  constructor(private router: Router){

  }

  authenticate(){
    if(this.login.username=='abc' && this.login.password=='123'){
      this.router.navigate(['home/', JSON.stringify(this.login)]);
    }else{
      this.validationMessage = 'Wrong credentials, try again.'
    }
  }

  redirectToRegisterPage(){
    
  }
}
