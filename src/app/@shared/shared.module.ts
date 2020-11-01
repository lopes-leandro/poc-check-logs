import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrousselComponent } from './carroussel/carroussel.component';
import { TableComponent } from './table/table.component';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import {MultiSelectModule} from 'primeng/multiselect';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { InputTextModule } from 'primeng/inputtext';
import {SelectButtonModule} from 'primeng/selectbutton';
import { FormsModule }   from '@angular/forms';

import { MultiSelectComponent } from './multi-select/multi-select.component';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { SelectButtonComponent } from './select-button/select-button.component';

@NgModule({
  declarations: [
    CarrousselComponent,
    TableComponent,
    MultiSelectComponent,
    AutoCompleteComponent,
    SelectButtonComponent,
  ],
  imports: [
    ScrollingModule,
    TableModule,
    CarouselModule,
    ButtonModule,
    InputTextModule,
    MultiSelectModule,
    AutoCompleteModule,
    FormsModule,
    SelectButtonModule,
    CommonModule,
  ],
  exports: [
    CarrousselComponent,
    TableComponent,
    MultiSelectComponent,
    AutoCompleteComponent,
    SelectButtonComponent,
  ],
})
export class SharedModule {}
