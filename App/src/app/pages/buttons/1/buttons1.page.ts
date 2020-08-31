import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-buttons1',
    templateUrl: './buttons1.page.html',
    styleUrls: ['./buttons1.page.scss'],
})
export class Buttons1Page implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    toggleClass(event: any) {
        console.log('Toggle Class: ' + event);
        console.dir(event);
    }

    /*
        $( ".button-group > div" ).click(function() {
            $('.button-group > div.active').not(this).removeClass('active');
            $( this ).toggleClass( 'active' );
          });
        */

}
