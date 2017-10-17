import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {fam_object} from '../home/fam_object';
/**
 * Generated class for the FamilyDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-family-details',
  templateUrl: 'family-details.html',
})
export class FamilyDetailsPage {
  famInfo: fam_object;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.famInfo = navParams.data.fam_object;
    console.log(this.famInfo);
  }

  

}
