import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.svg'
import Footer from './Footer'

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col overflow-x-hidden w-full">
            <nav
                className="px-6 md:px-24 py-4 shadow-md bg-white "
               
            >
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    {/* Logo */}
                    <div className="flex justify-center md:justify-start mb-4 md:mb-0">
                        <img src={logo} alt="Logo" className="h-20 w-auto" />
                    </div>

                    {/* Nav links */}
                    <div className="flex items-center gap-4">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `w-full md:w-auto text-center px-4 py-2 rounded 
                                ${isActive
                                    ? 'bg-blue-600 text-white md:bg-transparent md:text-blue-600 md:border-b-2 md:border-blue-600'
                                    : 'text-blue-600 hover:opacity-80 md:hover:bg-transparent hover:bg-blue-100'}`
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                `w-full md:w-auto text-center px-4 py-2 rounded 
                                ${isActive
                                    ? 'bg-blue-600 text-white md:bg-transparent md:text-blue-600 md:border-b-2 md:border-blue-600'
                                    : 'text-blue-600 hover:opacity-80 md:hover:bg-transparent hover:bg-blue-100'}`
                            }
                        >
                            Contact
                        </NavLink>
                    </div>
                </div>
            </nav>

            <main className="p-4 flex-grow">{children}</main>

            <Footer />
        </div>
    )
}

export default Layout
