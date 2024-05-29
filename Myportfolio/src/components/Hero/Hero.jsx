import React, { useEffect } from "react";
import "./Hero.css";
import { profile1 } from "../../assets/images";
import { myphoto } from "../../assets/images";
import Points from './Points/Points';
import AOS from 'aos';
import 'aos/dist/aos.css'

export default function Hero() {
  useEffect(()=>{
    AOS.init({duration:2000});
  },[])
  return (
    <section id="home">
      <div className="stroke_text intro_text">HELLO</div>
      <div className="container full_height">
        <div className="info_container">
          <div className="user_profile" data-aos='zoom-in'>
            <div className="photo_container">
              <img src={myphoto} alt="" />
            </div>
          </div>
          <div className="details_container" data-aos="fade-left">
            <h3>
              Hello ther! I'm{" "}
              <span className="color_primary"> Mohamed Amine Hamdi</span>{" "}
            </h3>
            <h1 className="title">
              <span className="text_gradient">Fullstack Developer</span>
            </h1>
            <h3>Working remotely from Tunisia</h3>
            <p className="text_muted description">
            Software engineer with a robust foundation in
            Computer Engineering demonstrating a proven track record of
            conquering intricate technical challenges Possesses a solid grasp of software
            engineering principles and maintains a fervent
            drive for innovation
            </p>
            <Points/>
          </div>
        </div>
      </div>
    </section>
  );
}
