import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InstrumentPanelComponent } from './components/dashboard/panels/instrument-panel/instrument-panel.component';
import { InstrumentValueComponent } from './components/dashboard/panels/instrument-panel/instrument-value/instrument-value.component';
import { OrderBookPanelComponent } from './components/dashboard/panels/order-book-panel/order-book-panel.component';

import { TableModule } from 'primeng/table';
import { LimitSortPipe } from './pipes/limit-sort.pipe';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    InstrumentPanelComponent,
    InstrumentValueComponent,
    OrderBookPanelComponent,
    LimitSortPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
