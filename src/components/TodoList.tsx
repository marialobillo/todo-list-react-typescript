import React, { FC } from 'react';
import { TodoListItem } from './TodoListItem';

interface Props {
    todos: Todo[];
    toggleTodo: ToggleTodo;
}

export const TodoList: FC<Props> = ({ todos, toggleTodo }) => {
    return (
        <ul>
            {todos.map(todo => (
                <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
            ))}
        </ul>
    ); 
}
