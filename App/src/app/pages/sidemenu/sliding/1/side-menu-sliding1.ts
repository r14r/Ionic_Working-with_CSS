import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

/**
 * Generated class for the SideMenuSliding1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-side-menu-sliding1',
  templateUrl: 'side-menu-sliding1.html',
})
export class SideMenuSliding1Page {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SideMenuSliding1Page');
  }

}
