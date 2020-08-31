import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AnimationGridLoadingPage } from './animation-grid-loading.page';

const routes: Routes = [
  {
    path: '',
    component: AnimationGridLoadingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AnimationGridLoadingPage]
})
export class AnimationGridLoadingPageModule {}
