import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  logger: boolean = false;

  constructor() { }

  ngOnInit(): void{
  }

  loggedIn(): boolean {
    this.logger=true;
    return this.logger;
  }
  onLogout() {
    //localStorage.removeItem('token');
    this.logger=false;
    return this.logger;
  }
}