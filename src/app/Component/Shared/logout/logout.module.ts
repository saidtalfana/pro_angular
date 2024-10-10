import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoutComponent } from './logout.component'; // Import the LogoutComponent

@NgModule({
  declarations: [LogoutComponent], // Declare the LogoutComponent here
  imports: [
    CommonModule
  ],
  exports: [LogoutComponent] // Export the LogoutComponent if needed in other modules
})
export class LogoutModule { }
