import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AlertMessageService } from 'src/app/_services/alert-message.service';
import { DataService } from 'src/app/_services/data.service';

@Component({
  selector: 'app-add-edit-template-driven-form',
  templateUrl: './add-edit-template-driven-form.component.html',
  styleUrls: ['./add-edit-template-driven-form.component.css']
})

export class AddEditTemplateDrivenFormComponent implements OnInit {

  submitted: boolean = false;

  student: any = {};
  selectedStudentId: number;

  constructor(private dataService: DataService,
    private activatedRoute: ActivatedRoute,
    private alertMessageService: AlertMessageService) { }

  ngOnInit(): void {
    this.retrieveQueryParams();
  }

  retrieveQueryParams() {
    this.activatedRoute.params
      .subscribe((params: any) => {
        this.selectedStudentId = params?.id;

        if (this.selectedStudentId) {
          this.retrieveStudentDetails(this.selectedStudentId);
        }
      });
  }

  retrieveStudentDetails(id: number) {
    this.dataService.retrieveStudentDetails(id)
      .subscribe((res: any) => {
        this.studentDeatilsSetter(res?.data);
      });
  }

  studentDeatilsSetter(student: any) {
    this.student = student;
  }

  onSubmit(ngForm: any) {
    this.submitted = true;

    if (this.selectedStudentId) {
      this.updateStudentRecord();
    } else {
      this.createStudentRecord(ngForm);
    }
  }

  createStudentRecord(ngForm: any) {
    this.dataService.createStudentRecord(this.student)
      .subscribe((res: any) => {
        this.resetForm(ngForm);
        this.alertMessageService.addSuccess(res?.msg).show();
      }, (err: any) => {
        this.alertMessageService.addError(err?.msg).show();
      });
  }

  updateStudentRecord() {
    this.dataService.updateStudentRecord(this.selectedStudentId, this.student)
      .subscribe((res: any) => {
        this.alertMessageService.addSuccess(res?.msg).show();
      }, (err: any) => {
        this.alertMessageService.addError(err?.msg).show();
      });
  }

  resetForm(ngForm: any) {
    ngForm.resetForm();
    
  }

}
