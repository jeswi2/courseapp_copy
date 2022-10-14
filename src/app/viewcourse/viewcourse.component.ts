import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewcourse',
  templateUrl: './viewcourse.component.html',
  styleUrls: ['./viewcourse.component.css']
})
export class ViewcourseComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.fetchData()
  }
  status:boolean=false

  fetchData=()=>{
    this.myapi.viewCourse().subscribe(
      (data)=>{
        this.courseData=data
        this.status=true
      }
    )
  }

  courseData:any=[]


  ngOnInit(): void {
  }

}
