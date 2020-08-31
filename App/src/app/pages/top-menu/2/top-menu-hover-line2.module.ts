import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TopMenuHoverLine2Page } from './top-menu-hover-line2';

const routes: Routes = [{ path: '', component: TopMenuHoverLine2Page }];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [TopMenuHoverLine2Page]
})
export class TopMenuHoverLine2PageModule { }

