import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SVGLoaderGSAPPage } from './svgloader-gsap.page';

const routes: Routes = [
  {
    path: '',
    component: SVGLoaderGSAPPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SVGLoaderGSAPPage]
})
export class SVGLoaderGSAPPageModule {}
