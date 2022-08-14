import { Component, OnInit, ViewChild } from '@angular/core';
import { CircleProgressComponent } from 'ng-circle-progress';

@Component({
  selector: 'app-machines',
  templateUrl: './machines.component.html',
  styleUrls: ['./machines.component.scss'],
})
export class MachinesComponent implements OnInit {
  @ViewChild('circleProgress') circleProgress!: CircleProgressComponent;

  constructor() {}

  ngOnInit(): void {}
}
