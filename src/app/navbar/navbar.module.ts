import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import {ButtonModule} from 'primeng/button'
import { RouterModule } from '@angular/router';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, ButtonModule, RouterModule, DropdownModule, FormsModule
  ],
  exports: [ NavbarComponent ],
  declarations: [NavbarComponent]
})
export class NavbarModule { }
