import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'page-side-menu-drop-down3',
  templateUrl: 'side-menu-drop-down3.html',
  styleUrls: [ 'side-menu-drop-down3.scss' ]
})
export class SideMenuDropDown3Page {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SideMenuDropDown3Page');
  }

}
