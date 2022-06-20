import { Component, OnInit } from '@angular/core';

import { AlertMessageService } from 'src/app/_services/alert-message.service';
import { DataService } from 'src/app/_services/data.service';

@Component({
  selector: 'app-list-template-driven-form',
  templateUrl: './list-template-driven-form.component.html',
  styleUrls: ['./list-template-driven-form.component.css']
})

export class ListTemplateDrivenFormComponent implements OnInit {

  studentsList: Array<any> = [];

  constructor(private dataService: DataService,
    private alertMessageService: AlertMessageService) { }

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
        this.alertMessageService.addSuccess(res?.msg).show();
      }, (err: any) => {
        this.alertMessageService.addError(err?.msg).show();
      });
  }

}
