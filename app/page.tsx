"use client"
import { Inter } from 'next/font/google'
import React, { useEffect, useState } from 'react'
import './page.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <header>
        <Cursor/>
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
  });

  return (
    <div className="cursor-main">
      <div id='cursor' className='cursor'></div>
    </div>
  )
}

