'use client';
import { Loader } from '@/components/Chat_ai'
import { SidebarDrawer } from '@/components/SidebarDrawer'
import { SignUp } from '@/components/sign-up'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const Page = () => {
  const router = useRouter();

  const {status, data} = useSession();

  if (status == "loading") {
    return (<div className="flex justify-center items-center h-screen w-screen">
        <Loader size={'16'}/>
    </div>
  )
  }

  if (status == "authenticated") {
      router.push("/");
  }

  return (
    <div className='flex justify-between items-center px-4 w-full'>
      <SidebarDrawer urll={"sign-up"} />
      <div className='flex-grow ml-20'>
        <Image src="../../../sign-up.svg" alt="logo" width={700} height={700} />
      </div>
      <SignUp />
    </div>
  )
}

export default Page
