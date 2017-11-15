import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  this.router.navigate(['/welcome'])
  }
}