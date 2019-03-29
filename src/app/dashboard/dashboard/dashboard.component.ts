import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Login } from 'src/app/models/login';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  login = new Login();
  constructor(private activedRouter: ActivatedRoute) {
    this.login = JSON.parse(this.activedRouter.snapshot.params['login']);
  }
  ngOnInit() {
  }
}
