import { Component } from '@angular/core';
import { Login } from './models/login';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'SkateStoreApp';
  validationMessage = '';
  login = new Login();

  logIn(){
    if(this.login.username == 'abc' && this.login.password == '123' ){
      alert("Successfully logged in!");
    }else{
      this.validationMessage = 'Wrong credentials, try again.';
    }
  }

  redirectToRegisterPage(){
    
  }
}
