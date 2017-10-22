import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

  @Injectable()
export class certficatesService {
  ceretificateMockList: certificate[];
  certificateList: any;

  certificateModeId = {
    '10': 'External',
    '11': 'Interal',
    '12': 'iON Platform'
  };

  certificateNameId = {
    '10111': 'Amazon Web Services (AWS Certified Developer)',
    '10112': 'Microsoft Certified Solutions Developer (MCSD)',
    '10113': 'MongoDB Certified Developer Associate',
    '10211': 'Selenium',
    '10212': 'SoapUI',
    '10311': 'SAFe Agilist',
    '10312': 'Certified Scrum Master',
    '10411': 'INS 21',
    '10412': 'INS 22',
    '10413': 'INS 23',
    '10213': 'Cucumber BDD',
    '20111': 'REST Service',
    '20112': 'Java',
    '20211': 'SOA Testing',
    '20212': 'Test Automation',
    '20311': 'Lean Six Sigma',
    '30111': 'AngularJs',
    '30112': 'MongoDB',
    '30113': 'ReactJS',
  } ;


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
