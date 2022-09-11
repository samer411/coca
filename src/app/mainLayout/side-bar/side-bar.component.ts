import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  constructor() {}

  // changeToBlue() {
  //   const elem = document.getElementById('sideBarCoca');
  //   const button = document.getElementById('sideBarPlanning');
  //   if (button!.classList.contains('active')) {
  //     elem!.style.background = '#2D62ED';
  //   } else {
  //     elem!.style.background = '#f40009';
  //   }
  // }
  ngOnInit(): void {}
}
