import React from 'react'

import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="h-full">
      <div className="flex h-20 w-full items-center justify-between border-2 border-black bg-nepal-100 px-24">
        <h1 className="scroll-m-20  border border-black font-Space_Grotesk text-4xl font-extrabold tracking-tight text-cerulean-400 lg:text-5xl">
          hasmire
        </h1>
        <div className="flex gap-6">
          <div>home</div>
          <div>skills</div>
          <div>experience</div>
          <div>projects</div>
          <div>contact</div>
        </div>
        <Button>Let’s Work Together!</Button>
      </div>
    </div>
  )
}
