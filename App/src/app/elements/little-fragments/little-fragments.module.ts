import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LittleFragmentsPage } from './little-fragments.page';

const routes: Routes = [
  {
    path: '',
    component: LittleFragmentsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LittleFragmentsPage]
})
export class LittleFragmentsPageModule {}
