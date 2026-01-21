import React from 'react'
import { Link } from "react-router-dom";
import BackupImage from "../assets/images/backup.png";

export default function Card() {
    return (
        <div className="bg-white dark:bg-gray-800 block max-w-sm p-6 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm space-y-4">
            <Link to="/">
                <img className="rounded-lg" src={BackupImage} alt="" />
            </Link>
            <Link to="/">
                <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Streamlining your design process today.</h5>
            </Link>
            <p className="mb-6 text-gray-700 dark:text-gray-300">In today’s fast-paced digital landscape, fostering seamless collaboration among Developers and IT Operations.</p>
            <Link to="/" className="inline-flex items-center text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 box-border border border-gray-300 dark:border-gray-600 hover:bg-gray-300 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 shadow-sm font-medium leading-5 rounded-lg text-sm px-4 py-2.5 focus:outline-none">
                Read more
                <svg className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" /></svg>
            </Link>
        </div>
    )
}
