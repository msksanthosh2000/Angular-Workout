import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../../list-todos/list-todos.component';
import { API_URI, JPA_API_URI } from '../../app.constants';


@Injectable({
  providedIn: 'root',
})
export class TodoDataService {
  constructor(private http: HttpClient
  ) {}

  retriveAllTodo(username: string) {
    return this.http.get<Todo[]>(
      `${JPA_API_URI}/users/${username}/getAllTodos`
    );
  }

  retriveTodo(username: string, id: number) {
    return this.http.get<Todo>(
      `${JPA_API_URI}/users/${username}/getTodo/${id}`
    );
  }

  deleteTodo(id: number, username: string) {
    return this.http.delete(
      `${JPA_API_URI}/users/${username}/todo/${id}`
    );
  }

  updateTodo(id: number, username: string, todo: Todo) {
    return this.http.put(
      `${JPA_API_URI}/users/${username}/todo/${id}`,
      todo
    );
  }

  createTodo(username: string, todo: Todo) {
    return this.http.post(`${JPA_API_URI}/users/${username}/todo`, todo);
  }
}
