import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    title = 'pro_business';
    isLightMode = true;  // Default theme
  
    constructor(private renderer: Renderer2) {}
  
    ngOnInit(): void {
      this.applyTheme(); // Apply default theme on load
    }
  
    toggleTheme(): void {
      this.isLightMode = !this.isLightMode;
      this.applyTheme();
    }
  
    applyTheme(): void {
      const theme = this.isLightMode ? 'light-mode' : 'dark-mode';
      this.renderer.removeClass(document.body, 'light-mode');
      this.renderer.removeClass(document.body, 'dark-mode');
      this.renderer.addClass(document.body, theme);
    }
  
  
  
  }