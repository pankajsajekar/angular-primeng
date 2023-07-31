import { Component } from '@angular/core';
import { ToastService } from '../../../core/services/toast.service';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss'],
})
export class DepartmentComponent {

  menuItems: MenuItem[] | undefined;
  
  constructor(private toastService: ToastService) {}
  
  showSidebarAddDepartmenet: boolean = false;

  list1 = [
    {
      id: 1,
      name : "Pankaj",
      dept : "IT",
    },
    {
      id: 2,
      name : "Jayesh",
      dept : "Farma",
    },
    {
      id: 3,
      name : "Ashu",
      dept : "Account",
    },
  ]

  ngOnInit() {
    this.menuItems = [
      {
          label: 'New',
          icon: 'pi pi-fw pi-pencil',
      },
      {
          label: 'Delete',
          icon: 'pi pi-fw pi-trash',
          command: () => {
            this.delete();
        }
      }
  ];
}

  onFormSubmitted(): void {
    this.toastService.showToast('success', 'Successfull', 'Department Created Succesfully!');
  }

  delete() {
    this.toastService.showToast( 'warn', 'Delete', 'Department Delete Succesfully!');
  }

}
