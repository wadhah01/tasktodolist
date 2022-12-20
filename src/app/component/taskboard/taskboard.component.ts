import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder  } from '@angular/forms';
import { ApiService } from 'src/app/shared/api.service';
import { taskdata } from './task.model'; 


@Component({
  selector: 'app-taskboard',
  templateUrl:'./taskboard.component.html',
  styleUrls: ['./taskboard.component.css']
})

export class TaskboardComponent implements OnInit {

  formValue!:UntypedFormGroup
  taskModelObj : taskdata = new taskdata;
  alltaskData: any;
  showAdd!:boolean;
  showBtn!:boolean;

  constructor(private formbuilder: UntypedFormBuilder, private api:ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      name: [''],
      email: [''],
      mobile: [''],
      address: [''],
      services: [''],
    })
    this.getAllData();
  }
  clickAddtask(){
    this.formValue.reset();
    this.showAdd = true;
    this.showBtn = false;
  }
 
  addtask(){
    this.taskModelObj.name = this.formValue.value.name;
    this.taskModelObj.Start = this.formValue.value.start;
    this.taskModelObj .finish = this.formValue.value.finish;
    this.taskModelObj .progression = this.formValue.value.progression;
    this.api.posttask(this.taskModelObj ).subscribe((res: any) => {
      console.log(res);
      alert("Task added successfully");
      this.formValue.reset();

      let ref= document.getElementById('close');
      ref?.click();

      this.getAllData();

    }, (err: any)=>{
      console.log(err);
      alert("adding task failed");
    })
  }

  getAllData(){
    this.api.gettask().subscribe((res: any) => {
      this.alltaskData= res;
    }, (err: any)=>{
      console.log(err);
    })
  }

  deletetask(data: any){
    this.api.deletetask(data).subscribe((res: any) => {
      console.log(res);
      alert("Task Deleted Successfully");
      this.getAllData();
    })
  }

  onEditTask(data: any){
    this.showAdd = false;
    this.showBtn = true;
    
    this.taskModelObj .id = data.id;
    this.formValue.controls['name'].setValue(data.name);
    this.formValue.controls['start'].setValue(data.start);
    this.formValue.controls['finish'].setValue(data.finish);
    this.formValue.controls['progression'].setValue(data.progression);

 
  }
  updatetask(){
    this.taskModelObj .name = this.formValue.value.name;
    this.taskModelObj .Start = this.formValue.value.start;
    this.taskModelObj .finish = this.formValue.value.finish;
    this.taskModelObj .progression = this.formValue.value.progression;

    this.api.updatetask(this.taskModelObj .id,this.taskModelObj ).subscribe((res: any) => {
      alert("Task Updated Successfully");
      this.formValue.reset();

      let ref= document.getElementById('close');
      ref?.click();

      this.getAllData();

    })
    
  }

  
}
