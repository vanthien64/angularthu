import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-dangnhap',
  templateUrl: './dangnhap.component.html',
  styles: ['']
})
export class DangnhapComponent implements OnInit {
  constructor() { }
  frm1!: FormGroup;
  khoa=''
  ngOnInit(): void {
    this.frm1 = new FormGroup({
      username: new FormControl('teonv', Validators.required),
      password: new FormControl('123'),
    
    });
    }
    inrathu(){
    this.khoa=this.frm1.value.username
  }
}