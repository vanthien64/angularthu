import { style } from '@angular/animations';
import { Component, Input, Output,HostListener,ElementRef, Directive,EventEmitter } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppComponentt } from './thien.component';
import {DuLieuService} from'./du-lieu.service'

@Component({
    selector: 'sanphamlist',
    template:`<p>List sản phẩm work!</p>
    <p *ngFor="let sp of listSanPham let i=index">
    {{sp.tensp}} - {{sp.giasp}} - {{sp.ngay}}
</p>
<p> {{listSanPham[0].tensp}}</p>
<img src="{{listSanPham[0].hinh}}" alt="">
<p *ngFor="let sp of listSanPham">
{{sp.tensp}} - {{sp.giasp}} - {{sp.ngay}} 
<span href="#" (click)="suaSP(sp)">Sửa</span> &nbsp;  
<a href="#" (click)="xoaSP(sp.id)">Xóa</a> 
</p>
    `,
    styles:[`
    `],
  })
  
  export class sanphamlist {
@Output() chonSP = new EventEmitter();
suaSP(sp:any){  
  this.chonSP.emit(sp);
}
 constructor(private d:DuLieuService) { }
  listSanPham:any=[{}];
  ngOnInit(): void {
    this.d.getSanPham().subscribe ( 
      data => this.listSanPham= data    
  );
  }
  xoaSP(id:number){
    if (confirm('Xóa thật không')==true){
      this.d.xoaSanPham(id).subscribe(data => alert('Xóa thành công'))
    }
}
  }