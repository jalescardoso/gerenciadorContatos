import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdToolbarModule, MdTableModule, MdPaginatorModule, MdSortModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ContatosComponent } from './table-contacts/contactsTable.component'

@NgModule({
  declarations: [
    AppComponent,
    ContatosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdTableModule,
    MdPaginatorModule,
    MdSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
