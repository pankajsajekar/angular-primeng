import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { AllservicesComponent } from 'src/app/pages/allservices/allservices.component';

const routes: Routes = [
  { path: '',               redirectTo: 'dashboard',        pathMatch: 'full'},
  { path: 'dashboard',      component: DashboardComponent },
  { path: 'allservice',     component: AllservicesComponent },
  { 
    path: 'org',
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/pages/organization/organization.module').then(m => m.OrganizationModule)
      }
    ]
  },
  { path: '**',             redirectTo: 'dashboard'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyLayoutRoutingModule { }
