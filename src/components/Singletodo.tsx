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
    <div
      className="flex flex-col gap-6  text-lg font-medium text-black-500 dark:text-gray-400"
      onSubmit={(e) => handleEdit(e, todo.id)}
    >
      {edit ? (
        <input
          value={editTodo}
          ref={inputRef}
          onChange={(e) => setEditTodo(e.target.value)}
        />
      ) : (
        todo.todo
      )}
      <div className="flex items-center justify-center gap-5">
        <div
          className="cursor-pointer"
          onClick={() => {
            if (!edit && !todo.isdone) {
              setEdit(!edit);
            }
          }}
        >
          <FaEdit />
        </div>
        <div className="cursor-pointer" onClick={() => handleDelete(todo.id)}>
          <RiDeleteBin3Fill />
        </div>
        <div className="cursor-pointer" onClick={() => handleDone(todo.id)}>
          <IoCheckmarkDoneSharp />
        </div>
      </div>
    </div>
  );
};

export default Singletodo;
