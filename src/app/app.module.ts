import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { ManagerAddCourseComponent } from './components/manager-add-course/manager-add-course.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { BsDropdownModule,BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { HttpClientTestingModule } from '@angular/common/http/testing';




@NgModule({
  declarations: [
    AppComponent,
    AddCourseComponent,
    ManagerAddCourseComponent,
  ],
 
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    CommonModule,
    BrowserAnimationsModule,
    BsDropdownModule,
    Ng2OrderModule,
    HttpClientTestingModule,
    ModalModule.forRoot(),
  ],
  providers: [BsModalService, BsDropdownConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
