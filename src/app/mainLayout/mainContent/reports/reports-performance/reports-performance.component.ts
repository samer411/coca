import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports-performance',
  templateUrl: './reports-performance.component.html',
  styleUrls: ['./reports-performance.component.scss'],
})
export class ReportsPerformanceComponent implements OnInit {
  constructor() {}
  values = [45, 85];
  ngOnInit(): void {}
}
