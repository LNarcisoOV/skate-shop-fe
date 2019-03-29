import { Component, OnInit } from '@angular/core';
import { Login } from '../models/login';
import { ActivatedRoute } from '@angular/router';
import { ProductListComponent } from '../product/product-list/product-list.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  login = new Login();
  
  constructor(private activedRouter: ActivatedRoute) {
    this.login = JSON.parse(this.activedRouter.snapshot.params['login']);     
  }
  
  ngOnInit() {
   
  }

}
