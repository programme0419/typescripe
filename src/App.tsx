import React, { useState } from "react";
import Inputfield from "./components/Input.tsx";
import type { Todo } from "./modal.tsx";
import Todolist from "./components/Todolist.tsx";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo.trim()) {
      setTodos([...todos, { id: Date.now(), todo, isdone: false }]);
      setTodo("");
    }
  };
  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-8">Taskify</h1>
      <Inputfield todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <Todolist todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
