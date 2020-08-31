import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-buttons2',
    templateUrl: './buttons2.page.html',
    styleUrls: ['./buttons2.page.scss'],
})
export class Buttons2Page implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    toggleClass(event: any) {
        console.log('Toggle Class: ' + event);
        console.dir(event);
    }
    
    /*
    const lis = document.querySelectorAll("li");
    const a = document.querySelectorAll("li a");
    
    for (let i = 0; i < lis.length; i++) {
        lis[i].addEventListener("click", function() {
        for (let i = 0; i < lis.length; i++) {
            lis[i].classList.remove("active");
            a[i].classList.remove("active-text");
        }
        this.classList.add("active");
        a[i].classList.add("active-text");
        });
    }
  */

}
