import { Injectable } from '@angular/core';
import { BitMexService } from './bit-mex.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SnapshotService {

  constructor(private bitmexService:BitMexService) {

  }

}
