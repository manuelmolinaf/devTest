import { Component, OnInit } from '@angular/core';
import { Snapshot } from 'src/app/models/snapshot';
import { BitMexService } from 'src/services/bit-mex.service';

@Component({
  selector: 'app-snapshots',
  templateUrl: './snapshots.component.html',
  styleUrls: ['./snapshots.component.css']
})
export class SnapshotsComponent implements OnInit{

  snapshots:Snapshot[] = [];

  constructor(private bitmexService: BitMexService){}

  ngOnInit(): void {
    this.getSnapshots();
  }

  getSnapshots(){
   this.bitmexService.getSnapshots().then(res => this.snapshots = res).then(()=>console.log(this.snapshots));
  }

  

  



}
