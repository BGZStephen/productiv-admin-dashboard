import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlashMessagesModule } from 'angular2-flash-messages';

// components
import { UsersManageComponent } from './components/users-components-barrel';

@NgModule({
  declarations: [
    UsersManageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    FlashMessagesModule,
  ],
  providers: [],
})
export class UsersModule { }
