import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SideBarComponent } from './mainLayout/side-bar/side-bar.component';
import { NavBarComponent } from './mainLayout/nav-bar/nav-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';
import {AccordionModule} from 'primeng/accordion';     
import {MenuItem} from 'primeng/api';  

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    NavBarComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CalendarModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
