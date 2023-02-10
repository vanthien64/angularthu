import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tuyet } from './tuyet.component';
import { Tuyet2 } from './tuye2';
import { Tuyet3 } from './tuyet3';

const routes: Routes = [
  { path: 'hoa', component: Tuyet},
  { path: 'chuyen', component: Tuyet},
  { path: 'hoa2', component: Tuyet2 },
  {path: '', redirectTo: '/chuyen', pathMatch: 'full'},
  { path: '**', component: Tuyet3 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
