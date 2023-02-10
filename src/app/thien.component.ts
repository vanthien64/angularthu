import { style } from '@angular/animations';
import { Component, Input, Output,OnInit,OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { __values } from 'tslib';
@Component({
  selector: 'thu',
  template: `
    <h2>Single-slot content projection</h2>
    <form #vuong="ngForm" (ngSubmit)=xuly(vuong.value) >
    <input name="un" [(ngModel)]="username" class="form-control" required minlength="6" #loi="ngModel"> 
    <button> sumbit </button>
    <p>You typed: {{username}}</p>
    <p>{{vuong.value.required}}</p>
    <p *ngIf="loi.invalid">LỖI RỒI CDL</p>
    <p *ngIf="loi.errors?.['minlength']">Nhập đủ {{loi.errors?.['minlength'].requiredLength}} ký tự, hiện tại cd chỉ mới nhập {{loi.errors?.['minlength'].actualLength}} 
    cd cần nhập thêm {{loi.errors?.['minlength'].requiredLength - loi.errors?.['minlength'].actualLength}} </p>
    </form>
    <p>{{hoatran}}</p>
    <ng-content></ng-content>
  `,
  styles:['.ng-valid{color:red;}']
})
export class AppComponentt implements OnInit {
  constructor() { }
  ngOnInit(): void {}
  username:string='thi';
  hoatran=''
  xuly(data:any)
  {
    this.hoatran=this.username
  }
}