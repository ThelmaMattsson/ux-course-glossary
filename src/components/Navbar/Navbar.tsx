import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { to: "/", label: "Home" },
        { to: "/glossary", label: "Glossary" },
        { to: "/glostest", label: "Glosförhör" },
    ]

    return (
        <>
            <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-primary text-white flex items-center justify-between p-4 border-b border-bg">
                <h1 className="text-white text-2xl font-bold">Glosboken</h1>
                <button className="text-2xl w-10 h-10 flex items-center justify-center bg-white hover:bg-primary-hover rounded cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                    <FontAwesomeIcon icon={faBars} className="text-primary "/>
                </button>
            </div>

            {isOpen && (
                <div className="md:hidden fixed top-18 left-0 right-0 z-40 bg-primary text-white font-bold border-b border-bg animate-in fade-in">
                    <nav className="flex flex-col">
                        {navLinks.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                className="bg-primary hover:bg-primary-hover px-6 py-4 border-b border-bg transition-colors"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}

            <nav className="hidden md:flex md:flex-col md:fixed md:left-0 md:top-0 md:min-h-screen md:w-64 md:bg-primary md:text-white md:border-r md:border-bg"> 
                <div className="p-6 border-b border-bg">
                    <h1 className="text-xl font-bold">Glosboken</h1>
                </div>
                <div className="flex flex-col mt-6">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.to}
                            to={link.to}
                            className="px-6 py-4 hover:bg-slate-700 transition-colors border-l-4 border-transparent hover:border-slate-400 hover:text-slate-300"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </nav>
        </>
    )
}