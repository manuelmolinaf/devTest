import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { WebSocketSubject } from 'rxjs/webSocket';
import { Message, Table, Action } from 'src/app/models/message';
import { OrderBook, OrderBookEntry, Side } from 'src/app/models/orderBook';
import { BitMexService } from 'src/services/bit-mex.service';

@Component({
  selector: 'app-order-book-panel',
  templateUrl: './order-book-panel.component.html',
  styleUrls: ['./order-book-panel.component.css']
})
export class OrderBookPanelComponent implements OnInit, OnChanges, OnDestroy {

  @Input() id: string | null = null;

  orderBookSubject$:BehaviorSubject<OrderBook> = this.bitmexService.orderBookSubject;
  bitmexSocket$: WebSocketSubject<Message> =  this.bitmexService.bitMexSocket;

  bidCols:any = [];
  askCols:any = [];
  initializingOrderBook = false;

  constructor( private bitmexService:BitMexService){

  }
  
  ngOnInit(): void {
    this.defineColumns();
  }

  ngOnChanges(): void {
    this.getValues()
  }

  getValues(){
    if(!this.id){
      this.initializeOrderBook().then(()=>this.bitMexWebSocketSubscription());
    }
    else{
      this.bitmexService.getSnapshot(this.id).then(snapshot =>{
        this.orderBookSubject$ = new BehaviorSubject<OrderBook>(snapshot.orderBook);
      } )
    }
  }

  ngOnDestroy(): void {
    this.bitmexSocket$?.unsubscribe();
  }

  defineColumns(){
    this.bidCols = [
      { field: 'size', header: 'Size' },
      { field: 'price', header: 'Price' }
    ]

    this.askCols = [     
      { field: 'price', header: 'Price' },
      { field: 'size', header: 'Size' }
    ]
  }


  initializeOrderBook(){
    return this.bitmexService.getOrderBook().then(entries =>{
      this.updateOrderBook(entries, Action.Insert);
    })
    
  }


  updateOrderBook(entries:OrderBookEntry[], action:Action){

    switch(action){
      case Action.Insert:

        entries.forEach( entry =>{
          let newOrderBook = this.orderBookSubject$.getValue()
    
          if(entry.side === Side.Buy){
            newOrderBook.bids.push(entry)
          }
          else if(entry.side === Side.Sell){
            newOrderBook.asks.push(entry)
          }
    
          this.orderBookSubject$.next(newOrderBook);
        });
        
        break;
      case Action.Update:
        entries.forEach( entry =>{
          let newOrderBook = this.orderBookSubject$.getValue()
    
          if(entry.side === Side.Buy){
            newOrderBook.bids = newOrderBook.bids.map( bid => bid.id === entry.id ? {...bid, ...entry} : bid)
          }
          else if(entry.side === Side.Sell){
            newOrderBook.asks = newOrderBook.asks.map( ask => ask.id === entry.id ? {...ask, ...entry} : ask)
          }
    
          this.orderBookSubject$.next(newOrderBook);
        });
        
        break;

      case Action.Delete:

        entries.forEach( entry =>{
          let newOrderBook = this.orderBookSubject$.getValue()
    
          if(entry.side === Side.Buy){
            const index = newOrderBook.bids.findIndex(bid => bid.id === entry.id)
            newOrderBook.bids.splice(index, 1);
          }
          else if(entry.side === Side.Sell){
            const index = newOrderBook.asks.findIndex(ask => ask.id === ask.id)
            newOrderBook.asks.splice(index, 1);
          }
    
          this.orderBookSubject$.next(newOrderBook);
        });

        break;

      default:
        break;
    } 

  }


  bitMexWebSocketSubscription(){
    this.bitmexSocket$?.subscribe( message =>{
      
      if(message.table === Table.OrderBook){      
        this.updateOrderBook(message.data, message.action);   
      }
      
    })
  }
 

}
