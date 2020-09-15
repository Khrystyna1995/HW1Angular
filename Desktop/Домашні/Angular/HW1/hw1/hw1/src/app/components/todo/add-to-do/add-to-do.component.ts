import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.css'],
})
export class AddToDoComponent implements OnInit {
  constructor() {}

  todos = [
    { name: 'Read a book' },
    { name: 'Have a lunch' },
    { name: 'Go shopping' },
  ];

  addTodo(todo) {
    const newToDo = { name: todo };
    this.todos.push(newToDo);
  }

  deleteToDo(todo) {
    this.todos = this.todos.filter((t) => t.name !== todo.name);
  }

  ngOnInit(): void {}
}
