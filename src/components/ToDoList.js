import React from "react";
import Todo from "./Todo";

const ToDoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map(
          (todo) => (
            console.log(todo.text),
            (
              <Todo
                setTodos={setTodos}
                todos={todos}
                key={todo.id}
                todo={todo}
                text={todo.text}
              />
            )
          )
        )}
      </ul>
    </div>
  );
};

export default ToDoList;
