import { Injectable } from '@angular/core';
import { BitMexService } from './bit-mex.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { lastValueFrom, Observable } from 'rxjs'
import { Snapshot } from 'src/app/models/snapshot';

@Injectable({
  providedIn: 'root'
})
export class SnapshotService {

  constructor(private bitmexService:BitMexService, private http:HttpClient) {

  }

  saveSnapshot():Observable<Snapshot>{

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    const newSnapshot:Snapshot ={
      date: new Date(),
      instrument: this.bitmexService.instrumentSubject.getValue()!,
      orderBook: this.bitmexService.orderBookSubject.getValue()
    } 

    return this.http.post<Snapshot>('mongo/saveSnapshot', newSnapshot, httpOptions);

  }

  getSnapshots(){
    return lastValueFrom(this.http.get<Snapshot[]>('mongo/snapshots'));
  }

  getSnapshot(id:string){
    return lastValueFrom(this.http.get<Snapshot>(`mongo/snapshot/${id}`));
  }

  checkConnection():any{
    return this.http.get('mongo/status');
  }


}
