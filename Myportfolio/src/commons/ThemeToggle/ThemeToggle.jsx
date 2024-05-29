import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import Toggle from 'react-toggle'
import 'react-toggle/style.css'
import './ThemeToggle.css'


function ThemeToggle() {

    useMediaQuery(
      {
        query:"(prefers-color-scheme : dark",
      },
      undefined,
      preferDark =>{
        setIsDark(preferDark)
      }
    )
    
    const storageKey = 'theme-preference'
    const [isDark,setIsDark] =useState(JSON.parse(localStorage.getItem(storageKey)))
    useEffect (()=>{
      if(isDark){
        document.firstElementChild
        .setAttribute('data-theme','dark')
        localStorage.setItem(storageKey,JSON.stringify(true))
        return;
      }
      else{
        document.firstElementChild.setAttribute('data-theme','light')
        localStorage.setItem(storageKey,JSON.stringify(false))
      }
  
    },[isDark])
  
 
  return (
    <div className='theme_toggle_container'>
      <Toggle
      checked = {isDark}
      onChange = {event=>setIsDark(event.target.checked)}
      icons ={false}
      >

      </Toggle>

    </div>
  )
}

export default ThemeToggle