import React, { FC } from 'react';

interface Props {
    todo: Todo;
  }
  
export const TodoListItem: FC<Props> = ({ todo }) => {
    return (
        <li>
            <label
                style={{ textDecoration: todo.complete ? 'line-through' : undefined }}
            >
                <input type="checkbox" checked={todo.complete} /> {todo.text}
            </label>
        </li>
    );
}