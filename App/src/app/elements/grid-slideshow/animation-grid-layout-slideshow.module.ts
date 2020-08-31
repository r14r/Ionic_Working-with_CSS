import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AnimationGridLayoutSlideshowPage } from './animation-grid-layout-slideshow.page';

const routes: Routes = [
  {
    path: '',
    component: AnimationGridLayoutSlideshowPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AnimationGridLayoutSlideshowPage]
})
export class AnimationGridLayoutSlideshowPageModule {}
