import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject  } from 'rxjs';
import { WebSocketSubject } from 'rxjs/webSocket';
import { Instrument } from 'src/app/models/instrument';
import { Message, Table } from 'src/app/models/message';
import { BitMexService } from 'src/services/bit-mex.service';
import { Symbol } from 'src/app/models/symbol';

@Component({
  selector: 'app-instrument-panel',
  templateUrl: './instrument-panel.component.html',
  styleUrls: ['./instrument-panel.component.css']
})
export class InstrumentPanelComponent implements OnInit, OnChanges, OnDestroy {
  
  @Input() id: string | null = null;

  instrumentSubject$:BehaviorSubject<Instrument | undefined> = this.bitmexService.instrumentSubject;
  bitmexSocket$: WebSocketSubject<Message> = this.bitmexService.bitMexSocket;
  
  constructor( private bitmexService:BitMexService){
  
  }

  ngOnChanges(): void {
    this.getValues();
  }

  ngOnInit(): void {
    
  }

  getValues(){
    if(!this.id){
      this.initializeInstrument().then(()=> this.bitMexWebSocketSubscription());
    }
    else{
      this.bitmexService.getSnapshot(this.id).then(snapshot =>{
        this.instrumentSubject$ = new BehaviorSubject<Instrument | undefined>(snapshot.instrument);
      } )
    }
  }

  ngOnDestroy(): void {
    this.bitmexSocket$?.unsubscribe();
  }

  async initializeInstrument(){
    return this.bitmexService.getInstrument().then( res =>{
      this.instrumentSubject$.next(res[0])
    });
    
  }


  bitMexWebSocketSubscription(){
    this.bitmexSocket$?.subscribe( message =>{

      if(message.table === Table.Instrument && message.data[0]?.symbol === Symbol.Bitcoin){      
        this.instrumentSubject$.next({...this.instrumentSubject$.getValue(), ...message.data[0]});
      }
      
    })
  }

  getTimeUntilFunding(instrument?:Instrument|undefined | null){
    
    if(!instrument) return '0H';

    const fundingTimestamp = new Date(instrument.fundingTimestamp).getTime();
    const currentTimestamp = new Date().getTime();
    const timeUntilFunding = fundingTimestamp - currentTimestamp;
    const hoursUntilFunding = timeUntilFunding / (1000 * 60 * 60);
    return Math.round(hoursUntilFunding).toString() + 'H';
  }
  

  



}
