import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterComponent, HeaderComponent} from "./components";
import { CatalogueComponent } from './components/catalogue/catalogue.component';



@NgModule({
    declarations: [
        FooterComponent,
        HeaderComponent,
        CatalogueComponent
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
