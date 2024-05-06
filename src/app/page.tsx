import Image from 'next/image'
import React from 'react'

import NavBar from '@/components/NavBar'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="size-full">
      <NavBar />
      <div className="flex w-full flex-col md:flex-row">
        <div className="flex h-[450px] w-full flex-col items-center justify-center border-2 border-black bg-yellow-200 md:min-h-[calc(100dvh-80px)]">
          <div className="flex w-[550px] flex-col gap-10">
            <div className="flex flex-col gap-4">
              <div className="scroll-m-20 text-2xl tracking-tight">
                Hello there! You can call me{' '}
                <span className="text-shadow-neo scroll-m-20 font-Space_Grotesk text-2xl font-extrabold tracking-tight text-cerulean-400">
                  Gregg
                </span>
                !
              </div>
              <div className="scroll-m-20 font-Space_Grotesk text-4xl font-extrabold tracking-tight lg:text-5xl">
                Creating another project using Code and Caffeine
              </div>
              <div className="scroll-m-20 text-xl font-semibold tracking-tight">
                (Sometimes a little bit too much caffeine...)
              </div>
              <div className="text-xl">
                On a journey to become a Full Stack Developer, fueled by a passion for innovation.
              </div>
            </div>
            <Button className="w-fit">Let&apos;s Work Together!</Button>
          </div>
        </div>
        <div className="flex h-[450px] w-full items-center justify-center border-2 border-black bg-blue-200 md:min-h-[calc(100dvh-80px)]">
          <Image src="/images/Landing Page.png" alt="hasmire" width={546} height={563} />
        </div>
      </div>
      <div className="grid w-full grid-cols-2 gap-10 bg-purple-300 p-24 md:min-h-[calc(90dvh-80px)]">
        <div className="relative w-full rounded-lg border-2 border-slate-900 bg-blue-300 px-6 py-8 shadow-neoBrutalism">
          <div className="w-3/5">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">About Me</h3>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              I&apos;m a <span className="font-bold">computer science</span> student at the
              <span className="font-bold"> University of Santo Tomas</span>, where I&apos;m learning
              all about coding and most importantly, software development.
            </p>
          </div>
          <Image
            className="absolute right-[-8%] top-0"
            src="/svgs/Character1.svg"
            alt="Character1"
            width={305}
            height={305}
          />
        </div>
        <div className="w-full rounded-lg bg-blue-300">Tech</div>
        <div className="w-full rounded-lg bg-blue-300">Software Development</div>
        <div className="w-full rounded-lg bg-blue-300">Hobbies</div>
      </div>
    </div>
  )
}
