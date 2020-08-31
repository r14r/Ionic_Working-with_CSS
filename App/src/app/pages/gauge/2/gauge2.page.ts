import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
    selector: 'page-home',
    templateUrl: 'gauge2.page.html',
    styleUrls: [ 'gauge2.page.scss' ]
})
export class Gauge2Page implements OnInit {
    @ViewChild('"container', { read: ElementRef }) container: ElementRef;

    constructor() {
    }

    ngOnInit() {
    }

}
