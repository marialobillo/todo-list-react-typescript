import React, { useState } from 'react';
import { TodoListItem } from './components/TodoListItem';


const initialTodos: Todo[] = [
  {
    text: 'Walk the dog',
    complete: false,
  },
  {
    text: 'Write app',
    complete: true,
  },
];

function App() {

  const [todos, setTodos] = useState(initialTodos);

  const toogleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map(todo => {
      if(todo === selectedTodo){
        return {
          ...todo, 
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  }
  return (
    <div className="App">
      <TodoListItem todo={todos[0]} />
      <TodoListItem todo={todos[1]} />
      
    </div>
  );
}

export default App;
