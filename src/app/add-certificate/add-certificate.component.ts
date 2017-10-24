import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

import { certficatesService } from '..//search-by-name/search-by-name.service';

@Component({
  selector: 'addCertificate',
  templateUrl: './add-certificate.component.html',
  styleUrls: ['./add-certificate.component.css']
})
export class AddCertificateComponent implements OnInit {

  certificateModeId: any;
  certificateNameId: any;
  certificateNameList: string[];
  certificateModeList: string[];
  apiUrl = 'http://localhost:8082/LMCertificationsApi/service/certificate';
  response: any;

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

  onSubmit(employeeId: HTMLInputElement,
    employeeName: HTMLInputElement,
     certificationName: HTMLInputElement,
     certificationMode: HTMLInputElement,
     completedOn: HTMLInputElement,
    score: HTMLInputElement,
    grade: HTMLInputElement,
    status: HTMLInputElement): void {
      console.log(certificationName.value),
    console.log(this.apiUrl + '/addNewCertificate/' +
            employeeId.value + '/' +
             employeeName.value + '/' +
             certificationName.value + '/' +
             certificationMode.value + '/' +
             completedOn.value + '/' +
             score.value + '/' +
             grade.value + '/' +
             status.value);
    this.http.get(this.apiUrl + '/addNewCertificate/' +
             employeeId.value + '/' +
              employeeName.value + '/' +
              certificationName.value + '/' +
              certificationMode.value + '/' +
              completedOn.value + '/' +
              score.value + '/' +
              grade.value + '/' +
              status.value )
            .subscribe(response => {
            this.response = response;
             });

             employeeId.value = '';
             employeeName.value = '';
             certificationName.value = '';
             certificationMode.value = '';
             completedOn.value = '';
             score.value = '';
             grade.value = '';
             status.value = '';
  }
}
