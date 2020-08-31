import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { AppState } from 'src/app/app.global';


@Component({
    selector: 'page-side-menu-animated1',
    templateUrl: 'side-menu-animated1.html',
})
export class SideMenuAnimated1Page implements OnInit {

    demo = '1';

    constructor(
        public platform: Platform,
        public global: AppState
    ) {
    }

    ngOnInit() {
        console.log('ionViewDidLoad SideMenuAnimated1Page');
    }

    changeTheme(theme) {
        this.global.set('theme', theme);
    }

    segmentTapped() {
        console.log('segmentTapped: ' + this.demo);
    }
}
