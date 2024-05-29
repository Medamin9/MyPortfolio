import React from 'react'
import './Social.css'
import { socialHandles } from '../../data'
export default function Social() {
  return (
    <div className='social_container'>
        {
            socialHandles.map((handle,index)=>(
                
                <a href={handle.link} target='_blank' className='icon_container hover_fill' key={index}>
                    {handle.icon}
                </a>
                
            ))
        }

    </div>
  )
}
