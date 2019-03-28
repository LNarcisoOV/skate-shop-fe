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

  constructor(private activedRouter: ActivatedRoute) { }


  ngOnInit() {
    this.login = this.activedRouter.snapshot.params.get('login');
    alert(this.login.username);
  }

}
