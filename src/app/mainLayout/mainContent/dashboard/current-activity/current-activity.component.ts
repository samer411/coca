import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-activity',
  templateUrl: './current-activity.component.html',
  styleUrls: ['./current-activity.component.scss'],
})
export class CurrentActivityComponent implements OnInit {
  lines = [
    {
      color: '#457B9D',
      oee: '20%',
      mtbf: '30%',
      uptime: '40%',
    },
    {
      color: '#FF9F1C',
      oee: '30%',
      mtbf: '40%',
      uptime: '50%',
    },
    {
      color: '#2EC4B6',
      oee: '40%',
      mtbf: '50%',
      uptime: '60%',
    },
    {
      color: '#FF5400',
      oee: '80%',
      mtbf: '80%',
      uptime: '90%',
    },
    {
      color: '#CA4E82',
      oee: '50%',
      mtbf: '30%',
      uptime: '70%',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
