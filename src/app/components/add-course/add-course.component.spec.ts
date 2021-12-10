import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AddCourseComponent } from './add-course.component';

describe('addCourseComponent', () => {
  let addCourseComponent: AddCourseComponent;
  let fixture: ComponentFixture<AddCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[ReactiveFormsModule,RouterTestingModule,HttpClientTestingModule,ModalModule.forRoot() ],
      declarations: [AddCourseComponent],
      
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCourseComponent);
    addCourseComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(addCourseComponent).toBeTruthy();
  });


  
  it('[Form-Check]- should check form is valid or not if no values entered', () => {
    expect(addCourseComponent.formValue.valid).toBeFalsy();
  });


  // it('[Form-Check]- should check form is valid or not when values entered', () => {
  //   component.formValue.controls['trainingPlatform'].setValue('degreed');
  //   component.formValue.controls['courseName'].setValue('java fundamentals');
  //   component.formValue.controls['platformName'].setValue('java');
  //   component.formValue.controls['courseUrl'].setValue('http://localhost/4200');
  //   component.formValue.controls['learningHours'].setValue('2');
  //   component.formValue.controls['startDate'].setValue('12-12-21');
  //   component.formValue.controls['endDate'].setValue('21-12-21');
  //   component.formValue.controls['category'].setValue('mandatory');
  //   component.formValue.controls['trainingType'].setValue('extenal');

  //   expect(component.formValue.valid).toBeTruthy();
  // })


  it('[Check-CourseName]- should check form is valid or not if no values entered', () => {
    expect(addCourseComponent.formValue.valid).toBeFalsy();
  });
});


