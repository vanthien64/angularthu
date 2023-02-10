import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent, HighlightDirective } from './app.component';
import { AppComponentt } from './thien.component';
import { Tuyet2 } from './tuye2';
import { Tuyet } from './tuyet.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DangnhapComponent} from './form'
import { HttpClientModule } from '@angular/common/http';
import { sanphamthem } from './sanphamthem';
import { sanphamsua } from './sanphamsua';
import { sanphamlist } from './sanphamlist';
import { loaisanpham } from './loaisanpham';
import { sanphamxoa } from './xoasanpham';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

@NgModule({
  declarations: [
    AppComponent,
    AppComponentt,
    HighlightDirective,
    DangnhapComponent,
    loaisanpham,
    sanphamlist,
    sanphamsua,
    sanphamthem,
    sanphamxoa,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
