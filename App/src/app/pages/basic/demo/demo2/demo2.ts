import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'page-demo2',
    templateUrl: 'page.html',
})
export class Demo2Page implements OnInit{

    constructor() {
        console.log('Demo2Page::constructor');
    }

    ngOnInit() {
        console.log('Demo2Page::ngOnInit');
    }

}
