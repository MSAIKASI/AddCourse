import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CourseAssignmentModel } from "../models/courseAssignment.model";
import { Course, CourseModel } from "../models/course.model";

@Injectable({providedIn:'root'})
export class AddCourseService {
   courseAssignment: CourseAssignmentModel = new CourseAssignmentModel();
    courseModel: CourseModel;
    course:Course;
  baseUrl = 'http://localhost:8080/api/addassignment';

  baseUrl2 = 'http://localhost:8080/api/course/';

  constructor(private httpClient: HttpClient) {}

  addNewAssignment(courseModel: CourseModel): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}/createassignment/${this.courseAssignment.userId}`, courseModel).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  addNewCourse(courseModel:CourseModel):Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}/create/${this.courseAssignment.userId}`, courseModel).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

    
    //course apis

  createCourse(course: Course) :Observable<Object>{
    return this.httpClient.post(`${this.baseUrl2}/create/`,course).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  
  
  getAllCourses() {
    return this.httpClient.get<any>( `${this.baseUrl2}/findallcourses`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}