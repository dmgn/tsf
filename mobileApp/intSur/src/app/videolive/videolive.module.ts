import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideolivePageRoutingModule } from './videolive-routing.module';

import { VideolivePage } from './videolive.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideolivePageRoutingModule
  ],
  declarations: [VideolivePage]
})
export class VideolivePageModule {}
