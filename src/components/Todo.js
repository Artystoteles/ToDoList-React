import React from "react";

const Todo = ({ text, todos, todo, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : " "}`}>
        {text}
      </li>

      <button onClick={deleteHandler} className="delete-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
