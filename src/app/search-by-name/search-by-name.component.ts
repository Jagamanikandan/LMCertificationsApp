import { Component, OnInit } from '@angular/core';
import { certificate } from './search-by-name.service';
import { certficateMockData } from './search-by-name.service';

@Component({
  selector: 'searchByName',
  templateUrl: './search-by-name.component.html',
  styleUrls: ['./search-by-name.component.css']
})
export class SearchByNameComponent implements OnInit {
  employeeId: string;
  notempty = false;
  certificateList: certificate[];
  constructor( private data: certficateMockData) {
    this.certificateList = data.getlist();
   }
  ngOnInit() {
  }

  getCertificatesByName(employeeId: string): void {
    this.notempty = true;
}
}

