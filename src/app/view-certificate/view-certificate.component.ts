import { Component, Input, Output } from '@angular/core';
import { Http, Response } from '@angular/http';
import { NgForm } from '@angular/forms';

import { certficatesService, certificate } from '../search-certification/search-certification.service';

@Component({
  selector: 'viewCertificate',
  templateUrl: './view-certificate.component.html',
  styleUrls: ['./view-certificate.component.css']
})
export class ViewCertificateComponent {


    @Input() certificateList: any;
    @Input() searchType: number;
    @Input() searchCount: number;

    certificateModes: any;
    certificateNames: any;
    certificateNameList: any;
    certificateModeList: any;
    originalCert: any;
    apiUrl = 'http://localhost:8082/LMCertificationsApi/service/certificate';

    viewMode = [false];
    editMode = [false];

  constructor(
    private http: Http,
    private dataService: certficatesService,
  ) {
    this.certificateNames = dataService.certificateNameId;
    this.certificateModes = dataService.certificateModeId;
    this.certificateNameList = Object.keys(this.certificateNames).map((key) => this.certificateNames[key]) ;
    this.certificateModeList = Object.keys(this.certificateModes).map((key) => this.certificateModes[key]) ;
    this.viewMode = [false];
  }


   getCertificateName(certificationId: string): string {

      return this.certificateNames.find(name => name.code === certificationId)['name'];
      }

      getCertificateMode(modeId: String): string {

      return this.certificateModes.find(name => name.code === modeId)['name'];
      }

      viewCertifiateMode(index: number) {

        if (this.editMode[index] === false || this.editMode[index] === undefined) {
        this.viewMode[index] = true;
      }
      }

      editCertificateMode(index: number) {

        this.editMode[index] = true;
        this.viewMode[index] = false;
        this.originalCert = this.certificateList[index];
        console.log('initial: ' + this.originalCert.Grade);
      }

      hideCertifiateMode(index: number) {

        this.viewMode[index] = false;
      }

  deleteCertificate(oid: any) {

              console.log(this.certificateList);
                this.http.delete(this.apiUrl + '/deleteCertificate/' + oid )
                .subscribe(response => {
                console.log('Hello ' + response);
              });
              this.certificateList = this.certificateList.filter(item => item._id.$oid !== oid);
              console.log(this.certificateList);
          }

    updateCertificate(editCertificateForm: NgForm, index: number): void {
    console.log(editCertificateForm.value);
    console.log(index);
    this.http.put(this.apiUrl + '/updateCertificate', editCertificateForm.value)
        .subscribe(response => {
    console.log(response.json());
    });
    this.editMode[index] = false;
    this.viewMode[index] = true;
  }

  resetCertificate(index: string): void {

    console.log('original: ' + this.originalCert.Grade);

    this.certificateList[index].Grade = this.originalCert.Grade;
    this.editMode[index] = false;
    this.viewMode[index] = true;
    console.log('replaceed: ' + this.certificateList[index].Grade);
  }
}
