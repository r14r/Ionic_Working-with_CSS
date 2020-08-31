import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ShazamButtonEffectPage } from './shazam-button-effect.page';

const routes: Routes = [
  {
    path: '',
    component: ShazamButtonEffectPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ShazamButtonEffectPage]
})
export class ShazamButtonEffectPageModule {}
