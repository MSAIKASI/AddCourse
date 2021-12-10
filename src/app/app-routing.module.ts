import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { ManagerAddCourseComponent } from './components/manager-add-course/manager-add-course.component';

const routes: Routes = [ { path: '', component: AddCourseComponent },
  { path: 'addcourse', component: AddCourseComponent },
  { path: 'manageraddcourse', component: ManagerAddCourseComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
