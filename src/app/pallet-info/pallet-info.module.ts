import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PalletInfoComponent } from './pallet-info.component';
import { FormsModule } from '@angular/forms';
import { GridModule } from '../grid/grid.module';

@NgModule({
  imports: [
    CommonModule, FormsModule, GridModule
  ],
  declarations: [PalletInfoComponent],
  exports: [ PalletInfoComponent ]
})
export class PalletInfoModule { }
