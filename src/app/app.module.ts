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
import { PlanningComponent } from './mainLayout/mainContent/planning/planning.component';
import { OperationsComponent } from './mainLayout/mainContent/planning/operations/operations.component';
import { PlanningHeaderComponent } from './mainLayout/mainContent/planning/planning-header/planning-header.component';
import { PlanningTopComponent } from './mainLayout/mainContent/planning/planning-top/planning-top.component';
import { PlanningMainComponent } from './mainLayout/mainContent/planning/planning-main/planning-main.component';
import { PlanningMainFunctionsComponent } from './mainLayout/mainContent/planning/planning-main-components/planning-main-functions/planning-main-functions.component';
import { PlanningMainFunctionComponent } from './mainLayout/mainContent/planning/planning-main-components/planning-main-function/planning-main-function.component';
import { MatNativeDateModule } from '@angular/material/core';
import { PlanningMainTimeComponent } from './mainLayout/mainContent/planning/planning-main-components/planning-main-time/planning-main-time.component';
import { PlanningMainMachineComponent } from './mainLayout/mainContent/planning/planning-main-components/planning-main-machine/planning-main-machine.component';
import { PlanningMainResourcesComponent } from './mainLayout/mainContent/planning/planning-main-components/planning-main-resources/planning-main-resources.component';
import { ReportsComponent } from './mainLayout/mainContent/reports/reports.component';
import { ReportsChartsComponent } from './mainLayout/mainContent/reports/reports-charts/reports-charts.component';
import { ReportsTotalProductionComponent } from './mainLayout/mainContent/reports/reports-total-production/reports-total-production.component';
import { ReportsPerformanceComponent } from './mainLayout/mainContent/reports/reports-performance/reports-performance.component';
import { ReportsPowerComponent } from './mainLayout/mainContent/reports/reports-power/reports-power.component';
import { ReportsLineComponent } from './mainLayout/mainContent/reports/reports-line/reports-line.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'machines', component: MachinesComponent },
  { path: 'planning', component: PlanningComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'auth', component: AuthComponent },
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
    PlanningComponent,
    OperationsComponent,
    PlanningHeaderComponent,
    PlanningTopComponent,
    PlanningMainComponent,
    PlanningMainFunctionsComponent,
    PlanningMainFunctionComponent,
    PlanningMainTimeComponent,
    PlanningMainMachineComponent,
    PlanningMainResourcesComponent,
    ReportsComponent,
    ReportsChartsComponent,
    ReportsTotalProductionComponent,
    ReportsPerformanceComponent,
    ReportsPowerComponent,
    ReportsLineComponent,
    AuthComponent,
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
    MatNativeDateModule,
    ChartModule,
    NgChartsModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
