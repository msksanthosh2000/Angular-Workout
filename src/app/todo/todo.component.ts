import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent implements OnInit {
  id!: number;
  todo!: Todo;

  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id, '', false, new Date());

    if (this.id != -1) {
      this.todoService.retriveTodo('name', this.id).subscribe((response) => {
        this.todo = response;
      });
    }
  }

  getTodo(name: string, id: number) {
    return this.todoService.retriveTodo(name, id).subscribe();
  }

  SaveTodo() {
    if (this.id == -1) {
      this.todoService.createTodo('ss', this.todo).subscribe(() => {
        this.router.navigate(['todo']);
      });
    } else {
      this.todoService.updateTodo(this.id, 'ss', this.todo).subscribe(() => {
        this.router.navigate(['todo']);
      });
    }
  }
}
