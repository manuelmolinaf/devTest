import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SnapshotsComponent } from './components/snapshots/snapshots.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard/live', pathMatch: 'full'},
  {path:'dashboard/live', component:DashboardComponent},
  {path:'dashboard/:id', component:DashboardComponent},
  {path:'snapshots', component:SnapshotsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
