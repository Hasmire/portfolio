import Image from 'next/image'
import React from 'react'

import NavBar from '@/components/NavBar'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="size-full">
      <NavBar />
      <div className="flex w-full flex-col md:flex-row">
        <div className="flex h-[450px] w-full flex-col items-center justify-center border-2 border-black bg-yellow-200 md:h-[calc(100dvh-80px)]">
          <div>Hello there! You can call me Gregg!</div>
          <div>Creating another project using Code and Caffeine</div>
          <div>(Sometimes a little bit too much caffeine...)</div>
          <div>
            On a journey to become a Full Stack Developer, fueled by a passion for innovation.
          </div>
          <Button>Let&apos;s Work Together!</Button>
        </div>
        <div className="flex h-[450px] w-full items-center justify-center border-2 border-black bg-blue-200 md:h-[calc(100dvh-80px)]">
          <Image src="/images/Landing Page.png" alt="hasmire" width={546} height={563} />
        </div>
      </div>
    </div>
  )
}
