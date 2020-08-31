import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'page-demo3',
    templateUrl: 'page.html',
})
export class Demo3Page implements OnInit{

    constructor() {
        console.log('Demo3Page::constructor');
    }

    ngOnInit() {
        console.log('Demo3Page::ngOnInit');
    }

}
