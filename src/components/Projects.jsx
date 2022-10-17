import React from 'react';
import Line from '../assets/Line.png';
import Pow from '../assets/54-541428_comic-pow-png-comic-book-pow-png-transparent.png';
import JB from '../assets/logo_200x200.png';
import Survey from '../assets/survey.jpg';
import Fletcher from '../assets/Fletcher.png';
import CYPA from '../assets/Create Your Path Academy-1.jpg';
import construction from '../assets/UnderConstruction.png';

const Projects = () => {
 return (
    <div id='projects'>
       <div>
            <h2 className='mt-28 font-notoSans text-lg font-semibold'>Projects</h2>
        </div>
        <div>
            <img src={Line} alt="line" className='mx-auto mt-6'/>
        </div>
    <div className="flex">
        <div className="rounded-lg shadow-lg bg-white max-w-sm mt-20">
            <a href="https://comix-app-client.herokuapp.com/" target= '_blank'>
        <img className="rounded-t-lg hover:scale-110 transition duration-200 ease-in-out" src={Pow} alt="Pow"/>
            </a>
        <div className="p-6">
        <h5 className="text-secondary text-lg font-semibold font-notoSans mb-2">Comix API Project</h5>
        <p className="text-secondary text-sm mb-4 mt-4">
        My first project using API's with ReactJs. This app allows customers to sign up or log in to search for comics, edit comics, delete comics, and read comics of their choice.
        </p>
        <a href='https://comix-app-client.herokuapp.com/' target= '_blank'type="button" className=" inline-block px-6 py-2.5 bg-primary font-notoSans text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out  border border-black">See Project
        </a>
        </div>
        </div>
    </div>
    <div className="flex justify-center mt-[-614px]">
        <div className="rounded-lg shadow-lg bg-white max-w-sm h-[533px] mt-20">
            <a href="https://jbhomeremodelingclient.herokuapp.com/" target= '_blank'>
        <img className="rounded-t-lg hover:scale-110 transition duration-200 ease-in-out w-full" src={JB} alt="JB"/>
            </a>
        <div className="p-6">
        <h5 className="text-secondary text-lg font-semibold font-notoSans mt-[-86px] ">JB Home Remodeling</h5>
        <p className="text-secondary text-sm mb-4 mt-4">
        My Final project at Eleven Fifty Academy is where I built a construction management website that uses ReactJs, TypeScript, and Ant Design.
        </p>
        <a href='https://jbhomeremodelingclient.herokuapp.com/' target= '_blank' type="button" className=" inline-block px-6 py-2.5 bg-primary font-notoSans text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out  border border-black mt-5">See Project
        </a>
        </div>
        </div>
    </div>
    <div className="flex justify-end mt-[-614px]">
        <div className="rounded-lg shadow-lg bg-white max-w-sm h-[533px] mt-20">
            <a href="https://atlas-pilot-client.herokuapp.com/" target= '_blank'>
        <img className="rounded-t-lg hover:scale-110 transition duration-200 ease-in-out" src={Survey} alt="Survey"/>
            </a>
        <div className="p-6">
        <h5 className="text-secondary text-lg font-semibold font-notoSans mt-10 ">RDC Anniversary </h5>
        <p className="text-secondary text-sm mb-4 mt-4">
        This project I built with colleagues from Eleven Fifty Academy using ReactJs and ChartJs. Users can preview and vote on survey questions that admins create.
        </p>
        <a href='https://atlas-pilot-client.herokuapp.com/' target= '_blank' type="button" className=" inline-block px-6 py-2.5 bg-primary font-notoSans text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out  border border-black mt-6">See Project
        </a>
        </div>
        </div>
    </div>
    <div className="flex">
        <div className="rounded-lg shadow-lg bg-white max-w-sm h-[533px] mt-20">
            <a href="https://www.figma.com/proto/lPjw7WYALA6tDx5uvDhdMi/Fletcher's-App?page-id=289%3A9&node-id=289%3A10&starting-point-node-id=289%3A10" target= '_blank'>
        <img className="rounded-t-lg hover:scale-110 transition duration-200 ease-in-out w-full h-64" src={Fletcher} alt="Survey"/>
            </a>
        <div className="p-6">
        <h5 className="text-secondary text-lg font-semibold font-notoSans mt-10 ">Fletcher's Garden Bar</h5>
        <p className="text-secondary text-sm mb-4 mt-4">
        As part of the Google UX Design course, Fletcher's Garden Bar is my first designed mobile application using Figma.
        </p>
        <a href="https://www.figma.com/proto/lPjw7WYALA6tDx5uvDhdMi/Fletcher's-App?page-id=289%3A9&node-id=289%3A10&starting-point-node-id=289%3A10" target= '_blank' type="button" className=" inline-block px-6 py-2.5 bg-primary font-notoSans text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out  border border-black mt-6">See Project
        </a>
        </div>
        </div>
    </div>
    <div className="flex justify-center mt-[-612px]">
        <div className="rounded-lg shadow-lg bg-white max-w-sm h-[533px] mt-20">
            <a href="https://xd.adobe.com/view/01a5540a-271b-45e0-ae32-7031d69675c2-54f6/" target= '_blank'>
        <img className="rounded-t-lg hover:scale-110 transition duration-200 ease-in-out w-96 h-64" src={CYPA} alt="CYPA"/>
            </a>
        <div className="p-6">
        <h4 className="text-secondary text-lg font-semibold font-notoSans mt-4 ">Create Your Path Academy</h4>
        <p className="text-secondary text-sm mb-4 mt-2">
        This project I built with colleagues from Eleven Fifty Academy using ReactJs and ChartJs. Users can preview and vote on survey questions that admins create.
        </p>
        <a href='https://xd.adobe.com/view/01a5540a-271b-45e0-ae32-7031d69675c2-54f6/' target= '_blank' type="button" className=" inline-block px-6 py-2.5 bg-primary font-notoSans text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out  border border-black mt-6">See Project
        </a>
        </div>
        </div>
    </div>
    <div className="flex justify-end mt-[-612px]">
        <div className="rounded-lg shadow-lg bg-white max-w-sm h-[533px] mt-20">
            <a href="#">
        <img className="rounded-t-lg hover:scale-110 transition duration-200 ease-in-out h-64" src={construction} alt="construction"/>
            </a>
        <div className="p-6">
        <h5 className="text-secondary text-lg font-semibold font-notoSans mt-10 ">Eloise & George</h5>
        <p className="text-secondary text-sm mb-4 mt-4">
        This project is currently under construction and should be finished by the end of the year 2022. Come back then to see how this project turns out!
        </p>
        <a href='#' target= '_blank' type="button" className=" inline-block px-6 py-2.5 bg-primary font-notoSans text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out  border border-black mt-7">See Project
        </a>
        </div>
        </div>
    </div>
    <hr class="my-8 h-px bg-gray-300 border-0 dark:bg-gray-700 mt-32"></hr>

    </div>
 )
}

export default Projects;