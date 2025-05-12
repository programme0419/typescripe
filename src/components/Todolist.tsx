import type { Todo } from "../modal.tsx";
import Singletodo from "./Singletodo.tsx";

interface props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const Todolist: React.FC<props> = ({ todos, setTodos }) => {
  return (
    <div className="container mx-auto my-8 w-full max-w-3xl rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
      <div className="flex flex-col gap-y-3">
        <span className=" text-lg font-medium text-blue-500 dark:text-gray-400">
          Active tasks
        </span>
        <div className="flex flex-col gap-y-3">
        {todos.filter((todo) => !todo.isdone).map((todo) => (
          <Singletodo
            todo={todo}
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-y-3">
        <span className="text-lg font-medium text-red-500 dark:text-gray-400">
          completed tasks
        </span>
        <div className="flex flex-col gap-y-3">
        {todos.filter((todo) => todo.isdone).map((todo) => (
          <Singletodo
            todo={todo}
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todolist;
