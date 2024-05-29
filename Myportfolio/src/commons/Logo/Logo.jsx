import React from 'react'
import "./Logo.css"
import { IoLogoEdge } from 'react-icons/io5'
import { FaLaptopCode } from 'react-icons/fa'
import { LiaLaptopCodeSolid } from 'react-icons/lia'
const Logo = () => {
  return (
    <div className='logo_container'>
        <LiaLaptopCodeSolid className='icon'/>
        <h2>Med Amine</h2>
    </div>
  )
}

export default Logo