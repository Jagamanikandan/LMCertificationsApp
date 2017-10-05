import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    isNewUser = false;
    isLoggedIn = false;
    constructor() { }

    ngOnInit() {
  }
  onSubmit() {
  this.isLoggedIn = true;
  }

  onClick() {
  this.isNewUser = true;
  }

  registerNewuser() {
  this.isLoggedIn = true;
  }
}
