import { FaWhatsapp } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'

const Footer = () => {
    return (
        <footer className="w-full flex flex-col md:flex-row justify-between items-center gap-2 px-6 md:px-24 py-4 bg-teal-700 text-white text-sm">
            <div>© 2025. All Rights Reserved.</div>

            <div className="flex items-center space-x-4">
                <a
                    href="mailto:yourmail@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-200"
                >
                    <IoMdMail className="w-5 h-5" />
                </a>
                <a
                    href="https://wa.me/yourwhatsappnumber"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                >
                    <FaWhatsapp
                        className="w-5 h-5" />
                </a>
            </div>
        </footer>
    )
}

export default Footer
