import type { Todo } from "../modal.tsx";
import Singletodo from "./Singletodo.tsx";

interface props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const Todolist: React.FC<props> = ({ todos, setTodos }) => {
  return (
    <div className="relative flex min-h-[86.1vh] flex-col justify-between overflow-x-clip md:overflow-y-visible">
      <div className="isolate flex flex-col gap-12 bf-zinc-50">
        <div className="relative w-full flex-col gap-12 bg-white py-10">
          <section className="mx-auto flex max-w-screen-xl px-6 relative w-full flex-col gap-12 overflow-hidden bg-white py-0">
            <div className="grid container relative mx-auto items-center gap-6 px-4 lg:grid-cols-2">
              <div className="grid-cols-2 gap-6 flex flex-col text-blue-500 text-bold">
                <div className ="size-fit text-blue-500 text-wrap">
                  Active tasks
                  {todos
                    .filter((todo) => !todo.isdone)
                    .map((todo) => (
                      <Singletodo
                        todo={todo}
                        key={todo.id}
                        todos={todos}
                        setTodos={setTodos}
                      />
                    ))}
                </div>
                <div className ="size-fit text-red-500 text-wrap">
                  Completed tasks
                  {todos
                    .filter((todo) => todo.isdone)
                    .map((todo) => (
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
          </section>
        </div>
      </div>
    </div>
  );
};

export default Todolist;
