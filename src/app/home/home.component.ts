import { Component, OnInit } from '@angular/core';
import { Login } from '../models/login';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  login = new Login();
  test = '';

  constructor(private activedRouter: ActivatedRoute) {
    this.activedRouter.params.subscribe(params => {
      this.login = JSON.parse(params['login']);    
    });
  }
  
  ngOnInit() {
   
  }

}
