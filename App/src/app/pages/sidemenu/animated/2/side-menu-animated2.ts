import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
	selector: 'page-side-menu-animated2',
	templateUrl: 'side-menu-animated2.html',
})
export class SideMenuAnimated2Page {

	constructor(public navCtrl: NavController) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad SideMenuAnimated2Page');
	}

}
