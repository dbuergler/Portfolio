import {React, useEffect, useRef} from 'react';
import Line from '../assets/Line.png';
import {faTwitter, faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ns5txjp', 'template_sydxzfz', form.current, 'P533h3gJjEeFy3q2W')
          .then((result) => {
              toast.success("Successfully submitted message. Talk to you soon!", result.status, result.text )
          }, (error) => {
              toast.error('Form is not submitted. Please fill in all fields and try again', error.status, error.text)
          });
          e.target.reset();
      };

      
        


    //   const showMessage = () => {
    //     toast.success('You have successfully sent me an email. I look forward to connect with you soon!', {
    //         position: toast.POSITION.TOP_RIGHT,
    //         className: 'font-NotoSans bg-white text-primary'
    //     })
    //   }

    return (
        <div id='contact-me'>
            <div name='contact'>
                <div className='flex w-full min-h-screen justify-center items-center'>
                    <div className=' flex flex-col space-y-6 bg-primary w-full max-w-4xl p-8 rounded-xl shadow-xl text-white'>
                        <div className='flex flex-col space-y-8 justify-between'>
                            <div>
                                <h1 className='font-bold font-notoSans text-lg tracking-wide'>Let's Connect</h1>
                                <p className='font-normal font-notoSans pt-2 text-white-100 text-sm'>Submit the form below to get in contact with me.</p>
                            </div>
                            <div>
                                <div className='inline-flex space-x-2 items-center'>
                                <a href='https://twitter.com/dainethemaine' target='_blank' className='twitter hover:animate-pulse'>
                                <FontAwesomeIcon icon={faTwitter} size='2x' className='px-2'/>
                                </a>
                                <a href='https://linkedin.com/in/danielbuergler/' className='linkedin hover:animate-pulse' target="_blank">
                                <FontAwesomeIcon icon={faLinkedin} size='2x'/>
                                </a>
                                <a href='https://github.com/dbuergler' className='github hover:animate-pulse' target='_blank'>
                                <FontAwesomeIcon icon={faGithub} size='2x' className='px-2'/>
                                </a>
                                </div>
                            </div>
                            <div className='bg-white rounded-xl shadow-xl p-8'>
                                    <form ref={form} onSubmit={sendEmail} className='flex flex-col space-y-5'>
                                        <div>
                                            <input type='text' name='from_name' className='form-control font-notoSans w-4/5 rounded-md px-4 py-2 text-secondary' placeholder='Enter your name' required='true' />
                                        </div>
                                        <div>
                                            <input type='email' name='reply_to' className='form-control font-notoSans w-4/5 rounded-md px-4 py-2 text-secondary' placeholder='Enter your email address' required='true' />
                                        </div>
                                        <div>
                                            <input type='text' name='from_subject' className='form-control font-notoSans w-4/5 rounded-md px-4 py-2 text-secondary' placeholder='Enter a subject' required='true' />
                                        </div>
                                        <div>
                                            <textarea type='text' name= 'message' className='form-control font-notoSans w-4/5 rounded-md px-4 py-2 text-secondary' rows='4' placeholder='Message' required='true' />
                                        </div>
                                        <ToastContainer theme='dark' className='font-notoSans'/>
                                        <button type='submit' className="text-white bg-primary px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 border border-black font-notoSans">
                                        Let's talk!
                                        </button>
                                    </form>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        </div>

    )
}

export default Contact;
