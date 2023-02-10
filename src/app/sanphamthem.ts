import { style } from '@angular/animations';
import { Component, Input, Output,HostListener,ElementRef, Directive,OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {DuLieuService} from'./du-lieu.service'

@Component({
    selector: 'sanphamthem',
    templateUrl:'./them.html',
    styles:['']
  })  

  export class sanphamthem implements OnInit {
    constructor(private d:DuLieuService, private c:AppComponent) { }
    ngOnInit(): void { }
    spthem(sp:any){
      this.d.postSanPham(sp).subscribe ( data => alert('Thêm thành công'));
    }
}