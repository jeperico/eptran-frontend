'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Logo from '@/public/aupi_logo.jpeg'
import Link from 'next/link'

export default function Home() {
  const [keysPressed, setKeysPressed] = useState<string[]>([])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const { key } = event
      setKeysPressed((prevKeys) => [...prevKeys, key])
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div className='container flex h-screen w-full flex-col items-center justify-center gap-12'>
      <div>
        <Image src={Logo} alt='' />
      </div>

      <div className='flex max-w-[950px] flex-col gap-5'>
        <h1 className='text-center text-6xl font-bold'>
          Bem-vindo ao template padrão da{' '}
          <Link
            href='https://www.aupi.com.br/'
            className='text-[#5178be] hover:underline'
            target='_blank'
          >
            Aupi Soluções em TI
          </Link>
        </h1>

        <p className='text-center text-lg font-medium'>
          Utilize esse template e deixe o Alexandre Klostermann mais rico...
        </p>

        <div className=' flex w-full items-center justify-center'>
          <div className='mr-7 size-6 animate-pulse rounded-full bg-[#5178be]'></div>
          <ul className=' relative flex max-w-[500px] flex-row items-end justify-end gap-2 overflow-hidden'>
            {keysPressed.map((key, index) => (
              <li
                key={index}
                className='rounded-md border border-zinc-700/20 p-4 px-6'
              >
                {key}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
