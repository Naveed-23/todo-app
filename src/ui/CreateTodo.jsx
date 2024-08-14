import Heading from "./Heading";
import '@fortawesome/fontawesome-free/css/all.min.css';
import CreateTodoModal from "../features/todo/CreateTodoModal";

export default function CreateTodo({ setSearchQuery }) {
  return (
    <div className="flex flex-col justify-center items-center p-4 sm:p-10 space-y-8">
      <div className="flex text-3xl sm:text-5xl text-slate-100 space-x-2">
        <span>Start a</span>
        <Heading size={'text-3xl sm:text-5xl'}>Todo</Heading>
        <span>Now! 🚀😊</span>
      </div>
      <div className="flex flex-col sm:flex-row justify-center sm:justify-between space-y-4 sm:space-y-0 items-center w-full">
        <div className="flex items-center w-full sm:w-auto">
          <CreateTodoModal />
          <input
            type="search"
            className="h-12 w-full sm:w-[26rem] md:w-[30rem] lg:w-[40rem] xl:w-[52.5rem] outline-none rounded-lg pl-10 pr-4 cursor-text ml-2"
            placeholder="Search your todos"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}