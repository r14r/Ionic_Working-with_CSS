import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Snow1Page } from './page';

const routes: Routes = [{ path: '', component: Snow1Page }];

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes)],
    declarations: [Snow1Page]
})
export class Snow1PageModule { }
