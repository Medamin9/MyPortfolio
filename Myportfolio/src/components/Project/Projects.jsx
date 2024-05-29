import React, { useEffect } from 'react'
import './Projects.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination,Autoplay } from 'swiper/modules'
import "swiper/css"
import "swiper/css/pagination"
import {projects} from '../../data'
import { FaExternalLinkAlt } from 'react-icons/fa'

import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Projects() {
  useEffect(()=>{
    AOS.init({duration:2000});
  },[])
  return (
    <section id='projects'>
      <div className="container">
        <h1 className="title">
          My <span className="text_gradient">Projects</span>
          <Swiper
          className='projects_container'
          spaceBetween={40}
          autoplay={{
            delay:4000,
            disableOnInteraction:false,
            pauseOnMoseEnter:true
          }}
          loop={true}
          pagination={{clickable:true}}
          modules={[Pagination,Autoplay]}
          slidesPerView={1}
          breakpoints={{
            700:{
              slidesPerView:2
            },
            900:{
              slidesPerView:3
            }
          }}
          data-aos="zoom-out-up"
          >
          {
            projects.map((project,index)=>(
              <SwiperSlide className='project' key={index}>
                <a href={project.url} target='_blank' className="image_container">
                  <img src={project.image} alt=""  />
                </a>
                <div className="details">
                  <h2 className="name">{project.name}</h2>
                  <p className='text_muted description'>{project.description}</p>
                </div>
                <a href={project.url} target='_blank' className="icon_container">
                  <FaExternalLinkAlt className='link_icon'/>
                </a>
              </SwiperSlide>
            ))
          }


          </Swiper>
        </h1>
      </div>
    </section>
  )
}
