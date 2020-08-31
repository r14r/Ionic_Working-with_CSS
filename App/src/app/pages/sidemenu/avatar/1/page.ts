import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'page-side-menu-with-avatar1',
    templateUrl: 'page.html',
    styleUrls: [ 'page.scss' ]
})
export class SideMenuWithAvatar1Page {

    constructor(public navCtrl: NavController) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SideMenuWithAvatar1Page');
    }

}
