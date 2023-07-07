import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyLayoutRoutingModule } from './company-layout-routing.module';

import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { AllservicesComponent } from 'src/app/pages/allservices/allservices.component';



@NgModule({
  declarations: [
    DashboardComponent,
    AllservicesComponent,
  ],
  imports: [
    CommonModule,
    CompanyLayoutRoutingModule,
  ]
})
export class CompanyLayoutModule { }
