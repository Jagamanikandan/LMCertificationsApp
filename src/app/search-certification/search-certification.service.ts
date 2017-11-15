import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

  @Injectable()
export class certficatesService {
  ceretificateMockList: certificate[];
  certificateList: any;

  certificateModeId = [
    {'code': '10', 'name': 'External'},
    {'code': '11', 'name': 'Internal'},
    {'code': '12', 'name': 'iON Platform'}
  ];

  certificateNameId = [
    {'code': '10111', 'name': 'Amazon Web Services (AWS Certified Developer)'},
    {'code': '10112', 'name': 'Microsoft Certified Solutions Developer (MCSD)'},
    {'code': '10113', 'name': 'MongoDB Certified Developer Associate'},
    {'code': '10211', 'name': 'Selenium'},
    {'code': '10212', 'name': 'SoapUI'},
    {'code': '10311', 'name': 'SAFe Agilist'},
    {'code': '10312', 'name': 'Certified Scrum Master'},
    {'code': '10411', 'name': 'INS 21'},
    {'code': '10412', 'name': 'INS 22'},
    {'code': '10413', 'name': 'INS 23'},
    {'code': '10213', 'name': 'Cucumber BDD'},
    {'code': '20111', 'name': 'REST Service'},
    {'code': '20112', 'name': 'Java'},
    {'code': '20211', 'name': 'SOA Testing'},
    {'code': '20212', 'name': 'Test Automation'},
    {'code': '20311', 'name': 'Lean Six Sigma'},
    {'code': '30111', 'name': 'AngularJs'},
    {'code': '30112', 'name': 'MongoDB'},
    {'code': '30113', 'name': 'ReactJS'}
  ];


  certificateMockList = [
    {
      employeeId: 123456,
      employeeName: 'Jaga',
      certificationId: 10111,
      certificationMode: 10,
      completedOn: '10/14/2017',
      score: 100,
      grade: 'A',
      status: 'Acquired'
      },
      {
      employeeId: 234567,
      employeeName: 'Madhu',
      certificationId: 10112,
      certificationMode: 10,
      completedOn: '10/14/2017',
      score: 98,
      grade: 'A',
      status: 'Acquired'
      }
  ];


  constructor( ) {
  }
  getMockCertificatesList(): certificate[] {
      return this.certificateMockList;
  }
}

export class certificate{
    employeeId: number;
    employeeName: string;
    certificationId: number;
    certificationMode: Number;
    completedOn: string;
    score: number;
    grade: string;
    status: string;
  }