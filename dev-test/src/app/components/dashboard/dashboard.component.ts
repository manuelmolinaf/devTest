import { Component, OnInit } from '@angular/core';
import { BitMexService } from 'src/services/bit-mex.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {



  constructor(private bitMexService:BitMexService){

  }

  ngOnInit(): void {

    
  }

 

}
