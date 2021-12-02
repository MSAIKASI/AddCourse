import { CourseAssignmentModel } from "./courseAssignment.model";

export class  CourseModel  {
  
  courseAssignment: CourseAssignmentModel = {
    startDate: new Date(0),
    endDate: new Date(0),
    userId: "kasim"
  };
  course: Course = {
    trainingPlatform: "" ,
    courseName: "" ,
    platformName: "" ,
    courseUrl:"" ,
    learningHours: 0,
    category: "",
    trainingType:""
    
  }

}
export class Course {
  courseId?: number;
  trainingPlatform: string ;
  courseName: string;
  platformName: string;
  courseUrl: string;
    learningHours: number;
    category: string;
    trainingType: string;
    
}