import { Pipe, PipeTransform } from '@angular/core';
import { OrderBookEntry } from '../models/orderBook';

@Pipe({
  name: 'limitSort'
})
export class LimitSortPipe implements PipeTransform {

  transform(value: OrderBookEntry[], limit:number, sort:number): OrderBookEntry[] {  
    
    switch(sort){
      case -1:
        value = value.sort((a,b) => b.price - a.price)
        break;
      case 1:
        value = value.sort((a,b) => a.price - b.price)
        break;
      default: 
        break;
    }

    return value.slice(0, limit);
  }

}
