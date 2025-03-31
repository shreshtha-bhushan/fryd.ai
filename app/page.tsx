'use client';
import { useState } from 'react';
import Image from 'next/image';

const assets = {
  menu_icon: 'assets.menu_icon', // Replace with the actual path to your image
  chat_icon: 'assets.chat_icon', // Replace with the actual path to your image
};

export default function Home() {
  
  const [expand, setExpand] = useState('false');
  const [messages, setMessages] = useState ([]);
  const [isLoading, setIsLoading] = useState('false');

  return (
    <div>
      <div className='flex h-screen'>
        {/* --sidebar-- */}
          <div className='flex-1 flex flex-col items-center justify-center px-4 pb-8 bg-gray-900 text-white' >
              <div className='md:hidden absolute px-4 top-6 flex items-center justify-between w-full'>
                <Image onClick={()=> (expand ? setExpand(false) : setExpand(true))} src={assets.menu_icon} alt="menu icon"  fill/>
                <Image src={assets.chat_icon} alt="chat icon" fill />
              </div>
          </div>
      </div>
    </div>
  );
}
