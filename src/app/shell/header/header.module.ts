import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenubarModule} from 'primeng/menubar';
import { SharedModule } from 'primeng/api';
import { HeaderRoutingModule } from './header-routing.module';
import { HeaderComponent } from './header.component';


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    MenubarModule,
    SharedModule,
    CommonModule,
    HeaderRoutingModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
