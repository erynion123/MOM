import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ModalModule } from 'ngx-bootstrap';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    MatInputModule,
    MatButtonModule
  ],
  exports: [
    HeaderComponent
  ],
  providers: []
})
export class SharedModule { }
