import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlarmHistoryComponent } from './alarm-history.component';
import { GridModule } from '../grid/grid.module';
import { AlarmHistoryService } from './alarm-history.service';

@NgModule({
  imports: [
    CommonModule, GridModule
  ],
  declarations: [AlarmHistoryComponent],
  providers: [ AlarmHistoryService ]
})
export class AlarmHistoryModule { }
