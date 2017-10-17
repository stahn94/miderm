import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {fam} from './fam';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  fams: Array<fam> = [];
  constructor(public navCtrl: NavController) {
    this.fams = [
      {name:'Father', phone_number: '010-1234-0000', address: '경북 포항시 북구 흥해읍 한동로 558 한동대학교 벧엘관', status: 'default'},
      {name:'Mother', phone_number: '010-1234-0001', address: '경북 포항시 북구 흥해읍 한동로 558 한동대학교 은혜관', status: 'default'},
      {name:'Sister', phone_number: '010-1234-0002', address: '경북 포항시 북구 흥해읍 한동로 558 한동대학교 창조관', status: 'default'},
      {name:'Brother', phone_number: '010-1234-0003', address: '경북 포항시 북구 흥해읍 한동로 558 한동대학교 비전관', status: 'default'}
      ];
  }
  addItem(){
    this.fams.push({name:'Grandfather', phone_number: '010-1234-0004', address: '경북 포항시 북구 흥해읍 한동로 558 한동대학교 행복관', status: 'default'})
  }
  Ilikeit(fam: any){
    fam.status = "like";
  }
  removeFam(fam: any){
    fam.status = "removed";
    let index = this.fams.indexOf(fam);
    if(index>-1){
      this.fams.splice(index, 1);
    }
  }
}
