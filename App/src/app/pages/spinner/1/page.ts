import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'page-spinner1',
    templateUrl: 'page.html',
    styleUrls: [ 'page.scss' ]
})
export class Spinner1Page {

    paused  = false;

    constructor(public navCtrl: NavController) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad Spinner1Page');
    }

    toggleState() {
        this.paused = !this.paused;
    }

}
