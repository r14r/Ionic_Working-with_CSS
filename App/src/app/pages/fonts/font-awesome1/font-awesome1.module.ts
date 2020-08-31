import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FontAwesome1Page } from './font-awesome1.page';

const routes: Routes = [
  {
    path: '',
    component: FontAwesome1Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FontAwesome1Page]
})
export class FontAwesome1PageModule {}
