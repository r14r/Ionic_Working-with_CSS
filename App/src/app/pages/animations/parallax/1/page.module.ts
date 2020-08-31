import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Parallax1Page } from './page';

const routes: Routes = [{ path: '', component: Parallax1Page }];

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes)],
    declarations: [Parallax1Page]
})
export class Parallax1PageModule { }
