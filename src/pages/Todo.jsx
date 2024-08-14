import { useEffect, useState } from "react";
import CreateTodo from "../ui/CreateTodo";
import axios from 'axios';
import TodoData from "../features/todo/TodoData";
import toast from "react-hot-toast";
const apiUrl = import.meta.env.VITE_API;

export default function Todo(){
    const[ todos, setTodos ] = useState([]);
    const [ searchQuery, setSearchQuery ] = useState("");
    const token = localStorage.getItem('token');
    useEffect(() => {
        axios.get(`${apiUrl}/api/gettodos`, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        }).then(response => {
            setTodos(response.data.list);
        })
    },[token, todos]);
    async function onDelete(todoId) {
        try {
            const response = await axios.delete(`${apiUrl}/api/removetodo`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                data: { _id: todoId},
            });
            toast.success(response.data.message);
            setTodos(todos.filter(todo => todo._id !== todoId));
        } catch (error) {
            toast.error("Error deleting todo:", error.message);
        }
    }

    const filteredTodos = todos.filter(todo => todo.title.toLowerCase().includes(searchQuery.toLowerCase()));
    return (
        <div className="flex flex-col items-center space-y-2 sm:px-8">
          {/* CreateTodo Component */}
          <CreateTodo setSearchQuery={setSearchQuery} />
          
          {/* Todos List */}
          <div className="w-full max-w-3xl space-y-4">
            {filteredTodos.length === 0 ? (
              <p className="text-slate-400 text-center">No todos here</p>
            ) : (
              filteredTodos.map((todo) => (
                <TodoData onDelete={onDelete} key={todo._id} todo={todo} />
              ))
            )}
          </div>
        </div>
      );
}