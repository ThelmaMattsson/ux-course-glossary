import { Link } from "react-router-dom";

export function Navbar() {
    return (
        <div className="pt-12 w-64 h-screen pt-3 pb-3 flex bg-slate-900 justify-center text-white">
            <nav className="flex flex-col w-100 text-center">
                    <Link to="/" className="bg-slate-600 hover:bg-slate-400 cursor-pointer p-3 border-1 border-slate-900">Home</Link>
                    <Link to="/glossary" className="bg-slate-600 hover:bg-slate-400 cursor-pointer p-3 border-1 border-slate-900">Glossary</Link>
                    <Link to="/glostest" className="bg-slate-600 hover:bg-slate-400 cursor-pointer p-3 border-1 border-slate-900">Glosförhör</Link>
            </nav>
        </div>
    )
}