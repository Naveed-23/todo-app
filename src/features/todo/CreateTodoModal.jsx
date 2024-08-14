import Modal from "../../ui/Modal";
import CreateTodoForm from "./CreateTodoForm";

export default function CreateTodoModal() {
    return (
        <Modal>
            <Modal.Open opens='todo-form'>
                <button className="gradient-bg text-slate-100 px-4 py-2 rounded-lg flex justify-center items-center space-x-2 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400">
                    <span className="text-xl md:text-2xl">+</span>
                </button>
            </Modal.Open>
            <Modal.Window name='todo-form'>
                <CreateTodoForm />
            </Modal.Window>
        </Modal>
    );
}