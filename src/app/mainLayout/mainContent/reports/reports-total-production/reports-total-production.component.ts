import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports-total-production',
  templateUrl: './reports-total-production.component.html',
  styleUrls: ['./reports-total-production.component.scss'],
})
export class ReportsTotalProductionComponent implements OnInit {
  value = 25;
  constructor() {}

  ngOnInit(): void {}
}
