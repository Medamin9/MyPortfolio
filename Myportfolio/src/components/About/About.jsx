import React, { useEffect } from "react";
import "./About.css";
import { myphoto2 } from "../../assets/images";
import AOS from 'aos';
import 'aos/dist/aos.css'
export default function About() {
  useEffect(()=>{
    AOS.init({duration:2000});
  },[])
  return (
    <section id="about">
      <div className="container">
        <div className="photo_container" data-aos="fade-right">
          <div className="primary_effect picture" data-aos="fade-right">
  
            <img src={myphoto2} alt="" />
          </div>
        </div>
        <div className="details" data-aos="fade-left">
          <h3>
            <span className="text_gradient">About </span>Me
          </h3>
          <h1>
            I am <span className="color_primary">Mohamed Amine Hamdi</span>{" "}
          </h1>
          <h2>An Enthusiastic Fullstack Developer</h2>
          <p className="text_muted description">
            A software engineer is a professional responsible for designing,
            developing, and maintaining software systems. They possess strong
            problem-solving skills and are proficient in various programming
            languages and development tools. Their duties often include
            analyzing user needs, designing software solutions, writing code,
            testing and debugging applications, and ensuring software quality
            and reliability. Additionally, software engineers collaborate with
            other team members, such as designers and product managers, to
            deliver efficient and user-friendly software products.
          </p>
          <a href="" className="btn btn_primary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
