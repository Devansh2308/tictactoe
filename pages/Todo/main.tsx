import React, { useState } from "react";
import Form from "./form";
import TodoList from "./list";

function todo() {
  const [todo, setTodo] = useState([]);

  return (
    <div>
      <Form
        saveTodo={todoText => {
          const trimmedText = todoText.trim();
          if (trimmedText.length > 0) {
            setTodo([...todo, trimmedText]);
          }
        }}
      />
      <TodoList
        todos={todo}
        deleteTodo={todoIndex => {
          const newTodos = todo.filter((_, index) => index !== todoIndex);

          setTodo(newTodos);
        }}
      ></TodoList>
    </div>
  );
}

export default todo;
