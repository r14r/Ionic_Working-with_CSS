import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SideMenuCircular1Page as Page} from './page';

const routes: Routes = [{ path: '', component: Page }];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [Page]
})
export class SideMenuCircular1PageModule { }
