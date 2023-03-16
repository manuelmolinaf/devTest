import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { WebSocketSubject } from 'rxjs/webSocket';
import { Message, Table, Action } from 'src/app/models/Message';
import { OrderBook, OrderBookEntry, Side } from 'src/app/models/OrderBook';
import { BitMexService } from 'src/services/bit-mex.service';

@Component({
  selector: 'app-order-book-panel',
  templateUrl: './order-book-panel.component.html',
  styleUrls: ['./order-book-panel.component.css']
})
export class OrderBookPanelComponent implements OnInit, OnDestroy {
  orderBookSubject$:BehaviorSubject<OrderBook> = new BehaviorSubject<OrderBook>({asks:[], bids:[]});
  bitmexSocket$: WebSocketSubject<Message> |undefined;

  constructor( private bitmexService:BitMexService){

  }
  
  ngOnInit(): void {
    this.getBitMexWebSocketSubject();
    this.bitMexWebSocketSubscription();
  }

  ngOnDestroy(): void {
    this.bitmexSocket$?.unsubscribe();
  }

  async initializeOrderBook(){
    
    
  }

  updateOrderBook(entries:OrderBookEntry[], action:Action){

    let newOrderBook = this.orderBookSubject$.getValue()


    entries.forEach( entry =>{

      switch(action){
        case Action.Insert:

          if(entry.side === Side.Buy){
            newOrderBook.bids.push(entry)
          }
          else if(entry.side === Side.Sell){
            newOrderBook.asks.push(entry)
          }

          break;
        case Action.Update:
          
          break;
        case Action.Delete:
          break;
        default:
          break;
      }

    }) 

  }

  getBitMexWebSocketSubject(){
    this.bitmexSocket$ = this.bitmexService.getBitMexSocket();
  }

  bitMexWebSocketSubscription(){
    this.bitmexSocket$?.subscribe( message =>{

      if(message.table === Table.OrderBook){      
        
       
      }
      
    })
  }
}
