import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import {ButtonModule} from 'primeng/button'
import { RouterModule } from '@angular/router';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import {AutoCompleteModule} from 'primeng/autocomplete';

@NgModule({
  imports: [
    CommonModule, ButtonModule, RouterModule, DropdownModule, FormsModule, AutoCompleteModule
  ],
  exports: [ NavbarComponent ],
  declarations: [NavbarComponent]
})
export class NavbarModule { }
