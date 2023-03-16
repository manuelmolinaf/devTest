import { Component, OnDestroy, OnInit, NgZone   } from '@angular/core';
import { Observable, BehaviorSubject  } from 'rxjs';
import { WebSocketSubject } from 'rxjs/webSocket';
import { Instrument } from 'src/app/models/Instrument';
import { Message, Table } from 'src/app/models/Message';
import { BitMexService } from 'src/services/bit-mex.service';
import { Symbol } from 'src/app/models/Symbol';

@Component({
  selector: 'app-instrument-panel',
  templateUrl: './instrument-panel.component.html',
  styleUrls: ['./instrument-panel.component.css']
})
export class InstrumentPanelComponent implements OnInit, OnDestroy {

  instrumentSubject:BehaviorSubject<Instrument| undefined> = new BehaviorSubject<Instrument| undefined>(undefined);
  bitmexSocket$: WebSocketSubject<Message> |undefined;
  constructor( private bitmexService:BitMexService,private ngZone: NgZone){

  }

  ngOnInit(): void {
    this.initializeInstrument();
    this.getBitMexWebSocketSubject();
    this.bitMexWebSocketSubscription();


  }

  ngOnDestroy(): void {
    this.bitmexSocket$?.unsubscribe();
  }

  async initializeInstrument(){
    await this.bitmexService.getInstrument().then( res =>{
      this.instrumentSubject.next(res[0])
      console.log(res[0]);
    });
  
    
  }

  getBitMexWebSocketSubject(){
    this.bitmexSocket$ = this.bitmexService.getBitMexSocket();
  }

  bitMexWebSocketSubscription(){
    this.bitmexSocket$?.subscribe( message =>{

      if(message.table === Table.Instrument && message.data[0]?.symbol === Symbol.Bitcoin){       
        //this.instrumentSubject.next({...this.instrumentSubject.getValue(), ...message.data[0]});
      }
      
    })
  }
  

  



}
