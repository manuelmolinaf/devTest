import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-mark-price-value',
  templateUrl: './mark-price-value.component.html',
  styleUrls: ['./mark-price-value.component.css']
})
export class MarkPriceValueComponent implements OnChanges {
  
  @Input() title = '';
  @Input() value:number = 0;

  previousValue = this.value;

  markPriceUp = true;

  ngOnChanges(): void {

    if(this.previousValue > this.value)[
      this.markPriceUp = true
    ]
    else if(this.previousValue < this.value){
      this.markPriceUp = false
    }

    this.previousValue = this.value;
    
  }
}
