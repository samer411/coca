import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SideBarComponent } from './mainLayout/side-bar/side-bar.component';
import { NavBarComponent } from './mainLayout/nav-bar/nav-bar.component';
import { DashboardComponent } from './mainLayout/mainContent/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';
import { RouterModule, Routes } from '@angular/router';
import { MachinesComponent } from './mainLayout/mainContent/machines/machines.component';
import { MachinesModule } from './mainLayout/mainContent/machines/machines.module';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { TotalProductionComponent } from './mainLayout/mainContent/dashboard/total-production/total-production.component';
import { PerformanceComponent } from './mainLayout/mainContent/dashboard/performance/performance.component';
import { PowerComponent } from './mainLayout/mainContent/dashboard/power/power.component';
import { CurrentActivityComponent } from './mainLayout/mainContent/dashboard/current-activity/current-activity.component';
import { TimeLineComponent } from './mainLayout/mainContent/dashboard/time-line/time-line.component';
import { ChartModule } from 'primeng/chart';
import { NgChartsModule } from 'ng2-charts';
import { ChartsComponent } from './mainLayout/mainContent/dashboard/charts/charts.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'machines', component: MachinesComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    NavBarComponent,
    DashboardComponent,
    TotalProductionComponent,
    PerformanceComponent,
    PowerComponent,
    CurrentActivityComponent,
    TimeLineComponent,
    ChartsComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    CalendarModule,
    BrowserAnimationsModule,
    MachinesModule,
    NgCircleProgressModule,
    MatProgressBarModule,
    ChartModule,
    NgChartsModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
