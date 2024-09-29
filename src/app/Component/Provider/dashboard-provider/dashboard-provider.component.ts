import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-dashboard-provider',
  templateUrl: './dashboard-provider.component.html',
  styleUrls: ['./dashboard-provider.component.css']
})
export class DashboardProviderComponent implements OnInit {
  isLightMode = true;  // Default theme

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    const savedTheme = localStorage.getItem('theme');
    this.isLightMode = savedTheme === 'light-mode' || !savedTheme;  // Default to light mode
    this.applyTheme(); // Apply the saved theme on load
  }

  toggleTheme(): void {
    this.isLightMode = !this.isLightMode;
    localStorage.setItem('theme', this.isLightMode ? 'light-mode' : 'dark-mode');
    this.applyTheme();
  }

  applyTheme(): void {
    const theme = this.isLightMode ? 'light-mode' : 'dark-mode';
    this.renderer.removeClass(document.body, 'light-mode');
    this.renderer.removeClass(document.body, 'dark-mode');
    this.renderer.addClass(document.body, theme);
  }
}