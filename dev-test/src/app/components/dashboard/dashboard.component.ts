import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { SnapshotService } from 'src/services/snapshot.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  snapshotId:string |null = null;

  constructor( 
    private toast: HotToastService, 
    private route: ActivatedRoute,
    private snapshotService: SnapshotService)
    { }

  ngOnInit(): void {

    this.snapshotId = this.route.snapshot.paramMap.get('id');
    
  }

  saveSnapshot(){
    
    this.snapshotService.saveSnapshot().pipe(
      this.toast.observe({
        loading: 'Saving...',
        success: 'Snapshot saved!',
        error: ({message}) => `${message}`
      })
    ).subscribe();
  }

 

}
