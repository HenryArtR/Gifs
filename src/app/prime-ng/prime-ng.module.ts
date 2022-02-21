import { NgModule } from '@angular/core';
import {TabMenuModule} from 'primeng/tabmenu';
import {InputTextModule} from 'primeng/inputtext';
import {ImageModule} from 'primeng/image';


@NgModule({
  exports: [
    TabMenuModule,
    InputTextModule,
    ImageModule
  ]
})
export class PrimeNgModule { }
