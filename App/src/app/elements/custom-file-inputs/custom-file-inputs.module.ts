import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CustomFileInputsPage } from './custom-file-inputs.page';

const routes: Routes = [
  {
    path: '',
    component: CustomFileInputsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CustomFileInputsPage]
})
export class CustomFileInputsPageModule {}
