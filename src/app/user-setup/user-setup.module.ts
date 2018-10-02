import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSetupComponent } from './user-setup.component';
import {TableModule} from 'primeng/table';
import { FormsModule } from '@angular/forms';
import {CheckboxModule} from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import {DialogModule} from 'primeng/dialog';

@NgModule({
  imports: [
    CommonModule, FormsModule, TableModule, CheckboxModule, ButtonModule, DialogModule
  ],
  declarations: [UserSetupComponent]
})
export class UserSetupModule { }
