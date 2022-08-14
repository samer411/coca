import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-total-production',
  templateUrl: './total-production.component.html',
  styleUrls: ['./total-production.component.scss'],
})
export class TotalProductionComponent implements OnInit {
  value = 75;
  constructor() {}

  ngOnInit(): void {}
}
