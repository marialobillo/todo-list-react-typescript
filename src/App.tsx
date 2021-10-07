import React, { useState } from 'react';
import { TodoList } from './components/TodoList';


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

  const toggleTodo = (selectedTodo: Todo) => {
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
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
      
    </div>
  );
}

export default App;
