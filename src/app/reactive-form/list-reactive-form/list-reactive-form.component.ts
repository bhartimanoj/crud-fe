import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { DataService } from 'src/app/_services/data.service';

@Component({
  selector: 'app-list-reactive-form',
  templateUrl: './list-reactive-form.component.html',
  styleUrls: ['./list-reactive-form.component.css']
})

export class ListReactiveFormComponent implements OnInit {

  studentsList: Array<any> = [];

  constructor(private dataService: DataService,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.retrieveStudentsList()
  }

  retrieveStudentsList() {
    this.dataService.retrieveStudentsList()
      .subscribe((res: any) => {
        this.studentsList = res?.data;
      });
  }

  deleteStudentRecord(id: number) {
    this.dataService.deleteStudentRecord(id)
      .subscribe((res: any) => {
        this.retrieveStudentsList();
        this.toastrService.success('Student record deleted successfully.', 'Success');
      }, (err: any) => {
        this.toastrService.error(err?.error?.message, 'Error');
      });
  }

}
