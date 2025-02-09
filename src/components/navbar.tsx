export default function Navbar() {
    return (
        <nav className="bg-base-100 shadow-sm">
            <div className="max-w-[1300px] mx-auto navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-md bg-blue-400 dropdown-content font-bold text-slate-50  rounded-2xl z-1 mt-3 w-52 p-2 shadow">
                            <li className="hover:bg-blue-800 rounded-lg"><a>Home</a></li>
                            <li>
                                <a className="hover:bg-blue-800 rounded-lg">Features</a>
                                <ul className="p-2">
                                    <li className="hover:bg-blue-800 rounded-lg"><a>Premium</a></li>
                                    <li className="hover:bg-blue-800 rounded-lg"><a>Free</a></li>
                                </ul>
                            </li>
                            <li className="hover:bg-blue-800 rounded-lg"><a>Benefits</a></li>
                            <li className="hover:bg-blue-800 rounded-lg"><a href="">Contact Us</a></li>
                        </ul>
                    </div>
                    <button className="hover:cursor-pointer hover:border-3 px-2 lg:px-6 rounded-3xl py-1 font-bold border-blue-400 btn-ghost text-xl">emitly</button>
                </div>
                <div className="navbar-center text-slate-700 hidden lg:flex">
                    <ul className="menu menu-horizontal text-lg px-1">
                        <li className="hover:underline decoration-2 decoration-blue-400"><a>Home</a></li>
                        <li>
                            <details>
                                <summary className="hover:underline decoration-2 decoration-blue-400">Features</summary>
                                <ul className="p-2 bg-blue-400 rounded-lg text-blue-50">
                                    <li className="hover:bg-blue-800 rounded"><a>Premium</a></li>
                                    <li className="hover:bg-blue-800 rounded"><a>Free</a></li>
                                </ul>
                            </details>
                        </li>
                        <li className="hover:underline decoration-2 decoration-blue-400"><a>Benefits</a></li>
                        <li className="hover:underline decoration-2 decoration-blue-400"><a href="">Contact Us</a></li>
                    </ul>
                </div>
                <div className="navbar-end flex gap-2 lg:gap-5">
                    <button className="hover:cursor-pointer text-slate-800 hover:underline underline-offset-3 decoration-2 decoration-blue-400 rounded-4xl px-2 lg:px-6 py-1 lg:py-2 bg-blue-50  font-bold">Sign up</button>
                    <button className="hover:cursor-pointer hover:bg-blue-100 hover:text-slate-800 py-1 lg:py-2 text-sm px-2 lg:px-6 font-bold bg-blue-400 text-blue-50 rounded-2xl lg:rounded-3xl">Get Started</button>
                </div>
            </div>
        </nav>
    )
}