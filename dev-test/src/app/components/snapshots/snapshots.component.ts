import { Component, OnInit } from '@angular/core';
import { catchError, of } from 'rxjs';
import { Snapshot } from 'src/app/models/snapshot';
import { BitMexService } from 'src/services/bit-mex.service';
import { SnapshotService } from 'src/services/snapshot.service';

@Component({
  selector: 'app-snapshots',
  templateUrl: './snapshots.component.html',
  styleUrls: ['./snapshots.component.css']
})
export class SnapshotsComponent implements OnInit{

  snapshots:Snapshot[] = [];
  filteredSnapshots:Snapshot[] = [];

  ascending = true;

  fromDate:Date | null = null;
  toDate:Date | null = null;

  mongoConnected:boolean = true;
  serverConnected:boolean = true;

  constructor(private bitmexService: BitMexService, private snapshotService:SnapshotService){}

  ngOnInit(): void {
    this.getSnapshots();
    this.snapshotService.checkConnection().pipe(
      catchError(error => {
        console.log('Caught error:', error);
        this.serverConnected = false;
        return of([]);
      })
    ).subscribe( (res: { mongoConnected: boolean; }) =>{
      this.mongoConnected = res.mongoConnected;
    })
  }

  getSnapshots(){
   this.snapshotService.getSnapshots()
   .then(res => this.snapshots = res)
   .then(()=>this.filteredSnapshots = this.snapshots);
  }

  sortAscending(){
    this.ascending = true;
    this.filter();
  }

  sortDescending(){
    this.ascending = false;
    this.filter();
  }

  filter(){
    let newlist = this.snapshots;

    if(this.fromDate){
      
      newlist = newlist.filter( snapshot => new Date(snapshot.date) >= new Date(this.fromDate!));
      
    }

    if(this.toDate){
      newlist = newlist.filter( snapshot => new Date(snapshot.date) <= new Date(this.toDate!))
    }

    if(this.ascending){
      newlist = newlist.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    }
    else{
      newlist = newlist.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }

    this.filteredSnapshots = newlist;
    
  }

  

  



}
