import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { ManagerAddCourseComponent } from './manager-add-course.component';

describe('ManagerAddCourseComponent', () => {
  let component: ManagerAddCourseComponent;
  let fixture: ComponentFixture<ManagerAddCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[ReactiveFormsModule,RouterTestingModule,HttpClientTestingModule ],
      declarations: [ ManagerAddCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerAddCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 

});
