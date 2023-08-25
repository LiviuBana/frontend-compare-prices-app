import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule,Routes} from'@angular/router';
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

import { ProducerModelsComponent } from './producer-models/producer-models.component';
// const routes : Routes=[
//   {path:'home',component:AppComponent },
//   {path:'models/:producer', component:ProducerModelsComponent}
// ]
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProducersMenuComponent,
    ProducerModelsComponent,
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
    

  ],
  providers: [ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
