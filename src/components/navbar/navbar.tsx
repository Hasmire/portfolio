'use client'

import React from 'react'
import { twMerge } from 'tailwind-merge'

import { Button } from '../ui/button'
import Hamburger from './hamburger'

export default function NavBar() {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <>
      <div className="sticky top-0 z-10 flex h-20 w-full items-center justify-between border-2 border-slate-900 bg-nepal-100 px-4 md:px-24">
        <h1 className="text-shadow-neo scroll-m-20 font-Space_Grotesk text-4xl font-extrabold tracking-tight text-cerulean-400 lg:text-5xl">
          hasmire
        </h1>
        {/* Desktop Navbar */}
        <div className="hidden gap-8 md:flex">
          <div className="text-xl text-slate-900">home</div>
          <div className="text-xl text-slate-900">skills</div>
          <div className="text-xl text-slate-900">experience</div>
          <div className="text-xl text-slate-900">projects</div>
          <div className="text-xl text-slate-900">contact</div>
        </div>
        <Button className="hidden md:block">Let&apos;s Work Together!</Button>
        <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      {isOpen && (
        <div
          className={twMerge(
            'flex flex-col divide-y-4 divide-slate-900 border-2 sticky top-[80px] z-10 bg-nepal-100 border-slate-900',
          )}>
          <div className="py-2 text-center text-xl text-slate-900">home</div>
          <div className="py-2 text-center text-xl text-slate-900">skills</div>
          <div className="py-2 text-center text-xl text-slate-900">experience</div>
          <div className="py-2 text-center text-xl text-slate-900">projects</div>
          <div className="py-2 text-center text-xl text-slate-900">contact</div>
        </div>
      )}
    </>
  )
}
