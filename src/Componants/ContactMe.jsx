import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { ChevronsRight } from 'feather-icons-react/build/IconComponents';
import { Alert, Snackbar } from '@mui/material';
const ContactMe = () => {
    const form = useRef();
    const [isSuccess, setIsSuccess] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault();
        // console.log(form.current);
        const formData = new FormData(e.target);
        emailjs.sendForm('service_kwkp1ur', 'template_td713vp', form.current, '6XPwsCk_hhQysxr9e')
            .then((result) => {
                setIsSuccess(true);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className='pt-[120px]'>
            {
                isSuccess && <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'right'}} open={isSuccess} autoHideDuration={6000} onClose={()=>setIsSuccess(false)}>
                    <Alert severity="success" color="success">
                        Message sent successfully!
                    </Alert>
                </Snackbar>
            }
            <div className='text-center mb-[40px]'>
                <h1 className='font-bold uppercase m-0 leading-[40px]'>Get in Touch</h1>
                <p className='text-base text-primary font-medium'>Let's discuss your project or just say hello.</p>
            </div>
            <div className='flex items-center justify-center p-4 border mb-10'>
                <div className='w-1/2 rounded-xl'>
                    <form ref={form} onSubmit={sendEmail} className='space-y-4 text-sm'>
                        <div>
                            <input type="text" name="user_name" required placeholder='Your name' className='py-3.5 outline-none focus:border-gray-500 w-full rounded-xl px-4 border border-gray-300' />
                        </div>
                        <div>
                            <input type="email" name="user_email" required placeholder='Your email' className='py-3.5 outline-none focus:border-gray-500 w-full rounded-xl px-4 border border-gray-300' />
                        </div>
                        <div>
                            <input type="number" name="user_phone" placeholder='Your phone number' className='py-3.5 outline-none focus:border-gray-500 w-full rounded-xl px-4 border border-gray-300' />
                        </div>
                        <div>
                            <textarea name="message" required placeholder='Your message' className='py-3.5 outline-none focus:border-gray-500 block w-full rounded-xl px-4 border border-gray-300' />
                        </div>
                        <button className='uppercase btn hover:shadow-lg flex items-center' type="submit">
                            Send message
                            <div className="btn-bg"></div>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactMe