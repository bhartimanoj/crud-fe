import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  API_BASE_URL: string = `${environment.BASE_URL}student/`;

  constructor(private httpClient: HttpClient) { }

  retrieveStudentsList(): Observable<any> {
    return this.httpClient.get(`${this.API_BASE_URL}retrieve-records`);
  }

  retrieveStudentDetails(id: number): Observable<any> {
    return this.httpClient.get(`${this.API_BASE_URL}retrieve-details/${id}`);
  }

  createStudentRecord(record: any): Observable<any> {
    return this.httpClient.post(`${this.API_BASE_URL}create-record`, record);
  }

  updateStudentRecord(id: number, record: any): Observable<any> {
    return this.httpClient.patch(`${this.API_BASE_URL}update-record/${id}`, record);
  }

  deleteStudentRecord(id: number): Observable<any> {
    return this.httpClient.delete(`${this.API_BASE_URL}delete-record/${id}`);
  }
}