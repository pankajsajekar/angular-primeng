import { Component } from '@angular/core';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss'],
})
export class DepartmentComponent {
  
  constructor(private toastService: ToastService) {}
  
  showSidebarAddDepartmenet: boolean = false;

  ngOnInit() {
  }

  onFormSubmitted(): void {
    this.toastService.showToast('success', 'Successfull', 'Department Created Succesfully!');
  }

}
