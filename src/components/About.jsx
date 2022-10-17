import React from 'react';
import Line from '../assets/Line.png'
import Web from '../assets/Picture2.png'
import Design from '../assets/Picture3.png';
import Project from '../assets/Picture4.png';

const About = () => {
return (
    <div id="about">
    <div className='max-w-screen-xl mx-auto flex flex-col items-center justify-center h-full px-1 md:flex-row'>
        <h2 className='mt-40 font-notoSans text-lg font-semibold'>About Me</h2>
    </div>
        <div>
            <img src={Line} alt="line" className='mx-auto mt-6'/>
        </div>
    <div>
        <img src={Web} alt="web" className='mt-20 ml-[-6px] '/>
        <h3 className='flex ml-20 mt-10 font-notoSans font-normal text-primary'>Web Development</h3>
        <p className='flex flex-wrap text-center max-w-screen-sm mt-5 font-notoSans font-normal text-secondary ml-[-60px]'>I first learned web development through Eleven Fifty Academy which allowed me to change careers to tech and land my first role in the tech industry.</p>
        <img src={Design} alt="design" className='ml-[438px] mt-[-400px]'/>
        <h3 className='font-notoSans font-normal text-primary mt-12 ml-3'>UX Design</h3>
        <p className='mt-5 ml-[405px] font-notoSans font-normal text-secondary max-w-screen-sm'>Through the Google UX Design Certificate, I have learned about wireframing, prototyping, and user testing when it comes to UX Design and website development.</p>
        <img src={Project} alt='project' className='ml-auto mt-[-400px]'/>
        <h3 className='mt-6 ml-[900px] font-notoSans font-normal text-primary'>Project Management</h3>
        <p className='ml-[900px] mt-4'>Through my previous positions, I have learned to manage projects effectively and collaborate with various teams throughout an organization.</p>
    </div>
    <div className='max-w-screen-xl mx-auto flex flex-col items-center justify-center h-full px-1 md:flex-row '>
        <h2 className='mt-40 font-notoSans text-lg font-semibold'>Timeline</h2>
    </div>
        <div>
            <img src={Line} alt="line" className='mx-auto mt-6'/>
        </div>
<div class="flex">
    <div class="block rounded-lg shadow-xl bg-white max-w-sm text-center border border-black mt-10">
    <div class="py-3 px-6 border-b border-gray-300 font-notoSans font-bold ">
      University of Indianapolis
    </div>
    <div class="p-6">
      <h5 class="text-md font-semibold font-notoSans text-primary mb-2">2013-2017</h5>
      <p class="text-secondary font-medium text-sm mb-4">
        Bachelor's in History and Poilitical Science
      </p>
    </div>
     </div>
</div>
<div class="flex justify-center">
    <div class="block rounded-lg shadow-xl bg-white max-w-sm text-center border border-black mt-[-167px]">
    <div class="py-3 px-6 border-b border-gray-300 font-notoSans font-bold ">
      Gleaners Food Bank
    </div>
    <div class="p-6">
      <h5 class="text-md font-semibold font-notoSans text-primary mb-2">2017-2019</h5>
      <p class="text-secondary font-medium text-sm mb-4">
        Program Coordinator for Produce Program
      </p>
    </div>
     </div>
</div>
<div class="flex">
    <div class="block rounded-lg shadow-xl bg-white max-w-sm text-center border border-black ml-[890px] mt-[-167px]">
    <div class="py-3 px-6 border-b border-gray-300 font-notoSans font-bold ">
      National FFA
    </div>
    <div class="p-6">
      <h5 class="text-md font-semibold font-notoSans text-primary mb-2">2019-2021</h5>
      <p class="text-secondary font-medium text-sm mb-4">
        Program Manger for Living to Serve Team
      </p>
    </div>
     </div>
</div>

<div class="flex">
    <div class="block rounded-lg shadow-xl bg-white max-w-sm text-center border border-black ml-[675px] mt-20 ">
    <div class="py-3 px-6 border-b border-gray-300 font-notoSans font-bold ">
      Infosys Limited
    </div>
    <div class="p-6">
      <h5 class="text-md font-semibold font-notoSans text-primary mb-2">2021-Present</h5>
      <p class="text-secondary font-medium text-sm mb-4">
        Associate Software Engineer with Toyota
      </p>
    </div>
     </div>
</div>
<div class="flex">
    <div class="block rounded-lg shadow-xl bg-white max-w-sm text-center border border-black ml-[242px] mt-[-167px]">
    <div class="py-3 px-6 border-b border-gray-300 font-notoSans font-bold ">
      Roncalli High School
    </div>
    <div class="p-6">
      <h5 class="text-md font-semibold font-notoSans text-primary mb-2">2017-Present</h5>
      <p class="text-secondary font-medium text-sm mb-4">
        Assistant Boy's Cross Country Coach
      </p>
    </div>
     </div>
</div>
<hr class="my-8 h-px bg-gray-300 border-0 dark:bg-gray-700 mt-40"></hr>

</div>
)
}

export default About;