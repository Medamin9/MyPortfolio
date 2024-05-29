import React from 'react'
import './Sidebar.css'
import { menus } from '../../data'
import Logo from '../Logo/Logo'
import { FaTimes } from 'react-icons/fa'
import ThemeToggle from '../ThemeToggle/ThemeToggle'

export default function Sidebar({
    open = flase,
    onClose,
}) {
  return (
    <div>
        {
            open ? (<div className='sidebar_overlay' onClick={onClose}></div>): ""
        }
        <aside className={`sidebar ${open ? 'active' : ''}`}>
            <div className="sidebar_top">
                <Logo/>
                <div className="icon_container close_btn" onClick={onClose}>
                    <FaTimes/>
                </div>
            </div>

            <div className="sidebar_middle">
                {
                    menus.map((menu,index)=>(
                        <a href={`#${menu.name.toLocaleLowerCase()}`} className='menu_item' key={index} onClick={onClose}>
                            <h3>{menu.name}</h3>
                        </a>
                    ))
                }
            </div>

            <div className="sidebar_bottom">
                <ThemeToggle/>
            </div>
        </aside>
    </div>
  )
}
