import { HttpClient } from "@angular/common/http";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Course } from "../models/course.model";
import { CourseAssignmentModel } from "../models/courseAssignment.model";
import { AddCourseService } from "./addCourse.service";

describe('AddCourseComponent', () => {
    let addCourseService: AddCourseService;
    let httpClient: HttpClient;
    let httpController:HttpTestingController
  
    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [FormsModule, ReactiveFormsModule, HttpClientTestingModule],
            providers: [AddCourseService]
        });
         
            addCourseService = TestBed.inject(AddCourseService);
            httpClient = TestBed.inject(HttpClient);
            httpController = TestBed.inject(HttpTestingController);    
    });

    

    it('service create', () => {
        expect(addCourseService).toBeDefined();
    });
    

    it('Test the addNewCourse api', () => {
        const testData = true;
        const inputData = {
            courseAssignment :{
                startDate: new Date(0),
                endDate: new Date(0),
                courseId:0,
                userId: "roshan",
                assignedBy: ""
              },
              course: {
                trainingPlatform: "" ,
                courseName: "" ,
                platformName: "" ,
                courseUrl:"" ,
                learningHours: 0,
                category: "",
                trainingType:""
                
              }
                
        }

        // addCourseService
        //     .addNewCourse(inputData)
        //     .then((data: any) => expect(data).toEqual(testData));
    })


});

