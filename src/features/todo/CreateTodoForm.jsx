import Form from "../../ui/Form";
import FormButton from "../../ui/FormButton";
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from "react-hot-toast";
const apiUrl = import.meta.env.VITE_API;

export default function CreateTodoForm({ onCloseModal }){
    const { register, handleSubmit} = useForm();
    
    async function onSubmit(data) {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post(
                `${apiUrl}/api/createtodo`,
                {
                    title: data.title,
                    desc: data.description,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                }
            );
            toast.success("Todo created successfully");
            onCloseModal();
            return response.data; // return the data if you need to use it elsewhere
        } catch (error) {
            console.error("Error creating todo:", error);
            // Handle error appropriately
        }
    }
    return (
        <Form onSubmit={handleSubmit(onSubmit)} type={'modal'}>
            <label htmlFor="" className="block text-slate-100 text-lg font-semibold mb-2">
                Create a Todo
            </label>
            <div className="mb-2">
                <input
                    type="text"
                    id="title"
                    placeholder="Title"
                    {...register('title')}
                    className="border border-gray-600 bg-slate-900 outline-none text-white rounded-lg p-2 shadow-sm w-full lg:w-auto resize-none"
                />
            </div>
            <div className="mb-2">
                <textarea
                    rows="4"
                    cols='50'
                    className="border mt-1 border-gray-600 bg-slate-900 outline-none text-white rounded-lg p-2 shadow-sm w-full lg:w-auto resize-none"
                    placeholder="Write your description here..."
                    id="description"
                    {...register('description')}
                ></textarea>
            </div>
            <div className="space-x-2">
                <FormButton>Add Todo</FormButton>
                <FormButton type="reset" onClick={onCloseModal}>Cancel</FormButton>
            </div>
        </Form>
    );
}
