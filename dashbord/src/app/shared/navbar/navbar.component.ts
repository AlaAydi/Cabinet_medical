import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  
  isDark: boolean = false;
  dropdownOpen = false;

  toggleDarkMode() {
    this.isDark = !this.isDark;
  }

  toggleDropDown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
}
