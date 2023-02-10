import { style } from '@angular/animations';
import { Component, Input, Output,HostListener,ElementRef, Directive,OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppComponentt } from './thien.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'loaisanpham',
  template:`<p>Loại sản phẩm work!</p>
  <p *ngFor="let loai of listLoai; let i=index"> {{loai.tenLoai}}</p>
            
  `,
  styles:[`
  `],
})

export class loaisanpham implements OnInit {
    listLoai:any=[{}]
    constructor(private _http:HttpClient) { }
    ngOnInit(): void {
        this._http.get('http://localhost:3000/loaisp').subscribe(data => {
            this.listLoai=data;  
          });

    }
  }