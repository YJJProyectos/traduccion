import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { TraduccionComponent } from './traduccion/traduccion.component';
import {HttpClientModule } from '@angular/common/http';
import { TraduccionService } from './services/traduccion.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { PinyinPipe } from './pipes/pinyin.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TraduccionComponent,
    PinyinPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ],
  providers: [
    TraduccionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
