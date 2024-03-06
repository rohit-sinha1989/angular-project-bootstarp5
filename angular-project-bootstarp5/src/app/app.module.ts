import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BootstrapMessageComponent } from './component/bootstrap-message/bootstrap-message.component';
import { HeaderToolbarComponent } from './header/header-toolbar/header-toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    BootstrapMessageComponent,
    HeaderToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
