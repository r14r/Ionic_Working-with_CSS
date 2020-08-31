import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AnimationCalendarPage } from './animation-calendar.page';

const routes: Routes = [
  {
    path: '',
    component: AnimationCalendarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AnimationCalendarPage]
})
export class AnimationCalendarPageModule {}
