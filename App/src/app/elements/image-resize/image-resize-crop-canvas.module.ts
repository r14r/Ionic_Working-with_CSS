import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ImageResizeCropCanvasPage } from './image-resize-crop-canvas.page';

const routes: Routes = [
  {
    path: '',
    component: ImageResizeCropCanvasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ImageResizeCropCanvasPage]
})
export class ImageResizeCropCanvasPageModule {}
