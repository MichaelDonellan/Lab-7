import { Component, OnInit } from '@angular/core';
import {DataService} from './Services/data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'data-app';
students:any = [];
weather:any = [];
  constructor(private dataSevice:DataService){}

ngOnInit(){
this.dataSevice.GetStudentData().subscribe(
  (data)=>{

    this.students = data.students;
    console.log(this.students);
  }

);
this.dataSevice.GetStudentData().subscribe(
  (data)=>{

    this.weather = data.weather;
    console.log(this.weather);
  }

);

}

}
