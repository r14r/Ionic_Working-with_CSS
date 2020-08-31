import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
    selector: 'app-buttons3',
    templateUrl: './buttons3.page.html',
    styleUrls: ['./buttons3.page.scss'],
})
export class Buttons3Page implements OnInit {
    private MODULE = 'Buttons3Page';

    log(func, line = '') {
        console.log(this.MODULE + '::' + func + '| ' + line)
    }
    constructor(private renderer: Renderer2) { 
        this.log('constructor');
    }

    ngOnInit() {
        this.log('ngOnInit');
    }

    toggleClass(event: any) {
        this.log('toogleClass', 'Toggle Class: ' + event.srcElement);

        this.log('toogleClass', 'event:');        console.dir(event);
        this.log('toogleClass', 'event.target');  console.dir(event.target);

        const classname = 'active';

        if (event.target.classList.contains(classname)) {
            this.log('toogleClass', 'remove class ' + classname);
            this.renderer.removeClass(event.target, classname);
        } else {
            this.log('toogleClass', 'add    class ' + classname);
            this.renderer.addClass(event.target, classname);
        }
    }

}
