import { style } from '@angular/animations';
import { Component, Input, Output,HostListener,ElementRef, Directive,OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppComponentt } from './thien.component';
import {DuLieuService} from'./du-lieu.service'

@Component({
    selector: 'sanphamxoa',
    template:'<p>Sửa sản phẩm work!</p>',
    styles:[`
    `],
  })
  
  export class sanphamxoa implements OnInit {
    constructor(private d:DuLieuService) { }
    ngOnInit(): void { }
    xoaSP(id:number){
        if (confirm('Xóa thật không')==true){
          this.d.xoaSanPham(id).subscribe(data => alert('Xóa thành công'))
        }
    }
}
