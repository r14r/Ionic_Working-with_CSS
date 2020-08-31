import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SpringLoadersPage } from './spring-loaders.page';

const routes: Routes = [
  {
    path: '',
    component: SpringLoadersPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SpringLoadersPage]
})
export class SpringLoadersPageModule {}
