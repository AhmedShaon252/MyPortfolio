import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { todo } from '../../tasks/tasks.component';

@Injectable({
  providedIn: 'root'
})
export class TododataService {

  constructor(private http: HttpClient) { }

  retriveAllTodos(username: string){
    return this.http.get<todo[]>(`http://localhost:8080/users/${username}/todos`);
  }
}
