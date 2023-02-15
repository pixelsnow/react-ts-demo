import React from "react";

const NewToDo: React.FC = () => {
  return (
    <form>
      <input type="text" placeholder="Add new task" />
      <button type="submit">+</button>
    </form>
  );
};

export default NewToDo;
