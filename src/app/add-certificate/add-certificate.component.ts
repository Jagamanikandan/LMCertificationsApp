import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { NgForm } from '@angular/forms';

import { certficatesService, certificate } from '..//search-certification/search-certification.service';

@Component({
  selector: 'addCertificate',
  templateUrl: './add-certificate.component.html',
  styleUrls: ['./add-certificate.component.css', '../app.component.css']
})
export class AddCertificateComponent implements OnInit {

  certificateModeId: any;
  certificateNameId: any;
  certificateNameList: string[];
  certificateModeList: string[];
  certificateModes: any;
  certificateNames: any;
  recentCertificateCount = 0;
  apiUrl = 'http://localhost:8082/LMCertificationsApi/service';
  response: any;
  certificateList: any;
  username = '';

  constructor(
    private http: Http,
    dataService: certficatesService,
    recentCertificate: certificate
  ) {
    this.certificateNames = dataService.certificateNameId;
    this.certificateModes = dataService.certificateModeId;
    this.certificateNameList = Object.keys(this.certificateNames).map((key) => this.certificateNames[key]) ;
    this.certificateModeList = Object.keys(this.certificateModes).map((key) => this.certificateModes[key]) ;
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
    console.log(this.apiUrl + '/addNewCertificate1/' +
            employeeId.value + '/' +
             employeeName.value + '/' +
             certificationName.value + '/' +
             certificationMode.value + '/' +
             completedOn.value + '/' +
             score.value + '/' +
             grade.value + '/' +
             status.value);
    this.http.get(this.apiUrl + '/addNewCertificate1/' +
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

             // reset add certification form
             employeeId.value = '';
             employeeName.value = '';
             certificationName.value = '';
             certificationMode.value = '';
             completedOn.value = '';
             score.value = '';
             grade.value = '';
             status.value = '';
  }

  saveCertificate(addCertificateForm: NgForm): void {
  this.http.post(this.apiUrl + '/certificate/addNewCertificate', addCertificateForm.value)
            .subscribe(response => {
    this.certificateList = response.json();
    console.log(addCertificateForm.value);
    this.recentCertificateCount ++ ;
    addCertificateForm.resetForm();
    });
  }

   getCertificateName(certificationId: string): string {

   return this.certificateNames.find(name => name.code === certificationId)['name'];
   }

   getCertificarteMode(modeId: String): string {

   return this.certificateModes.find(name => name.code === modeId)['name'];
   }

   getUsername(employeeId: HTMLInputElement): void {

      this.http.get(this.apiUrl + '/user/getUser/' + employeeId.value)
      .subscribe(response => {
         this.username =  response.json()[1].EmployeeName;
         console.log('Name' + this.username);
      });
   }

}
