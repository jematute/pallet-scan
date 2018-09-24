import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid.component';
import { AgGridModule } from 'ag-grid-angular';

import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, AgGridModule.withComponents([]), FormsModule
  ],
  exports: [ GridComponent ],
  declarations: [GridComponent]
})
export class GridModule { }
