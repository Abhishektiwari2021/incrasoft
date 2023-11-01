import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  showDropDown(): void {
    let dropDownElement = document.getElementById('dropDownMenu');
    dropDownElement?.classList.toggle('show');
  }
}
