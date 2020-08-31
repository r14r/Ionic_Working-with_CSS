import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BlowingBubblesPage } from './page';

const routes: Routes = [  {    path: '',    component: BlowingBubblesPage  }];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BlowingBubblesPage]
})
export class BlowingBubblesPageModule {}
