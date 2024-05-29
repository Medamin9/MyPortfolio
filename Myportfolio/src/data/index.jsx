import {SiFiverr,SiMongodb,SiAdobexd, SiTypescript, SiSpringboot, SiMysql, SiKubernetes, SiRabbitmq} from 'react-icons/si'
import {AiFillGithub} from 'react-icons/ai'
import {CiLinkedin} from 'react-icons/ci'
import {FaYoutube,FaHtml5,FaCss3Alt,FaBootstrap,
  FaNodeJs,FaPhp,FaPython,FaFigma, FaSketch,
  FaJava,
  FaGitAlt
} from 'react-icons/fa'
import { RiContactsBookFill, RiJavascriptFill ,RiTailwindCssFill} from "react-icons/ri";
import { TbBrandReact,TbBrandReactNative,TbBrandMysql } from "react-icons/tb";
import { MdContactPage, MdOutlineAlternateEmail } from 'react-icons/md';
import { IoCallOutline,IoLocationOutline, IoLogoAngular, IoLogoDocker } from 'react-icons/io5';
import { profile2,profile3,profile4,profile5,
          amazon,facebook,google,
         linkedin,microsoft,netflix,paypal,samsung,
         skype, whatsapp,
         alwifak,
         spublish,
         ecom,
         gymnast,
         smartit,
         emotion, 
         } from '../assets/images'
import { BiLogoDjango, BiLogoTypescript } from 'react-icons/bi';
import { DiMysql } from 'react-icons/di';


export const menus = [
    {name:"Home"},
    {name:"About"},
    {name:"Education"},
    {name:"Skills"},
    {name:"Projects"},
    {name:"Contact"},
];


export const partners = [
  {
    name:"Amazon",
    logo:amazon,
  },
  {
    name:"Facebook",
    logo:facebook,
  },
  {
    name:"Google",
    logo:google,
  },
  {
    name:"LinkedIn",
    logo:linkedin,
  },
  {
    name:"Microsoft",
    logo:microsoft,
  },
  {
    name:"Netflix",
    logo:netflix,
  },
  {
    name:"PayPal",
    logo:paypal,
  },
  {
    name:"Samsung",
    logo:samsung,
  },
  {
    name:"Skipe",
    logo:skype,
  },
  {
    name:"Whatsapp",
    logo:whatsapp,
  },
]

export const skills = [
  {
    category:"Programing languages",
    data:[
      {skill:"Python",progress:80,icon:<FaPython/>},
      {skill:"Java",progress:75,icon:<FaJava/>},
      {skill:"JavaScript",progress:80,icon:<RiJavascriptFill/>},
      {skill:"TypeScript",progress:60,icon:<BiLogoTypescript/>},
      {skill:"SQL",progress:90,icon:<DiMysql/>},
    ]
  },
  {
    category:"Frontend Development",
    data:[
      {skill:"HTML",progress:80,icon:<FaHtml5/>},
      {skill:"CSS",progress:85,icon:<FaCss3Alt/>},
      {skill:"Tailwind",progress:75,icon:<RiTailwindCssFill/>},
      {skill:"Bootstrap",progress:85,icon:<FaBootstrap/>},
      {skill:"React",progress:85,icon:<TbBrandReact/>},
      {skill:"Angular",progress:65,icon:<IoLogoAngular/>},

    ]
  },
  {
    category:"Backend Development",
    data:[
      {skill:"Node JS",progress:75,icon:<FaNodeJs/>},
      {skill:"Django",progress:80,icon:<BiLogoDjango/>},
      {skill:"SpringBoot",progress:65,icon:<SiSpringboot/>},
      {skill:"MangoDB",progress:80,icon:<SiMongodb/>},
      {skill:"MySQL",progress:70,icon:<SiMysql/>},
    ]
  },
  {
    category:"Devops & tools",
    data:[
      {skill:"Docker",progress:70,icon:<IoLogoDocker/>},
      {skill:"kubernetes",progress:60,icon:<SiKubernetes/>},
      {skill:"RabbitMQ",progress:65,icon:<SiRabbitmq style={{fontSize:'22px'}}/>},
      {skill:"Git",progress:80,icon:<FaGitAlt/>},
    ]
  },
]


export const projects = [
  {
    name:'Alwifak collection',
    description:`Developed a website to effectively showcase the company and
    enhance communication with clients, ensuring traceability`,
    image: alwifak,
    url:'https://github.com/Medamin9/alwifakcollect-demo',
  },
  {
    name:'SP Publishing',
    description:`Development of a publishing platform tailored for writers from the MENA region with focus  with a focus on
    sustainable development`,
    image: spublish,
    url:'https://github.com/Medamin9/SP-Publishing-Demo',
  },
  {
    name:'Smart IT',
    description:`website designed to showcase a company, its services, team, and other essential information. The website aims to create a strong online presence`,
    image:smartit,
    url:'https://github.com/Medamin9/smart-it-mern',
  },
  {
    name:'e-commerce',
    description:`E-commerce platform offering a diverse range of products,
    aims to provide a seamless and enjoyable shopping experience`,
    image:ecom,
    url:'https://github.com/Medamin9/Soc-ecommerce-website',
  },
  {
    name:'Fitness Time',
    description:`A fitness app providing workout plans, nutrition tips, and tracking tools, aims to helping users achieve their health and wellness goals`,
    image:gymnast,
    url:'https://github.com/Medamin9/gym-website-',
  },
  {
    name:'Facial emotion recognition',
    description:`real-time webcam emotion prediction system, leveraging state-of-the-art computer vision technologies and a meticulously trained deep learning model`,
    image:emotion,
    url:'https://github.com/Medamin9/FER-ML',
  },
];




export const socialHandles = [
  {
    name:"Fiverr",
    icon:<SiFiverr/>,
    link:"https://fr.fiverr.com/mohamed_amine99?up_rollout=true",
  },
  {
    name:"Github",
    icon:<AiFillGithub/>,
    link:"https://github.com/Medamin9",
  },
  {
    name:"LinkedIn",
    icon:<CiLinkedin/>,
    link:"https://www.linkedin.com/in/mohamed-amine-hamdi-482a01225/",
  },
  {
    name:"Resume",
    icon:<MdContactPage/>,
    link:"https://amber-corly-82.tiiny.site",
  },
];
  

export const contactInfo = [
  {
    name:"Email",
    icon:<MdOutlineAlternateEmail />,
    value:"hamdi.mohamed.amine@hotmail.com",
  },
  {
    name:"Phone",
    icon:<IoCallOutline/>,
    value:"+21696707406",
  },
  {
    name:"Address",
    icon:<IoLocationOutline/>,
    value:"Tunis, Gouvernerat Ariana",
  },
]

export const footer = [
  {
    group:"Hot Links",
    routes:[
      {name:"Home"},
      {name:"About"},
      {name:"Education"},
      {name:"Skills"},
      {name:"Projects"},
      {name:"Contact"},
    ]
  },
  {
    group:"Others",
    routes:[
      {name:"Privacy Policy"},
      {name:"Terms and Conditions"},
      {name:"Cookie Policy"},
    ]
  },
  {
    group:"Contacts",
    routes:[
      {
        name:"hamdi.mohamed.amine@hotmail.com",
        icon:<MdOutlineAlternateEmail />,
      },
      {
        name:"+21696707406",
        icon:<IoCallOutline/>,
      },
      {
        name:"Tunis, Gouvernerat Ariana",
        icon:<IoLocationOutline/>,
      },
    ]
  },
]