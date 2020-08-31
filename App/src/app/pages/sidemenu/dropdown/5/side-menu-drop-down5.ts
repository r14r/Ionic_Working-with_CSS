import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'page-side-menu-drop-down5',
    templateUrl: 'side-menu-drop-down5.html',
    styleUrls: ['side-menu-drop-down5.scss']
})
export class SideMenuDropDown5Page implements OnInit {

    constructor(public navCtrl: NavController) {
    }

    ngOnInit() {
        console.log('ngOnInit SideMenuDropDown5Page');
    }

}
