import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { GridModule } from '../grid/grid.module';
import { PalletInfoModule } from '../pallet-info/pallet-info.module';
import { CaseHistoryModule } from '../case-history/case-history.module';

@NgModule({
  imports: [
    CommonModule, GridModule, PalletInfoModule, CaseHistoryModule, CaseHistoryModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
