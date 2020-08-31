import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'page-demo1',
    templateUrl: 'page.html',
})
export class Demo1Page implements OnInit{

    constructor() {
        console.log('Demo1Page::constructor');
    }

    ngOnInit() {
        console.log('Demo1Page::ngOnInit');
    }

}
