import { Injectable } from '@angular/core';
import { HttpClient,HttpParams  } from '@angular/common/http';

import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Message } from 'src/app/models/Message';
import { lastValueFrom, Observable } from 'rxjs';
import { Instrument } from 'src/app/models/Instrument';

const socketEndpoint = 'wss://ws.bitmex.com/realtime?subscribe=instrument,orderBookL2_25:XBTUSD';

@Injectable({
  providedIn: 'root'
})
export class BitMexService {

  private bitMexSocket$:WebSocketSubject<Message>;

  constructor(private http:HttpClient) {
    this.bitMexSocket$ = webSocket(socketEndpoint);
   }

   getBitMexSocket():WebSocketSubject<Message>{
    return this.bitMexSocket$;
   }


   /**
    * @param symbol 
    * @description gets the Instrument object for the given symbol. Uses the 'XBTUSD' if none is given.
    * @returns  a Promise for the instrument of the given Symbol.
    */
   getInstrument(symbol:string = 'XBTUSD'){
    const params = new HttpParams().set('symbol', symbol);
    return lastValueFrom(this.http.get<Instrument[]>('/api/instrument', {params}));
   }

   getOrderBook(symbol:string = 'XBTUSD'){
    const params = new HttpParams().set('symbol', symbol);
    return lastValueFrom(this.http.get<Instrument[]>('/api/orderBook/L2', {params}));
   }

}
