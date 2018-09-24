import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaseHistoryComponent } from './case-history.component';
import { GridModule } from '../grid/grid.module';
import { CasesService } from './cases.service';
import { CaseOptionsComponent } from '../case-options/case-options.component';
import {CheckboxModule} from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, GridModule, CheckboxModule, FormsModule
  ],
  declarations: [CaseHistoryComponent, CaseOptionsComponent ],
  exports: [ CaseHistoryComponent, CaseOptionsComponent ],
  providers: [ CasesService ]
})
export class CaseHistoryModule { }
