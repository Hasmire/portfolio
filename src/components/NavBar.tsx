import React from 'react'

import { Button } from './ui/button'

export default function NavBar() {
  return (
    <div className="flex h-20 w-full items-center justify-between border-2 border-slate-900 bg-nepal-100 px-24">
      <h1 className="text-shadow-neo scroll-m-20 font-Space_Grotesk text-4xl font-extrabold tracking-tight text-cerulean-400 lg:text-5xl">
        hasmire
      </h1>
      <div className="flex gap-8">
        <div className="text-xl text-slate-900">home</div>
        <div className="text-xl text-slate-900">skills</div>
        <div className="text-xl text-slate-900">experience</div>
        <div className="text-xl text-slate-900">projects</div>
        <div className="text-xl text-slate-900">contact</div>
      </div>
      <Button>Let’s Work Together!</Button>
    </div>
  )
}
