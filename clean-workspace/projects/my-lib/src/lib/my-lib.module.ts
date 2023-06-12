import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { ButtonComponent } from './components/button/button.component';
import { LoaderComponent } from './components/loader/loader.component';



@NgModule({
  declarations: [
    MyLibComponent,
    ButtonComponent,
    LoaderComponent
  ],
  imports: [
  ],
  exports: [
    MyLibComponent,
    ButtonComponent,
    LoaderComponent
  ]
})
export class MyLibModule { }
