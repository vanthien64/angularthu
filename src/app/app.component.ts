import {  trigger,  state,  animate, transition, style, animation } from '@angular/animations';
import { Component, Input, Output,HostListener,ElementRef, Directive } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppComponentt } from './thien.component';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls:['./chinh.css'],
  animations:[trigger('openClose', [  
    // ...  
    state('open', style({  
      height: '200px',  
      opacity: 1,  
      backgroundColor: 'yellow'  
    })),  
    state('closed', style({  
      height: '100px',  
      opacity: 0.8,  
      backgroundColor: 'blue'  
    })),  
    transition('open => closed', [  
      animate('1s')  
    ]),  
    transition('closed => open', [  
      animate('0.5s')  
    ]),  
  ]),  
],
})

export class AppComponent {
  isOpen = true;  
 myCheck=true;
  toggle() {  
    this.isOpen = !this.isOpen;  
  }  
  anh='../assets/img/thien.jpg'
  thien(){
    console.log('Tuyết Thất Hứa Quá Đi')
  }
  thienthien(event:any)
  {
  console.log(event.target.value)
  }
  thuthu='color:red;'
  ngaysinh=new Date(2001, 6, 4)
  format='shortDate'
  tiente=1000000
  thien1=""
  thien2="123"
  tuyettuyet=['1','2','3','4']
  khoakhoa=3
  sp:any=[{}];
ganSP(sp:any){
  this.sp=sp;
}
}

@Directive({
  selector: '[apphighlight]'
})
export class HighlightDirective {
    constructor(private el: ElementRef) {
       this.el.nativeElement.style.color = 'yellow';
  
    }
    @HostListener('mouseenter') onMouseEnter() {
      this.highlight('yellow');
    }
  
    @HostListener('mouseleave') onMouseLeave() {
      this.highlight('');
    }
  
    private highlight(color: string) {
      this.el.nativeElement.style.backgroundColor = color;
    }
  }
  
  


