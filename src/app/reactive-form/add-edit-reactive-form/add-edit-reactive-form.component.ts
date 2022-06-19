import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { DataService } from 'src/app/_services/data.service';

@Component({
  selector: 'app-add-edit-reactive-form',
  templateUrl: './add-edit-reactive-form.component.html',
  styleUrls: ['./add-edit-reactive-form.component.css']
})

export class AddEditReactiveFormComponent implements OnInit {

  formGroup: FormGroup;
  submitted: boolean = false;

  selectedStudentId: number;

  constructor(private dataService: DataService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService) {
    this.formInit();
  }

  ngOnInit(): void {
    this.retrieveQueryParams();
  }

  formInit() {
    this.formGroup = new FormGroup({
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(),
      parentName: new FormControl(),
      DOB: new FormControl(),
      rollNo: new FormControl(null, [Validators.required]),
      bloodGroup: new FormControl(),
      email: new FormControl(null, [Validators.required, Validators.email]),
      class: new FormControl(),
      phone: new FormControl()
    });
  }

  get formControls() {
    return this.formGroup.controls;
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
    this.formGroup.patchValue({
      firstName: student?.firstName,
      lastName: student?.lastName,
      parentName: student?.parentName,
      DOB: student?.DOB,
      rollNo: student?.rollNo,
      bloodGroup: student?.bloodGroup,
      email: student?.email,
      class: student?.class,
      phone: student?.phone,
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.formGroup.invalid) {
      return;
    } else {
      if (this.selectedStudentId) {
        this.updateStudentRecord();
      } else {
        this.createStudentRecord();
      }
    }
  }

  createStudentRecord() {
    this.dataService.createStudentRecord(this.formGroup.value)
      .subscribe((res: any) => {
        this.resetForm();

        this.toastrService.success('Student record created successfully.', 'Success');
      }, (err: any) => {
        this.toastrService.error(err?.error?.message, 'Error');
      });
  }

  updateStudentRecord() {
    this.dataService.updateStudentRecord(this.selectedStudentId, this.formGroup.value)
      .subscribe((res: any) => {
        this.toastrService.success('Student record updated successfully.', 'Success');
      }, (err: any) => {
        this.toastrService.error(err?.error?.message, 'Error');
      });
  }

  resetForm() {
    this.submitted = false;
    this.formGroup.reset();
  }

}
