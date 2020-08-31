import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AnimatedTextFillsAllPage } from './animated-text-fills-all.page';

const routes: Routes = [
  {
    path: '',
    component: AnimatedTextFillsAllPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AnimatedTextFillsAllPage]
})
export class AnimatedTextFillsAllPageModule {}
