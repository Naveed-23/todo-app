import { Link } from "react-router-dom";
import Heading from "./Heading";
import LogOut from "../features/Authentication/LogOut";
import { useState } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <>
        <div className="bg-gray-950 text-white border-b border-gray-800 shadow-lg">
          <div className="flex justify-between items-center px-6 lg:px-72 py-5">
            <Heading size={'text-2xl md:text-5xl'}>
              <Link to="/">NH TODOS</Link>
            </Heading>
            <div className="lg:hidden">
              <button onClick={toggleMenu} className="text-white focus:outline-none">
                {isOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                )}
              </button>
            </div>
            <div className="hidden lg:flex space-x-4">
              <Link to="/" className="block lg:inline-block py-2 lg:py-0 px-4 lg:px-0">
                Home
              </Link>
              <Link to="/todos" className="block lg:inline-block py-2 lg:py-0 px-4 lg:px-0">
                Todos
              </Link>
              <LogOut className="block lg:inline-block py-2 lg:py-0 px-4 lg:px-0"/>
            </div>
          </div>
          {isOpen && (
            <div className="lg:hidden px-6 pb-3">
              <Link to="/" className="block py-2">
                Home
              </Link>
              <Link to="/todos" className="block py-2">
                Todos
              </Link>
              <LogOut className="block py-2"/>
            </div>
          )}
        </div>
      </>
    );
  }