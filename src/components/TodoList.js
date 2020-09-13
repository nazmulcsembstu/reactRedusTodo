import React from 'react';
import Todo from './Todo';
import DeleteTodo from '../containers/DeleteTodo';

const TodoList = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
    ))}
    <DeleteTodo />
  </ul>
);

export default TodoList;