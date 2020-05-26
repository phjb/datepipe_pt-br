import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DatepipeComponent } from './datepipe/datepipe.component';

import { MomentModule } from 'angular2-moment';
import 'moment/locale/pt-br';



@NgModule({
   declarations: [
      AppComponent,
      DatepipeComponent
   ],
   imports: [
      BrowserModule,
      MomentModule

   ],
   providers: [
  ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
