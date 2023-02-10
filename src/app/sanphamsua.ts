import { style } from '@angular/animations';
import { Component, Input, Output,HostListener,ElementRef, Directive } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppComponentt } from './thien.component';
import {DuLieuService} from'./du-lieu.service'

@Component({
    selector: 'sanphamsua',
    templateUrl:'./sua.html',
    styles:[`
    `],
  })
  
  export class sanphamsua {
    constructor(private d:DuLieuService) { }
  ngOnInit(): void { }
  @Input() sp:any=[{}]
  spSua(sp:any){
    this.d.suaSanPham(sp).subscribe ( data => { 
      alert('Sửa thành công');
    });
}
}