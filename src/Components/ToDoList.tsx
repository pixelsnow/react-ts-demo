import React from "react";

interface ToDoListProps {
  todos: {
    id: string;
    text: string;
  }[];
}

const ToDoList: React.FC<ToDoListProps> = ({ todos }) => {
  return (
    <ul>
      {todos.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};

export default ToDoList;
