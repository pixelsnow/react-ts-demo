import React, { useRef } from "react";

type NewToDoProps = {
  addHandler: (text: string) => void;
};

const NewToDo: React.FC<NewToDoProps> = ({ addHandler }) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = textInputRef.current!.value;
    addHandler(enteredText);
    textInputRef.current!.value = "";
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <input type="text" placeholder="Add new task" ref={textInputRef} />
      <button type="submit">+</button>
    </form>
  );
};

export default NewToDo;
