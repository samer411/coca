import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planning-main',
  templateUrl: './planning-main.component.html',
  styleUrls: ['./planning-main.component.scss'],
})
export class PlanningMainComponent implements OnInit {
  constructor() {}

  classChecker(elem: HTMLElement) {
    return elem.classList!.contains('show');
  }
  onButtonGroupClick($event: { target: any; srcElement: any }) {
    let clickedElement = $event.target || $event.srcElement;

    if (clickedElement.nodeName === 'I') {
      let isCertainButtonAlreadyActive =
        clickedElement.parentElement.querySelector('.show');
      // if a Button already has Class: .active
      if (isCertainButtonAlreadyActive) {
        isCertainButtonAlreadyActive.classList.remove('show');
      }

      clickedElement.className += ' show';
    }
  }
  ngOnInit(): void {}
}
