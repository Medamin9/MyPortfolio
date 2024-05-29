import React, { useEffect } from 'react'
import './Footer.css'
import Logo from '../../commons/Logo/Logo';
import Social from '../../commons/SocialHandles/Social';
import {footer} from  '../../data'
import AOS from 'aos';
import 'aos/dist/aos.css'
export default function Footer() {
  useEffect(()=>{
    AOS.init({duration:2000});
  },[])
  return (
    <footer id='footer'>
      <form className="newsletter" data-aos="fade-right">
        <h3 className="sub_title">Get weekly update</h3>
        <h2 className="title">Let walk Together</h2>
        <div className="control_container">
          <input type="email" placeholder='Enter your email adress' className="control" />
          <button className="btn" type='button'>Subscribe</button>
        </div>
      </form>
      <div className="container">
        <div className="row">
          <div className="column">
            <Logo/>
            <p className="text_muted description">
            Software engineer open to new challenges
            </p>
            <Social/>
          </div>
          {
            footer.map((list,index)=>(
              <div className="column" key={index}>
                <h3 className="group_name">{list.group}</h3>
                <div className="routes_container">
                  {
                    list.routes.map((route,i)=>(
                      <a href={`#${route.name.toLowerCase()}`} className="route_item" key={i}>
                        {
                          route.icon ? <div className="icon_container">{route.icon}</div> : ""
                        }
                        <p className="name">{route.name}</p>
                      </a>
                    ))
                  }
                </div>
              </div>
            ))
          }
        </div>
        <article className="copyright_container">
          <h3>Copy right &copy; All rigth reserved -| 2024  </h3>
          <p className="text_muted"></p>
        </article>
      </div>
       
    </footer>
  )
}
