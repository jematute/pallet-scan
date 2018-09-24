import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PalletInfoComponent } from './pallet-info.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PalletInfoComponent],
  exports: [ PalletInfoComponent ]
})
export class PalletInfoModule { }
