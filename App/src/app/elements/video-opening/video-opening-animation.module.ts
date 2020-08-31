import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VideoOpeningAnimationPage } from './video-opening-animation.page';

const routes: Routes = [
  {
    path: '',
    component: VideoOpeningAnimationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VideoOpeningAnimationPage]
})
export class VideoOpeningAnimationPageModule {}
