import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterComponent, HeaderComponent} from "./components";



@NgModule({
    declarations: [
        FooterComponent,
        HeaderComponent
    ],
    exports: [
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        CommonModule
    ]
})
export class CoreModule { }
