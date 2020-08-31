import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-loading1',
    templateUrl: './loading1.page.html',
    // styleUrls: ['./loading1.page.scss'],
})
export class Loading1Page implements OnInit {
    private MODULE = 'Loading1Page';

    log(func, line = '') {
        console.log(this.MODULE + '::' + func + '| ' + line)
    }
    constructor() {
        this.log('constructor');
    }

    ngOnInit() {
        this.log('ngOnInit');
    }

}
