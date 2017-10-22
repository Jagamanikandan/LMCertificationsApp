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

  numbers = new RegExp(/^[0-9]+$/);

  private empSearch = new Subject<string>();
  constructor(
    private http: Http,
    dataService: certficatesService
  ) {
    this.certificateModeId = dataService.certificateModeId;
    this.certificateNameId = dataService.certificateNameId;
  }

  ngOnInit() {
  }

  // getCertificates(empId: string): void {
//  this.notempty = true;
//    this.employeeId = empId;
 //   empId = '123456';
 //   this.certificateList = this.service.getCertificatesByEmpId(empId).json();
// }

  getCertificatesList(employee: HTMLInputElement): void {
    if (this.numbers.test(employee.value)) {
    this.http.get('http://localhost:8082/LMCertificationsApi/service/certificate/getCertificatesByEmpId/' + employee.value )
    .subscribe(response => {
    this.certificateList = response.json();
    this.empSearchCount = this.certificateList.length;
     });
  } else {
    this.http.get('http://localhost:8082/LMCertificationsApi/service/certificate/getCertificatesByEmpName/' + employee.value )
    .subscribe(response => {
    this.certificateList = response.json();
    this.empSearchCount = this.certificateList.length;
     });
  }
  }

  search(empName: string): void {
    this.empSearch.next(empName);
    // <input type="Number" name="employeeId" (keyup)="search(searchBox.value)">
  }
}

