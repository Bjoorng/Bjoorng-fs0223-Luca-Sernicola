import { MyTodo } from './my-todo-model';

export class ServiceClass implements MyTodo{

  title: string;
  completed: boolean;
  id?: number;

  constructor(title: string, completed: boolean, id?: number) {
      this.title = title;
      this.completed = completed;
      this.id = id;
    }
}
