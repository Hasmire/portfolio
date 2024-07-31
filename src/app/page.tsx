'use client'

import React from 'react'

import About from '@/components/about/about'
import HeroSection from '@/components/hero-section'
import NavBar from '@/components/navbar/navbar'

export default function Home() {
  return (
    <div className="size-full">
      <NavBar />
      <HeroSection />
      <About />
    </div>
  )
}
