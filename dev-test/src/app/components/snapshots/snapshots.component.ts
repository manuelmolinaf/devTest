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
  filteredSnapshots:Snapshot[] = [];

  ascending = true;

  constructor(private bitmexService: BitMexService){}

  ngOnInit(): void {
    this.getSnapshots();
  }

  getSnapshots(){
   this.bitmexService.getSnapshots()
   .then(res => this.snapshots = res)
   .then(()=>this.filteredSnapshots = this.snapshots);
  }

  sortAscending(){
    this.filteredSnapshots = this.snapshots.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    this.ascending = true;
  }

  sortDescending(){
    console.log('test');
    this.filteredSnapshots = this.snapshots.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    this.ascending = false;
  }

  

  



}
