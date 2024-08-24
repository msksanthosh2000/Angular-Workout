import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css',
})
export class ListTodosComponent implements OnInit {
  todos: Todo[] | undefined;
  message: string | undefined;
  // todos = [
  //   new Todo(1, 'todo 1', false, new Date()),
  //   new Todo(2, 'todo 2', false, new Date()),
  //   new Todo(3, 'todo 3', false, new Date())
  // ];

  constructor(private todoService: TodoDataService, private router: Router) {}

  ngOnInit(): void {
    this.refreshTodo();
  }

  private refreshTodo() {
    this.todoService
      .retriveAllTodo('ss')
      .subscribe((response) => (this.todos = response));
  }

  getTodo(name: string, id: number) {
    return this.todoService.retriveTodo(name, id).subscribe();
  }

  addTodo(){
    this.router.navigate(['todos', -1]);
  }

  updateTodo(id: number) {
    this.router.navigate(['todos', id]);
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id, 'ss').subscribe((response) => {
      console.log(response);
      this.message = 'Successfully Todo Deleted';
      this.refreshTodo();
    });
  }
}
