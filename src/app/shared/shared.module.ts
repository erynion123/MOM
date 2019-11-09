import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ModalModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ModalModule.forRoot()
  ],
  exports:[
    HeaderComponent
  ],
  providers: []
})
export class SharedModule { }
