import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HeatDistortionEffectPage } from './heat-distortion-effect.page';

const routes: Routes = [
  {
    path: '',
    component: HeatDistortionEffectPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HeatDistortionEffectPage]
})
export class HeatDistortionEffectPageModule {}
