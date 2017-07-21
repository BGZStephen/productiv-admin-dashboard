import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { BusinessesManageComponent, BusinessesAddComponent  } from './components/businesses-components-barrel';

@NgModule({
  declarations: [BusinessesManageComponent, BusinessesAddComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    FlashMessagesModule,
  ],
  providers: [],
})
export class BusinessesModule { }
