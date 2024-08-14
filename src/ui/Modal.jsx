import { cloneElement, createContext, useContext, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from 'react-icons/hi2'
import useOutsideClick from "../hooks/useOutsideClick";

const ModalContext = createContext();
function Modal({ children }){
    const [ openName, setOpenName ] = useState('');

    const close = () => setOpenName('');
    const open = setOpenName;

    return <ModalContext.Provider value={{ openName, close, open}}>
        {children}
    </ModalContext.Provider>
}

function Open({ children, opens: opensWindowName }){
    const { open } = useContext(ModalContext);

    return cloneElement(children, {onClick: () => open(opensWindowName)});
}
function Window({ children, name }) {
    const { openName, close } = useContext(ModalContext);
    const ref = useOutsideClick(close);

    if (name !== openName) return null;

    return createPortal(
        <div className="fixed inset-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] backdrop-blur-[4px] z-[1000] transition-all duration-500">
            <div
                ref={ref}
                className="relative w-full max-w-lg mx-auto bg-slate-900 rounded-lg shadow-lg p-8 transition-all duration-500"
            >
                <button
                    onClick={close}
                    className="absolute top-3 right-3 bg-none border-none p-1 rounded-sm transition-all duration-200 hover:bg-slate-600"
                >
                    <svg className="w-5 h-5 text-xl text-gray-500">
                        <HiXMark />
                    </svg>
                </button>
                {cloneElement(children, { onCloseModal: close })}
            </div>
        </div>,
        document.body
    );
}

Modal.Open = Open;
Modal.Window = Window;
export default Modal;