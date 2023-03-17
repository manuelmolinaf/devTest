import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mark-price-value',
  templateUrl: './mark-price-value.component.html',
  styleUrls: ['./mark-price-value.component.css']
})
export class MarkPriceValueComponent implements OnChanges, OnInit {
  
  @Input() title = '';
  @Input() value:number = 0;

  previousValue = this.value;

  markPriceUp = true;
  isSnapshot = false;

  constructor(private route: ActivatedRoute){
  }
  ngOnInit(): void {
    this.isSnapshot = this.route.snapshot.paramMap.has('id');
  }



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
