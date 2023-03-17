import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { BitMexService } from 'src/services/bit-mex.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  snapshotId:string |null = null;

  constructor(private bitMexService:BitMexService, private toast: HotToastService, private route: ActivatedRoute){

  }

  ngOnInit(): void {

    this.snapshotId = this.route.snapshot.paramMap.get('id');
    
  }

  saveSnapshot(){
    
    this.bitMexService.saveSnapshot().pipe(
      this.toast.observe({
        loading: 'Saving...',
        success: 'Snapshot saved!',
        error: ({message}) => `${message}`
      })
    ).subscribe();
  }

 

}
