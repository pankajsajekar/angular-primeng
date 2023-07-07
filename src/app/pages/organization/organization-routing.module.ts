import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DepartmentComponent } from './department/department.component';
import { LeavetypesComponent } from './leavetypes/leavetypes.component';

const routes: Routes = [
  { path: 'dept',           component: DepartmentComponent },
  { path: 'ltype',          component: LeavetypesComponent },
  { path: '**',             redirectTo: 'dept'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganizationRoutingModule { }
