import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NavBarComponent implements OnInit {
  date: Date = new Date();
  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }
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
}
