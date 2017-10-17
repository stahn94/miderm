import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {fam_object} from './fam_object';
import {FamilyDetailsPage} from '../family-details/family-details'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  fams: Array<fam_object> = [];
  searchQuery: string = '';

  constructor(public navCtrl: NavController) {

      this.initializeItems();
  }
  initializeItems() {
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
  Ilikeit(fam: fam_object){
    fam.status = "like";
  }
  removeFam(fam: fam_object){
    fam.status = "removed";
    let index = this.fams.indexOf(fam);
    if(index>-1){
      this.fams.splice(index, 1);
    }
  }
  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.fams = this.fams.filter((fam) => {
        return (fam.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  gofamDetails(famdata){
    this.navCtrl.push("FamilyDetailsPage" , {fam_object: famdata});
  }
}
