import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PrismEffectSliderPage } from './prism-effect-slider.page';

const routes: Routes = [
  {
    path: '',
    component: PrismEffectSliderPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PrismEffectSliderPage]
})
export class PrismEffectSliderPageModule {}
