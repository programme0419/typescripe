import { useRef } from "react";
interface props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const Inputfield: React.FC<props> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className="mx-auto max-w-screen-xl relative flex items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10 "
      onSubmit={(e) => handleAdd(e)}
    >
      <input
        type="text"
        value={todo}
        ref={inputRef}
        onChange={(e) => setTodo(e.target.value)}
        className="w-full rounded-xl p-4 text-black outline-none focus:ring-0 border border-gray-300 focus:border-gray-400 transition-all duration-300"
        placeholder="Enter a task"
       />
    </form>
  );
};

export default Inputfield;
