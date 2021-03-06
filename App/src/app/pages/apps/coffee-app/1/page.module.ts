import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CoffeeAppPage } from './page';

const routes: Routes = [{ path: '', component: CoffeeAppPage }];

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes)],
    declarations: [CoffeeAppPage]
})
export class CoffeeAppPageModule { }
