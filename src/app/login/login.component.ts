import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../app.component.css']
})
export class LoginComponent implements OnInit {

    isNewUser = false;
    isLoggedIn = false;
    constructor(private router: Router) { }

    ngOnInit() {
  }

  authenticate() {
  this.isLoggedIn = true;
  //this.router.navigate(['/home']);
  }

  onClick() {
  this.isNewUser = true;
  }

  registerNewuser() {
  this.isLoggedIn = true;
  }
}