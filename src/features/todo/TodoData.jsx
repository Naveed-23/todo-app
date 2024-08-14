
export default function TodoData({ todo, onDelete }) {
  return (
    <div className="relative bg-slate-800 text-slate-100 rounded-lg p-4 sm:p-4 md:p-6 lg:p-6 shadow-md mb-4">

      <button
        onClick={() => onDelete(todo._id)}
        className="absolute top-2 right-4 text-lg sm:text-xl text-slate-400 hover:text-stale-200 transition duration-200"
      >
        &times;
      </button>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div className="flex-1">
          <h2 className="text-lg sm:text-xl font-semibold">{todo.title}</h2>
          <p className="text-slate-400">{todo.desc}</p>
        </div>
      </div>
    </div>
  );
}