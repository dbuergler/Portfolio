import React from 'react';
import {faBars} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
    const navMenu = [
        {
            name: "Home",
            link: "#",
        },
        {
            name: "About",
            link: "#about",
        },
        {
            name: "Skills",
            link: "#skills",
        },
        {
            name: "Projects",
            link: "#projects",
        },
        
    ];

    return (
        <div className="flex items-center justify-between px-24">
            <div className='flex gap-x-[100px]'>
            <div className="hidden items-center px-20 gap-x-[142px] font-notoSans font-semibold text-secondary/80 lg:flex lg:text-base xl:text-md ">
                {navMenu.map((menu, i) => (
                <a href={menu.link} key={i} className="hover:text-primary">
                {menu.name}
                </a>
          ))}
                <a href={"/#contact-me"} className="rounded-md bg-primary px-6 py-1 font-notoSans font-semibold text-white lg:text-base border border-black shadow-lg hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
            Contact
          </a>
        </div>
        </div>
    </div>
    )
}

export default Navbar;