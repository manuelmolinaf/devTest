import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InstrumentPanelComponent } from './components/dashboard/panels/instrument-panel/instrument-panel.component';
import {MatCardModule} from '@angular/material/card';
import { InstrumentValueComponent } from './components/dashboard/panels/instrument-panel/instrument-value/instrument-value.component';
import { OrderBookPanelComponent } from './components/dashboard/panels/order-book-panel/order-book-panel.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    InstrumentPanelComponent,
    InstrumentValueComponent,
    OrderBookPanelComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
