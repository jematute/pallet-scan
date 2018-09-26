import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PalletInfoComponent } from './pallet-info.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [PalletInfoComponent],
  exports: [ PalletInfoComponent ]
})
export class PalletInfoModule { }
