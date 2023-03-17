import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InstrumentPanelComponent } from './components/dashboard/panels/instrument-panel/instrument-panel.component';
import { InstrumentValueComponent } from './components/dashboard/panels/instrument-panel/instrument-value/instrument-value.component';
import { OrderBookPanelComponent } from './components/dashboard/panels/order-book-panel/order-book-panel.component';

import { TableModule } from 'primeng/table';
import { LimitSortPipe } from './pipes/limit-sort.pipe';
import { MarkPriceValueComponent } from './components/dashboard/panels/instrument-panel/mark-price-value/mark-price-value.component';

import { HotToastModule } from '@ngneat/hot-toast';
import { SnapshotsComponent } from './components/snapshots/snapshots.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    InstrumentPanelComponent,
    InstrumentValueComponent,
    OrderBookPanelComponent,
    LimitSortPipe,
    MarkPriceValueComponent,
    SnapshotsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TableModule,
    FormsModule,
    HotToastModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
