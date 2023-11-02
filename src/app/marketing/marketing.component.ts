import { Component } from '@angular/core';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.scss'],
})
export class MarketingComponent {
  activeMenuItem: string = 'sms';
  setActiveMenuItem(menuItem: string) {
    this.activeMenuItem = menuItem;
  }
}
