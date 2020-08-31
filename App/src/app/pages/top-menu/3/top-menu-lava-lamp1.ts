import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'page-top-menu-lava-lamp1',
    templateUrl: 'top-menu-lava-lamp1.html',
})
export class TopMenuLavaLamp1Page {

    constructor(public navCtrl: NavController) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad TopMenuLavaLamp1Page');
    }

}
