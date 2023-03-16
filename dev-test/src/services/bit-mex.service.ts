import { Injectable } from '@angular/core';
import { HttpClient,HttpParams  } from '@angular/common/http';

import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Message } from 'src/app/models/message';
import { BehaviorSubject, lastValueFrom } from 'rxjs';
import { Instrument } from 'src/app/models/instrument';
import { OrderBook, OrderBookEntry } from 'src/app/models/orderBook';

const socketEndpoint = 'wss://ws.bitmex.com/realtime?subscribe=instrument,orderBookL2_25:XBTUSD';

@Injectable({
  providedIn: 'root'
})
export class BitMexService {

  private bitMexSocket$:WebSocketSubject<Message>;

  private instrumentSubject$:BehaviorSubject<Instrument| undefined> = new BehaviorSubject<Instrument| undefined>(undefined);
  private orderBookSubject$:BehaviorSubject<OrderBook> = new BehaviorSubject<OrderBook>({asks:[], bids:[]});

  constructor(private http:HttpClient) {
    this.bitMexSocket$ = webSocket(socketEndpoint);
   }

   get bitMexSocket(){
    return this.bitMexSocket$;
   }

   get instrumentSubject(){
    return this.instrumentSubject$;
   }

   get orderBookSubject(){
    return this.orderBookSubject$;
   }

   getInstrument(symbol:string = 'XBTUSD'){
    const params = new HttpParams().set('symbol', symbol);
    return lastValueFrom(this.http.get<Instrument[]>('/api/instrument', {params}));
   }

   getOrderBook(symbol:string = 'XBTUSD'){
    const params = new HttpParams().set('symbol', symbol);
    return lastValueFrom(this.http.get<OrderBookEntry[]>('/api/orderBook/L2', {params}));
   }


}
