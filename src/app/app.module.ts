import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomePage } from './home-page/home-page.component';
import { Header } from './header/header.component';
import { AdvantagesList } from './advantages-list/advantages-list.component';
import { AdvantageItem } from './advantage-item/advantage-item.component';
import { PageNotFound } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    Header,
    AdvantagesList,
    AdvantageItem,
    PageNotFound
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
