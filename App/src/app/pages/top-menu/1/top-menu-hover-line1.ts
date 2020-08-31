import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'page-top-menu-hover-line1',
    templateUrl: 'top-menu-hover-line1.html',
})
export class TopMenuHoverLine1Page {

    constructor(public navCtrl: NavController) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad TopMenuHoverLine1Page');
    }

}
