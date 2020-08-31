import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TopMenuLavaLamp1Page } from './top-menu-lava-lamp1';

const routes: Routes = [{ path: '', component: TopMenuLavaLamp1Page }];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [TopMenuLavaLamp1Page]
})
export class TopMenuLavaLamp1PageModule { }


