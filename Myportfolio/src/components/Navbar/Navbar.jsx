import React, { useEffect, useState } from 'react';
import './Navbar.css';
import Logo from '../../commons/Logo/Logo';
import {menus} from "../../data"
import Social from '../../commons/SocialHandles/Social';
import { TiThMenu } from 'react-icons/ti';
import Sidebar from '../../commons/Sidebar/Sidebar';
import { useMenuActivation } from '../../hook/hook';
import ThemeToggle from '../../commons/ThemeToggle/ThemeToggle';
import AOS from 'aos';
import 'aos/dist/aos.css'
export default function Navbar() {
    const [openSidebar,setOpenSideBar] = useState(false);
    const [visible,setVisible] = useState(false)
    const handleScroll = ()=>{
        const currentScrollPosition = window.scrollY;
        if (currentScrollPosition > 70){
            setVisible(true);
        }
        else{
            setVisible(false);
        }
    }
    useEffect (()=>{
        window.addEventListener('scroll',handleScroll)
        AOS.init({duration:2000});
        return ()=> {
            window.removeEventListener('scroll',handleScroll)
        };
    },[])

    useMenuActivation(
        ".menu_container",
        ".menu_container .menu_item",
    )
  return (
    <nav className={`navigation_bar ${visible ? 'visible':'' }`} data-aos="fade-down" >
        <Sidebar 
        open={openSidebar}
        onClose={()=>setOpenSideBar(!openSidebar)}
        />
        <div className="column">
            <Logo/>
        </div>
        <div className="column menu_container">
           {
            menus.map((menu,index)=>(
                <a href={`#${menu.name.toLocaleLowerCase()}`} className='menu_item' key={index}>
                    {menu.name}
                </a>
            ))
           }
        </div>
        <div className="column">
            <Social/>
            <ThemeToggle/>
            <a href="#" className="btn btn_primary">Let Talk</a>
            <div className="menu_icon" onClick={()=>setOpenSideBar(!openSidebar)}>
                <TiThMenu/>
            </div>
        </div>

    </nav>
  )
}
