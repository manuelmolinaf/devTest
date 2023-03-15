import { Injectable } from '@angular/core';
import { HttpClient,HttpParams  } from '@angular/common/http';

import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Message } from 'src/app/models/Message';
import { Observable } from 'rxjs';

const socketEndpoint = 'wss://ws.bitmex.com/realtime?subscribe=instrument,orderBookL2_25:XBTUSD';
const bitMexApiUrl = 'https://www.bitmex.com/api/v1/'

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

   getAnnouncements(){
    return this.http.get(bitMexApiUrl + 'announcement');
   }

   /**
    * @param symbol 
    * @description H
    * @returns 
    */
   getInstrument(symbol:string = 'XBTUSD'):Observable<any>{
    const params = new HttpParams().set('symbol', symbol);
    return this.http.get(bitMexApiUrl + 'instrument', {params});
   }

}
