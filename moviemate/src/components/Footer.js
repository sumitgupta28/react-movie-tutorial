import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-gray-800 shadow-xs border-b border-gray-200 dark:border-gray-700 m-4">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">© 2030 <Link to="/" className="hover:underline">MovieMate™</Link>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="#" target="_blank" className="hover:underline me-4 md:me-6">Instagram</a>
                    </li>
                    <li>
                        <a href="#" target="_blank" className="hover:underline me-4 md:me-6">Linked In</a>
                    </li>
                    <li>
                        <a href="#" target="_blank" className="hover:underline me-4 md:me-6">Github</a>
                    </li>
                    <li>
                        <a href="#" target="_blank" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
        </footer>


    )
}
