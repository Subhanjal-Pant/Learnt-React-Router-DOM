/* eslint-disable no-unused-vars */
import { useState } from "react";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import "./App.css";
import SingleTodo from "./components/SingleTodo";
import { v4 as uuidv4 } from "uuid";

function App() {
  // const [count, setCount] = useState(0)
  const [todo, settodo] = useState("");
  const [todos, settodos] = useState([]);

  const handleInputChange = (e) => {
    // console.log("Changed")
    console.log(e.target.value);
    settodo(e.target.value);
  };

  const handleAddClick = () => {
    console.log("Add button clicked!");
    settodos((prevTodos) => [
      ...prevTodos,
      { id: uuidv4(), todo, isCompleted: false },
    ]);
    console.log(todos);
    settodo("");
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleAddClick();
    }
  };
  return (
    <>
      <div className="flex flex-col">
        <Navbar />

        <div className="bg-violet-200 m-8 w-auto p-1 px-3 flex font-bold rounded-xl min-h-[70vh]">
          <div className="w-full">
            <h3 className="text-md m-2">Add a Todo</h3>
            <div className="w-full my-4">
              <input
                onChange={handleInputChange}
                onKeyDown={handleEnter}
                type="text"
                value={todo}
                className="h-10  w-[60%] rounded-md"
              />
              <Button text="Save" onClick={handleAddClick} />
            </div>
            <h1>Your Todos</h1>
            {todos.length === 0 && <div>No Todos Add a Todo?</div>}
            {todos.map((item) =>
              item.todo ? (
                <SingleTodo
                  key={item.id}
                  todoText={item.todo}
                  todo={item}
                  settodos={settodos}
                  todos={todos}
                  handleInputChange={handleInputChange}
                  settodo = {settodo}
                  todonew = {todo}
                />
              ) : (
                ""
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
