"use client"
import { Inter } from 'next/font/google'
import React, { useEffect, useState } from 'react'
import './page.css'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Cursor/>
      <header>
        <Navbar/>
      </header>
    </main>
  )
}


export function Cursor() {

  useEffect(() => {
    const cursor = document.getElementById('cursor')
    document.addEventListener('mousemove', c => {
    cursor?.setAttribute("style", "top: "+(c.pageY - 10)+"px; left: "+(c.pageX - 10)+"px;")
    })
    document.addEventListener('click', () => {
      cursor?.classList.add('click-anim');
      setTimeout(() => {
      cursor?.classList.remove('click-anim');
      },250)
    })
  });

  return (
    <div>
      <div id='cursor' className='cursor'>
        <div className="pointer"></div>
      </div>
    </div>
  )
}


export function Navbar() {
  return (

    <div className="nav-main">
      <img className='logo' src='/logo.png'/>
      <div className="nav-items">
        <a>About</a>
        <a>My Expertise</a>
        <a>Achievements</a>
        <a>Contact</a>
      </div>
    </div>

  )
}

