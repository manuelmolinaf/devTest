import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams  } from '@angular/common/http';

import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Message } from 'src/app/models/message';
import { BehaviorSubject, lastValueFrom, Observable } from 'rxjs';
import { Instrument } from 'src/app/models/instrument';
import { OrderBook, OrderBookEntry } from 'src/app/models/orderBook';
import { Snapshot } from 'src/app/models/snapshot';



@Injectable({
  providedIn: 'root'
})
export class BitMexService {

  private bitMexSocket$:WebSocketSubject<Message>;
  private instrumentSubject$:BehaviorSubject<Instrument| undefined> = new BehaviorSubject<Instrument| undefined>(undefined);
  private orderBookSubject$:BehaviorSubject<OrderBook> = new BehaviorSubject<OrderBook>({asks:[], bids:[]});

  private socketEndpoint = 'wss://ws.bitmex.com/realtime?subscribe=instrument,orderBookL2_25:XBTUSD';
 
  constructor(private http:HttpClient) {
    this.bitMexSocket$ = webSocket(this.socketEndpoint);
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
  return lastValueFrom(this.http.get<Instrument[]>('/bitmex/instrument', {params}));
  }

  getOrderBook(symbol:string = 'XBTUSD'){
  const params = new HttpParams().set('symbol', symbol);
  return lastValueFrom(this.http.get<OrderBookEntry[]>('/bitmex/orderBook/L2', {params}));
  }

  saveSnapshot():Observable<Snapshot>{

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    const newSnapshot:Snapshot ={
      date: new Date(),
      instrument: this.instrumentSubject$.getValue()!,
      orderBook: this.orderBookSubject$.getValue()
    } 

    return this.http.post<Snapshot>('mongo/saveSnapshot', newSnapshot, httpOptions);

  }

  getSnapshots(){
    return lastValueFrom(this.http.get<Snapshot[]>('mongo/snapshots'));
  }

  getSnapshot(id:string){
    return lastValueFrom(this.http.get<Snapshot>(`mongo/snapshot/${id}`));
  }


}
