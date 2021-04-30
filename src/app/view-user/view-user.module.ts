import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ViewUserPage } from './view-user.page';

import { IonicModule } from '@ionic/angular';

import { ViewUserPageRoutingModule } from './view-user-routing.module';
import { SwipeModule } from '../directive/swipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewUserPageRoutingModule,
    SwipeModule
  ],
  declarations: [ViewUserPage]
})
export class ViewUserPageModule {}
