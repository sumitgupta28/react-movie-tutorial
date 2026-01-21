import { Link } from "react-router-dom";


export default function Footer() {
    return (


        <footer className="bg-neutral-primary-soft shadow-xs border-b border-default m-4">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-body sm:text-center">© 2030 <Link to="/" className="hover:underline">MovieMate™</Link>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-body sm:mt-0">
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
