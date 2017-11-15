import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

import { certficatesService, certificate } from './search-certification.service';

@Component({
  selector: 'searchByName',
  templateUrl: './search-certification.component.html',
  styleUrls: ['./search-certification.component.css']
})

export class SearchCertificationComponent implements OnInit {
  employeeId: string;
  searchCount = -1;
  certificateList: any;
  certificateModes: any;
  certificateNames: any;
  certificateYear = [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017];
  searchType = 0;  // 0 - no search, 1 - search-by-emp, 2 - search-by-cert, 3 - search-by-year
  searchValue: string;
  // $scope.date = new Date();
  // currentYear = {{date| date:'yyyy'}}

  apiUrl = 'http://localhost:8082/LMCertificationsApi/service/certificate/';

  private empSearch = new Subject<string>();
  constructor(
    private http: Http,
    dataService: certficatesService
  ) {
    this.certificateNames = dataService.certificateNameId;
    this.certificateModes = dataService.certificateModeId;
  }

  ngOnInit() {
  }

getCertificatesListByEmployee(employee: HTMLInputElement): void {

    this.searchCount = -1;
    this.searchType = 1;
    this.http.get(this.apiUrl + 'getCertificatesByEmployee/' + employee.value )
    .subscribe(response => {
    this.certificateList = response.json();
    this.searchCount = this.certificateList.length;
    if(this.searchCount > 0)
     this.searchValue = 'Employee Search: ' + this.certificateList[0].EmployeeName + ' (' + this.certificateList[0].EmployeeId + ')';
     else
      this.searchValue = 'Employee Number/Name: ' + employee.value;
     });
  }

  getEmployeesByCertificate(certificationName: HTMLInputElement): void {

    this.searchCount = -1;
    this.searchType = 2;
    this.searchValue = 'Certificate Search: ' + this.getCertificateName(certificationName.value);
    this.http.get(this.apiUrl + 'getEmployeesByCertificate/' + certificationName.value )
    .subscribe(response => {
    this.certificateList = response.json();
    this.searchCount = this.certificateList.length;

     });
  }

  getCertificatesByYear(year: HTMLInputElement): void {

    this.searchCount = -1;
    this.searchType = 3;
    this.searchValue = 'Year Search: ' + year.value;
    this.http.get(this.apiUrl + 'getCertificateByYear/' + year.value )
    .subscribe(response => {
    this.certificateList = response.json();
    this.searchCount = this.certificateList.length;
  });
  }

  search(empName: string): void {
    this.empSearch.next(empName);
    // <input type="Number" name="employeeId" (keyup)="search(searchBox.value)">
  }

  getCertificateName(certificationId: string): string {

          return this.certificateNames.find(name => name.code === certificationId)['name'];
          }
  viewcertifiate(cert: certificate) {

  }
}

