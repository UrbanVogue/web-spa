import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterComponent, HeaderComponent} from "./components";
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [FooterComponent, HeaderComponent],
  exports: [HeaderComponent, FooterComponent],
  imports: [CommonModule, RouterModule],
})
export class CoreModule {}
