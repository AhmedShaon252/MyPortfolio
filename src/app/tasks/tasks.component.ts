import { Component, OnInit } from '@angular/core';
import { TododataService } from './../service/data/tododata.service';

export class todo{
  constructor(
    public id: number,
    public description: String,
    public done: boolean,
    public targetdate: Date){ }
}

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  todos : todo[] = [];
  constructor(private todoService: TododataService) { 

  }

  ngOnInit(): void {
    this.todoService.retriveAllTodos('Estiack Ahmed').subscribe(
      response=>{
        console.log(response);
        this.todos = response;
      }
    )
  }

}
