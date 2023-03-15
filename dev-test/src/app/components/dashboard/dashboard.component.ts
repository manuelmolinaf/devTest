import { Component, OnInit } from '@angular/core';
import { BitMexService } from 'src/services/bit-mex.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  instrument:any = {}

  constructor(private bitMexService:BitMexService){

  }

  ngOnInit(): void {

    this.getSocket();
  }

  getInstrument(){
    this.bitMexService.getInstrument()
  }

  getSocket(){
    this.bitMexService.getBitMexSocket().subscribe( (message) => {
      if(message.data && message.data[0].symbol === 'XBTUSD')
        console.log(message)
        
          
    })
  }

}
