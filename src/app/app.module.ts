import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ItemsService } from './items/items.service';
import { ImageSliderModule } from './imageSlider/imageSlider.module';
import { ProducersMenuComponent } from './producers-menu/producers-menu.component';
import { MatMenuModule } from '@angular/material/menu';
import {MatProgressSpinnerModule}from '@angular/material/progress-spinner'
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProducersMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    ImageSliderModule,
    MatMenuModule,
    MatProgressSpinnerModule,

  ],
  providers: [ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
