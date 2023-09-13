import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
function Todo() {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState();
  const [id, setId] = useState();

  // Handle submit
  const handlesubmit = () => {
    setTodo(todo.concat({ text: input, id: id }));
    setInput("");
  };

  //Removehandle
  const removeHandle = (id) => {
    setTodo((todo) => todo.filter((t) => t.id !== id));
  };
  return (
    <div className=" col-sm-6 p-3 bg-info mx-auto">
      <input
        className="form-control "
        type="text"
        onChange={(e) => setId(e.target.value)}
        placeholder="Id"
      />
      <br />
      <input
        className="form-control  mt-1"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="new todo"
      />
      <br />
      <input
        type="submit"
        value="submit"
        className="mt-1 btn btn-success"
        onClick={handlesubmit}
      />

      {/* Display States by map mathod */}

      <ul className="list-group list-group-none  mx-auto mt-1">
        <br />
        {todo.map((t) => {
          return (
            <li key={t.id} className=" mt-2">
              <span>{t.text}</span>
              <button
                onClick={() => removeHandle(t.id)}
                className="btn btn-sm  btn-primary ms-1"
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
      <div className="d-flex justify-content-end">
        <h4>
          <Link to="/counter" className="btn btn-sm btn-primary">
            Click here for counter
          </Link>
        </h4>
      </div>
    </div>
  );
}

export default Todo;
