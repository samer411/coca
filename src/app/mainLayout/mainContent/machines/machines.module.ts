import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MachinesComponent } from './machines.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [MachinesComponent],
  imports: [CommonModule, NgCircleProgressModule.forRoot()],
  exports: [MachinesComponent],
})
export class MachinesModule {}
