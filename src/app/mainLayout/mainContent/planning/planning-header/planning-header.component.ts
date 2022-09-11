import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planning-header',
  templateUrl: './planning-header.component.html',
  styleUrls: ['./planning-header.component.scss'],
})
export class PlanningHeaderComponent implements OnInit {
  constructor() {}
  onButtonGroupClick($event: { target: any; srcElement: any }) {
    let clickedElement = $event.target || $event.srcElement;

    if (clickedElement.nodeName === 'BUTTON') {
      let isCertainButtonAlreadyActive =
        clickedElement.parentElement.querySelector('.active');
      // if a Button already has Class: .active
      if (isCertainButtonAlreadyActive) {
        isCertainButtonAlreadyActive.classList.remove('active');
      }

      clickedElement.className += ' active';
    }
  }
  ngOnInit(): void {}
}
