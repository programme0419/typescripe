import React, { useEffect, useState, useRef } from "react";
import type { Todo } from "../modal";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin3Fill } from "react-icons/ri";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const Singletodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isdone: !todo.isdone } : todo
      )
    );
  };
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form className="flex-align-center gap-x-4" onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input
          value={editTodo}
          ref={inputRef}
          onChange={(e) => setEditTodo(e.target.value)}
          className="w-full rounded-xl p-4 text-black outline-none focus:ring-0 border border-gray-300 focus:border-gray-400 transition-all duration-300"
        />
      ) : todo.isdone ? (
        <s className="w-full rounded-xl p-4 text-black outline-none focus:ring-0 border border-gray-300 focus:border-gray-400 transition-all duration-300">{todo.todo}</s>
      ) : (
        <span className="w-full rounded-xl p-4 text-black outline-none focus:ring-0 border border-gray-300 focus:border-gray-400 transition-all duration-300">{todo.todo}</span>
      )}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <span
          className="cursor-pointer"
          onClick={() => {
            if (!edit && !todo.isdone) {
              setEdit(!edit);
            }
          }}
        >
          <FaEdit />
        </span>
        <span className="cursor-pointer" onClick={() => handleDelete(todo.id)}>
          <RiDeleteBin3Fill />
        </span>
        <span className="cursor-pointer" onClick={() => handleDone(todo.id)}>
          <IoCheckmarkDoneSharp />
        </span>
      </div>
    </form>
  );
};

export default Singletodo;
