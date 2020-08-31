import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TopMenuHoverLine1Page } from './top-menu-hover-line1';

const routes: Routes = [{ path: '', component: TopMenuHoverLine1Page }];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [TopMenuHoverLine1Page]
})
export class TopMenuHoverLine1PageModule { }

