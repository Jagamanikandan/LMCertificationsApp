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

}
