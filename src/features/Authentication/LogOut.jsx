import { Link } from "react-router-dom";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Heading from "../../ui/Heading";
import Modal from "../../ui/Modal";
import { useAuth } from "./AuthProvider";

export default function LogOut({...props}){
    const { logout } = useAuth();

    return <div {...props}>
    <Modal>
    <Modal.Open opens='logout'>
        <button className="gradient-text transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400">Logout</button>
    </Modal.Open>
    <Modal.Window name='logout'>
        <ConfirmDelete resourceName={'Log Out'} onConfirm={logout} />
    </Modal.Window>
</Modal>
    </div>
}