import React, { useEffect, useState } from 'react'
import './Contact.css'
import {contactInfo} from '../../data'
import emailjs from 'emailjs-com'
import { Bounce, ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css'
export default function Contact() {
  useEffect(()=>{
    AOS.init({duration:2000});
  },[])
  const [formData,setFormData] = useState({
    firstName : '',
    lastName : '',
    email : '',
    phone : '',
    message : '',
  })
  const handleChange = (e) =>{
    const {name,value} = e.target;
    setFormData((preveData)=>({
      ...preveData,
      [name] :value,
    }))
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
  const {firstName,lastName,email,phone,message} =formData;
  if (!firstName || !lastName || !email  ||!phone||!message){
    toast.error('All fields are required. Please fill in all fields.', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
    return;
  }
  const templateParams = {
    firstName : formData.firstName,
    lastName : formData.lastName,
    email : formData.email,
    phone : formData.phone,
    message : formData.message,
  }
  emailjs.send(
    'service_w92bnma', // Replace with your EmailJS service ID
    'template_jgm8ccd', // Replace with your EmailJS template ID
    templateParams,
    '2JT9pfqnQz0gLXMNN' // Replace with your EmailJS user ID
  )
  .then((response) => {
    console.log('SUCCESS!', response.status, response.text);
    toast.success('Message sent successfully!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme : 'colored'
    });
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    });
  })
  .catch((error) => {
    console.log('FAILED...', error);
    toast.error('Failed to send message. Please try again later.', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme : 'colored'
    });
  });
}

  return (
    <section id='contact'>
      
      <div className="container full_height">
        <h3 className="sub_title">Got Some Question ?</h3>
        <h1 className="title">
          <span className="text_gradient">Contact Me</span>
        </h1>
        <form  className="contact_form" onSubmit={handleSubmit} data-aos="zoom-out">
          <div className="column">
            <h3 className="sub_title color_primary">Contact Info</h3>
            <p>Fill the form to get in touch with me</p>
            <div className="contact_info_container">
              {
                contactInfo.map((list,index)=>(
                  <div className="contact_info" key={index}>
                    <div className="icon_container">
                      {list.icon}
                    </div>
                    <p>{list.value}</p>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="column">
            <div className="form_top">
                <h3 className="sub_title color_primary"> Keep In Touch</h3>
                <p>I craft beautifully simple designs an code with passion. It's as simple as that</p>
            </div>
            

            <div className="form_middle">
              <div className="row">
                <input type="text" name="firstName" placeholder='First name' className='control' value={formData.firstName} onChange={handleChange}/>
                <input type="text" name="lastName" placeholder='Last name' className='control' value={formData.lastName} onChange={handleChange}/>
              </div>
              <div className="row">
                <input type="email" name="email" placeholder='Email address' className='control' value={formData.email} onChange={handleChange}/>
                <input type="tel" name="phone" placeholder='Phone number' className='control' value={formData.phone} onChange={handleChange}/>
              </div>
              <textarea name="message" id="" cols={30} rows={10} placeholder='Message' className='control' value={formData.message} onChange={handleChange}></textarea>
            </div>

            <div className="form_bottom">
              <button type="submit" className="btn btn_primary">Send Message</button>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer/>
    </section>
  )
}
