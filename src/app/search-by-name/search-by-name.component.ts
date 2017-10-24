import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

import { certificate } from './search-by-name.service';
import { certficatesService } from './search-by-name.service';

@Component({
  selector: 'searchByName',
  templateUrl: './search-by-name.component.html',
  styleUrls: ['./search-by-name.component.css']
})

export class SearchByNameComponent implements OnInit {
  employeeId: string;
  empSearchCount = -1;
  certificateList: any;
  certificateModeId: any;
  certificateNameId: any;
  certificateNameList: string[];
  certificateModeList: string[];

  private empSearch = new Subject<string>();
  constructor(
    private http: Http,
    dataService: certficatesService
  ) {
    this.certificateModeId = dataService.certificateModeId;
    this.certificateNameId = dataService.certificateNameId;
    this.certificateNameList = Object.keys(this.certificateNameId).map((key) => this.certificateNameId[key]) ;
    this.certificateModeList = Object.keys(this.certificateModeId).map((key) => this.certificateModeId[key]) ;
  }

  ngOnInit() {
  }

  getCertificatesList(employee: HTMLInputElement): void {
    this.http.get('http://localhost:8082/LMCertificationsApi/service/certificate/getCertificatesByEmployee/' + employee.value )
    .subscribe(response => {
    this.certificateList = response.json();
    this.empSearchCount = this.certificateList.length;
     });
  }

  search(empName: string): void {
    this.empSearch.next(empName);
    // <input type="Number" name="employeeId" (keyup)="search(searchBox.value)">
  }
}

