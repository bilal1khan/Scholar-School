import { useState } from 'react';
import logo from "../assets/logo.jpeg";
import { useNavigate } from 'react-router-dom';



export const Nav = () => {

    const navigate = useNavigate();
    // State to manage the visibility of the menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle the menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
            <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a onClick={()=>{
                        navigate('/');
                    }} className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={logo} className=" h-10 md:h-14" alt="" />

                        <div className="flex flex-col">
                            <span className="text-left text-xl font-semibold whitespace-nowrap dark:text-white">Scholar</span>
                            <div className="flex flex-col">
                                <span className="text-left text-xs font-semibold whitespace-nowrap dark:text-white">International Islamic School</span>
                                <span className="text-left text-xs font-semibold whitespace-nowrap dark:text-white">Hingoli</span>
                            </div>
                        </div>
                    </a>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button
                            onClick={toggleMenu}  // Toggle menu on button click
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-sticky"
                            aria-expanded={isMenuOpen ? "true" : "false"} // Update aria-expanded attribute based on menu state
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className={`items-center  justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? "block" : "hidden"}`} id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a onClick={()=>{
                                    navigate('/');
                                }} className="block py-2 px-3 cursor-pointer text-white bg-blue-700 rounded md:bg-transparent md:text-white md:p-0 md:dark:text-white" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a onClick={()=>{
                                    navigate('/');
                                }} className="block py-2 px-3 cursor-pointer text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Admission</a>
                            </li>
                            <li>
                                <a onClick={()=>{
                                    navigate('/');
                                }} className="block py-2 px-3 cursor-pointer text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Academic</a>
                            </li>
                            <li>
                                <a onClick={()=>{
                                    navigate('/');
                                }} className="block py-2 px-3 cursor-pointer text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    );
};












