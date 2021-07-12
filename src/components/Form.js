import React from "react";

const Form = ({ setInputText, setTodos, todos, inputText }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, { text: inputText, id: Math.random() * 100 }]);
    setInputText(" ");
  };

  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={submitTodoHandler} className="todo-btn" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select"></div>
    </form>
  );
};

export default Form;
