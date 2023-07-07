import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizationRoutingModule } from './organization-routing.module';

import { TableModule } from 'primeng/table';
import { MenuModule } from 'primeng/menu';
import { TabMenuModule } from 'primeng/tabmenu';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { ToastModule } from 'primeng/toast';

import { DepartmentComponent } from 'src/app/pages/organization/department/department.component';
import { LeavetypesComponent } from 'src/app/pages/organization/leavetypes/leavetypes.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { EditDepartmentComponent } from './edit-department/edit-department.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DepartmentComponent,
    LeavetypesComponent,
    AddDepartmentComponent,
    EditDepartmentComponent,
  ],
  imports: [
    CommonModule,
    OrganizationRoutingModule,
    ReactiveFormsModule,
    
    // from primeng
    TableModule,
    MenuModule,
    TabMenuModule,
    ButtonModule,
    SidebarModule,
    ToastModule,
  ],
})
export class OrganizationModule { }
