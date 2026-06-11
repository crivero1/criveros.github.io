import { useState } from 'react';

export default function Navbar () {
    const [hideMenu, setHideMenu] = useState(false);
    return (
    <>
        {/* <nav className="bg-neutral-secondary-soft fixed w-full z-20 top-0 start-0 border-b border-default"> */}
        <nav className='fixed w-full z-20 top-0 start-0 bg-gray-1 mx-0'>
            <div className="flex flex-wrap justify-end mx-0 p-0">
                <button  
                    className="inline-flex p-2 w-10 h-10 justify-center text-sm" 
                    onClick={() => {
                        setHideMenu(!hideMenu);
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" style={{strokeLinecap:"round", strokeLinejoin:"round"}}/>
                    </svg>
                </button>
            </div>
        </nav>
        <div 
            className="
            fixed z-20 top-10
            bg-gray-1
            justify-self-end"
            // md:w-2/16 xl:w-2/16
            >
                <ul className={'bg-gray-1 w-3/16 flex flex-col font-medium m-2 pt-0 space-y-2' + (hideMenu ? ' hidden' : '')}>
                    <li>
                        <a href="/" className="block py-2 px-3 hover:text-white bg-brand rounded ">Home</a>
                    </li>
                    <li>
                        <a href="/publications" className="block py-2 px-3 text-heading rounded hover:text-white ">Publications</a>
                    </li>
                    <li>
                        <a href="/students" className="block py-2 px-3 text-heading rounded hover:text-white ">Students</a>
                    </li>
                    <li>
                        <a href="/projects" className="block py-2 px-3 text-heading rounded hover:text-white ">Projects</a>
                    </li>
                    <li>
                        <a href="/courses" className="block py-2 px-3 text-heading rounded hover:text-white ">Courses</a>
                    </li>
                    <li>
                        <a href="/talks" className="block py-2 pb-4 px-3 text-heading rounded hover:text-white ">Talks</a>
                    </li>
                </ul>
            </div>
    </>
    )
}