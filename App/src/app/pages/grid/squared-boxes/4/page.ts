import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'page-demo4',
    templateUrl: 'page.html',
})
export class Demo4Page implements OnInit{

    constructor() {
        console.log('Demo4Page::constructor');
    }

    ngOnInit() {
        console.log('Demo4Page::ngOnInit');
    }

}
