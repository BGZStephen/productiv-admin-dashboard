import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { ModulesAddComponent, ModulesManageComponent } from './components/modules-components-barrel';

@NgModule({
  declarations: [ModulesAddComponent, ModulesManageComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    FlashMessagesModule,
  ],
  providers: [],
})
export class ModulesModule { }
