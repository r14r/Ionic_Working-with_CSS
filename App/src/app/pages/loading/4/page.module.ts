import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AnimatedCircles1Page } from './page';

const routes: Routes = [{ path: '', component: AnimatedCircles1Page }];

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes)],
    declarations: [AnimatedCircles1Page]
})
export class AnimatedCircles1PageModule { }
