import React, { useEffect } from "react";
import "./Education.css";
import { student } from "../../assets/images";
import { stage } from "../../assets/images";
import {eleve} from "../../assets/images"
import AOS from 'aos';
import 'aos/dist/aos.css'
export default function Education() {
  useEffect(()=>{
    AOS.init({duration:2000});
  },[])
  return (
    <section className="education" id="education">
      <h1 className="title">
        My <span className="text_gradient">Education</span>
      </h1>

      <div className="linetemp" data-aos="fade-down">
        <div className="container1 left-container"> 
          <img src={stage} />
          <div className="text-box">
            <h2>Smart Plume</h2>
            <small> 03/2023 - 09/2023</small>
            <p>
              Development of a publishing platform with content focused on
              sustainable development for MENA writers.{" "}
            </p>
            <span className="left-container-arrow"></span>
          </div>
        </div>

        <div className="container1 right-container" >
          <img src={stage} alt="" />
          <div className="text-box">
            <h2>Smart It</h2>
            <small> 08/2022 - 09/2022</small>
            <p>
              Developed a website to effectively showcase the company and
              enhance communication with clients
            </p>
            <span className="right-container-arrow"></span>
          </div>
        </div>

        <div className="container1 left-container">
          <img src={student} alt="" />
          <div className="text-box">
            <h2>Enicarthage</h2>
            <small> 09/2020 - 10/2023</small>
            <p>
              Comprehensive knowledge and hands-on experience were gained in
              programming, algorithms, data structures, database systems,
              software project management, and web development
            </p>
            <span className="left-container-arrow"></span>
          </div>
        </div>

        <div className="container1 right-container ">
          <img src={student} alt="" />
          <div className="text-box">
            <h2>IPEIN</h2>
            <small> 03/2023 - 09/2023</small>
            <p>
              The preparatory cycle emphasized mathematics, physics, computer
              science, and engineering principles, fostering critical thinking,
              problem-solving, and teamwork skills{" "}
            </p>
            <span className="right-container-arrow"></span>
          </div>
        </div>

        <div className="container1 left-container">
          <img src={eleve} alt="" />
          <div className="text-box">
            <h2>Technical Baccalaureate</h2>
            <small> 09/2017 - 07/2018</small>
            <p>
            Provides specialized knowledge and skills in technical subjects, preparing students for university education
            </p>
            <span className="left-container-arrow"></span>
          </div>
        </div>
      </div>
    </section>
  );
}
