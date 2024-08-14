import ConfirmDelete from "../../ui/ConfirmDelete";
import Heading from "../../ui/Heading";
import Modal from "../../ui/Modal";
import { useAuth } from "../Authentication/AuthProvider";

export default function LogOut(){
    const { logout } = useAuth();

    return <Modal>
    <Modal.Open opens='todo-form'>
    <button onClick={logout} className="gradient-bg text-slate-100 px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400">
    <Heading>Logout</Heading>
        </button>
    </Modal.Open>
    <Modal.Window name='todo-form'>
        <ConfirmDelete />
    </Modal.Window>
</Modal>
}