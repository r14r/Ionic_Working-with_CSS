import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'page-side-menu-circular1',
    templateUrl: 'page.html',
    styleUrls: [ 'page.scss' ]
})
export class SideMenuCircular1Page {

    constructor(public navCtrl: NavController) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SideMenuCircular1Page');
    }

}
