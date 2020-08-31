import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SlidingHeaderLayoutPage } from './sliding-header-layout.page';

const routes: Routes = [
  {
    path: '',
    component: SlidingHeaderLayoutPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SlidingHeaderLayoutPage]
})
export class SlidingHeaderLayoutPageModule {}
