import { FilterPipe } from './filter.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MethotelComponent } from './methotel/methotel.component';


@NgModule({
  declarations: [
    AppComponent,
    MethotelComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
