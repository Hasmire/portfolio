'use client'

import Image from 'next/image'
import React from 'react'
import { twMerge } from 'tailwind-merge'

type InfoCardProps = {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  bgColor: string
  imagePosition: 'left' | 'right'
}

export default function InfoCard(props: InfoCardProps) {
  const { title, description, imageSrc, imageAlt, bgColor, imagePosition } = props

  const infoCardClass = twMerge(
    'relative w-full max-w-[520px] rounded-lg border-2 border-slate-900 bg-blue-300 px-6 py-8 shadow-neoBrutalism',
    imagePosition === 'left' ? 'justify-self-start' : 'justify-self-end',
    bgColor,
  )
  const infoTextContainerClass = twMerge('w-3/5', imagePosition === 'left' ? 'ml-auto' : '')
  const imageClass = twMerge(
    'absolute -top-4',
    imagePosition === 'left' ? 'left-[-20%]' : 'right-[-20%]',
  )

  return (
    <div className={infoCardClass}>
      <div className={infoTextContainerClass}>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">{title}</h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">{description}</p>
      </div>
      <Image className={imageClass} src={imageSrc} alt={imageAlt} width={300} height={300} />
    </div>
  )
}
