import ToDoList from "./Components/ToDoList";
import NewToDo from "./Components/NewToDo";

import "./App.css";

const App: React.FC = () => {
  const todos = [
    { id: 1, text: "Finish TS project and course" },
    { id: 2, text: "Feed cat" },
  ];

  const todoAddHandler = (text: string) => {
    console.log(text);
  };

  return (
    <div className="App">
      <h1>hi</h1>
      <NewToDo addHandler={todoAddHandler} />
      <ToDoList todos={todos} />
    </div>
  );
};

export default App;
