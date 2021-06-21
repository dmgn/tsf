import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideoreplayPageRoutingModule } from './videoreplay-routing.module';

import { VideoreplayPage } from './videoreplay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideoreplayPageRoutingModule
  ],
  declarations: [VideoreplayPage]
})
export class VideoreplayPageModule {}
