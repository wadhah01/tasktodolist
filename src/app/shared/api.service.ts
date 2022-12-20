import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { taskdata } from '../component/taskboard/task.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  [x: string]: any;
  addtask(taskModelObj: taskdata) {
    throw new Error('Method not implemented.');
  }

  constructor(private _http: HttpClient) { }
  //POST request
  posttask(data:any ) {
    return this._http.post<any>("http://localhost:3000/posts", data).pipe(map((res:any)=>{
      return res;
    }))
  }
  //GET request
  gettask() {
    return this._http.get<any>("http://localhost:3000/posts").pipe(map((res:any)=>{
      return res;
    }));
  }
  //delete request
  deletetask(id:number) {
    return this._http.delete<any>("http://localhost:3000/posts/"+id).pipe(map((res:any)=>{
      return res;
    }));
  }
  //update request
  updatetask(id: number, data: any) {
    return this._http.put<any>("http://localhost:3000/posts/"+id,data).pipe(map((res:any)=>{
      return res;
    }));
  }


}
