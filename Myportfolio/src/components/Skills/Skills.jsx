import React, { useEffect } from 'react'
import './Skills.css'
import {skills} from '../../data'
import AOS from 'aos';
import 'aos/dist/aos.css'
export default function Skills() {
  useEffect(()=>{
    AOS.init({duration:2000});
  },[])
  return (
    <section id='skills'>
      <div className="container2 fullheight">
        <h1 className="title">
          My <span className="text_gradient"> Skills</span>
          <div className="skill_container" data-aos="fade-down">
            {
              skills.map((list,index)=>(
                <div className="skill_box_container" key={index}>
                  <h3 className="category text_gradient">
                    {list.category}
                  </h3>
                  {
                    list.data.map((item,index)=>(
                      <div className="box" key={index}>
                        <div className="hover_fill icon_container">
                          {item.icon}
                        </div>
                        <p className="name">{item.skill}</p>
                        <div className="progress_container">
                          <div className="progress"  style={{width:item.progress +'%'}}></div>
                        </div>
                        <p className="percentage">{item.progress}%</p>
                      </div>
                    ))
                  }
                </div>
              ))
            }
          </div>
        </h1>
      </div>
    </section>
  )
}
