import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { TRANSLATION_PROVIDERS, TranslatePipe, TranslateService } from './../translate';

import { HomePage } from './home-page/home-page.component';
import { Header } from './header/header.component';
import { AdvantagesList } from './advantages-list/advantages-list.component';
import { PageNotFound } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    Header,
    AdvantagesList,
    PageNotFound,
    TranslatePipe
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpModule
  ],
  providers: [TRANSLATION_PROVIDERS, TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
