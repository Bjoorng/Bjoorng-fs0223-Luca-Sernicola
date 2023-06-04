import { MyTodo } from './my-todo-model';

export class ServiceClass implements MyTodo{

  title: string;
  completed: boolean;
  comprehension?: number;
  id?: number;

  constructor(title: string, completed: boolean, comprehension?:number, id?: number) {
      this.title = title;
      this.completed = completed;
      this.comprehension = comprehension;
      this.id = id;
    }
}
