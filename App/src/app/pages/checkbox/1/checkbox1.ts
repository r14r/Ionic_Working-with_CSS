import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'page-checkbox',
    templateUrl: 'checkbox1.html',
    styleUrls: ['checkbox1.scss']
})
export class Checkbox1Page implements OnInit {

    constructor() {
        console.log('Checkbox1Page::constructor');
    }

    ngOnInit() {
        console.log('Checkbox1Page::ionViewDidLoad');
    }

}
