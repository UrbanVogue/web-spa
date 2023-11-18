import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterComponent, HeaderComponent} from "./components";
import {HttpClientModule} from "@angular/common/http";
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [
        FooterComponent,
        HeaderComponent,
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        HttpClientModule,
    ]
})
export class CoreModule { }
