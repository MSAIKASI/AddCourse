import { Component, OnInit, TemplateRef } from '@angular/core';
import {  FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CourseModel,Course } from 'src/app/models/course.model';
import { CourseAssignmentModel } from 'src/app/models/courseAssignment.model';
import { AddCourseService } from 'src/app/services/addCourse.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
  providers: [AddCourseService],
})
export class AddCourseComponent implements OnInit {
  searchText:any ;
  courses: Course[] = [];
  assignments: CourseAssignmentModel[] = [];
  disabledValue:boolean = false;
  ref: boolean = false;
  listEmpty:boolean = false;
  formValue: FormGroup;
  courseModel: CourseModel = new CourseModel();
  modalRef: BsModalRef;
  
  constructor(
    private formbuilder: FormBuilder,
    private addCourseService: AddCourseService,
    private router: Router,
    private modalService: BsModalService) {
    
  }
  
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
 }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      trainingPlatform:[''],
      courseName:[''],
      platformName: [''],
      courseUrl: [''],
      learningHours: 0,
      startDate: [''],
      endDate: [''],
      category: [''],
      trainingType: [''], 
      
    });
    this.getDate();
    this.getCourses();
    this.getCourseByUserId();
    this.formValue = new FormGroup({
      trainingPlatform: new FormControl(null, Validators.required),
      courseName: new FormControl(null, Validators.required),
      platformName: new FormControl(null, Validators.required),
      courseUrl: new FormControl(null, Validators.required),
      learningHours: new FormControl(null, Validators.required),
      startDate: new FormControl(null, Validators.required),
      endDate: new FormControl(null, Validators.required),
      category: new FormControl(null, Validators.required),
      trainingType: new FormControl(null, Validators.required),
    
    });
    
  }

  postCourseDetails() {
    this.courseModel.courseAssignment.startDate = this.formValue.value.startDate;
    this.courseModel.courseAssignment.endDate = this.formValue.value.endDate;
    this.courseModel.course.category = this.formValue.value.category;
    this.courseModel.course.trainingType = this.formValue.value.trainingType;
    this.courseModel.course.courseName = this.formValue.value.courseName;
    this.courseModel.course.trainingPlatform = this.formValue.value.trainingPlatform;
    this.courseModel.course.platformName = this.formValue.value.platformName;
    this.courseModel.course.courseUrl = this.formValue.value.courseUrl;
    this.courseModel.course.learningHours = this.formValue.value.learningHours;
    this.courseModel.courseAssignment.assignedBy = this.courseModel.courseAssignment.userId;
    let findUrl = this.courses?this.courses.filter(course => course.courseUrl == this.formValue.value.courseUrl):[];
    if (findUrl.length > 0) {
        alert("This course is already existing ");
        return;
      }
      this.addCourseService.addNewCourse(this.courseModel).subscribe(
        (res) => {
          console.log(res);
          alert('Course Added Successfully !!!');
          this.formValue.reset();
          this.getCourses();
        }
      );
            
  }

  

  postAssignmentDetails() {
    this.courseModel.courseAssignment.startDate =this.formValue.value.startDate;
    this.courseModel.courseAssignment.endDate = this.formValue.value.endDate;
    this.courseModel.course.category = this.formValue.value.category;
    this.courseModel.course.trainingType = this.formValue.value.trainingType;
    this.courseModel.course.courseName = this.formValue.value.courseName;
    this.courseModel.course.trainingPlatform = this.formValue.value.trainingPlatform;
    this.courseModel.course.platformName = this.formValue.value.platformName;
    this.courseModel.course.courseUrl = this.formValue.value.courseUrl;
    this.courseModel.course.learningHours = this.formValue.value.learningHours;
    this.courseModel.courseAssignment.assignedBy = this.courseModel.courseAssignment.userId;
    this.addCourseService.addNewAssignment(this.courseModel).subscribe(
        (res) => {
          console.log(res);
        alert('Course Added Successfully !!!');
        this.formValue.reset();
        this.getCourses();
        this.getCourseByUserId();
        }
      );  
  }

  onEdit(row: any) {
    this.courseModel.course.courseId = row.courseId;
    let findId = this.assignments.filter(assignment => assignment.courseId == row.courseId);
    if (findId.length <= 0) {
      this.formValue.controls['trainingPlatform'].setValue(row.trainingPlatform);
      this.formValue.controls['courseName'].setValue(row.courseName);
      this.formValue.controls['platformName'].setValue(row.platformName);
      this.formValue.controls['courseUrl'].setValue(row.courseUrl);
      this.formValue.controls['learningHours'].setValue(row.learningHours);
      this.formValue.controls['category'].setValue(row.category);
      this.formValue.controls['trainingType'].setValue(row.trainingType);
      this.disabledValue = true;
      this.ref = false;
      return;
      }
    
    alert("This course is already enrolled ");
    this.ref = true;

  }

  

  getCourses() {
      this.addCourseService.getAllCourses().subscribe(res => {
        this.courses = res;
        if(this.courses.length>0){
          this.listEmpty = true;
        }
      })
      return;
  }

  getCourseByUserId() {
    this.addCourseService.getCoursesByUserId('kasim').subscribe(res => {
      this.assignments = res;
    })
    return;
  }
  
 
  //Calender
  minDate: any = "";

  getDate() {
    var date: any = new Date();
    var toDate: any = date.getDate();
    if(toDate<10){
      toDate = '0' + toDate;
    }
    var month = date.getMonth() + 1;
    if (month < 10) {
      month = '0' + month;
    }
    var year = date.getFullYear();
    this.minDate = year + "-" + month + "-" + toDate;
    console.log(this.minDate);
  }

// Validators
  get trainingPlatform() {
    return this.formValue.get('trainingPlatform');
  }
  get courseName() {
    return this.formValue.get('courseName');
  }
  get platformName() {
    return this.formValue.get('platformName');
  }
  get courseUrl() {
    return this.formValue.get('courseUrl');
  }
  get learningHours() {
    return this.formValue.get('learningHours');
  }
  get startDate() {
    return this.formValue.get('startDate');
  }
  get endDate() {
    return this.formValue.get('endDate');
  }
  get category() {
    return this.formValue.get('category');
  }
  get trainingType() {
    return this.formValue.get('trainingType');
  }


  search() {
    if (this.searchText == "") {
      this.ngOnInit();
    }
    else{
      this.courses = this.courses.filter(res => res.courseName.toLocaleLowerCase().match(this.searchText.toLocaleLowerCase()) || res.platformName.toLocaleLowerCase().match(this.searchText.toLocaleLowerCase()));
      if(this.courses.length>0){
        this.listEmpty = true;
      }
      } 
  }

  resetForm() {
    this.formValue.reset();
    this.disabledValue = false;
  }

  // sort
  key = 'id';
  reverse: boolean = false;
  sort(key: any) {
    this.key = key;
    this.reverse = !this.reverse;
    
  }

  
  
}
