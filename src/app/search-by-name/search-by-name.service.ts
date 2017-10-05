import { Injectable } from '@angular/core';

  @Injectable()
export class certficateMockData{
  ceretificateMockList: certificate[];
  certificateMockList = [
    {
      name: 'HP ALM',
      completionDate: '10/15/2016',
      cerertificationMode: 'Prometric'
    },
    {
        name: 'SoapUI',
        completionDate: '09/19/2017',
        cerertificationMode: 'Online'
      },
  ];
  getlist(): certificate[] {
      return this.certificateMockList;
  }

}


export class certificate{
    name: string;
    completionDate: string;
    cerertificationMode: string;
  }
