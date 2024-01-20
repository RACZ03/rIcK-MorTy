import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobRoutingModule } from './job-routing.module';
import { JobComponent } from './job.component';
import { SharedModule } from '@app/shared';



@NgModule({
  declarations: [
  JobComponent,
  ],
  imports: [
    CommonModule,
    JobRoutingModule,
    SharedModule
  ]
})
export class JobModule { }
