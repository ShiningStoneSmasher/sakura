import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HowToOrderComponent } from './how-to-order/how-to-order.component';
import { OurMenuComponent } from './our-menu/our-menu.component';
import { LandingPageComponents } from './landing-page/landingPage.components';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CommonModule, HowToOrderComponent, OurMenuComponent, LandingPageComponents],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
