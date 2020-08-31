import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SideMenuDropDown1Page as Page } from './side-menu-drop-down1';

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
export class SideMenuDropDown1PageModule {}
