'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { useClerk } from '@clerk/nextjs';
import { useAppContext } from '@/context/AppContext';
import ChatLabel from './ChatLabel';

interface SidebarProps {
  expand: boolean;
  setExpand: (value: boolean) => void;
  assets: {
    logo_text: string;
    logo_icon: string;
    new_chat_icon: string;
    profile_icon: string;
    three_dots: string;
    pencil_icon: string;
    delete_icon: string;
  };
}

const Sidebar: React.FC<SidebarProps> = ({ expand, setExpand, assets }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { openSignIn } = useClerk();
  const { user } = useAppContext();
  const [opeMenu, setOpenMenu] = useState({ id: 0, open: false });

  const isExpanded = expand || isHovered;

  return (
    <div
      className={`
        bg-black/10 backdrop-blur-2xl p-6 flex flex-col relative overflow-hidden 
        transition-all duration-300 z-50 max-md:absolute max-md:top-0 max-md:h-screen shadow-lg
        ${isExpanded ? 'w-72 max-md:w-screen' : 'w-16'}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col h-full justify-between items-center pt-7">
        
        {/* Sidebar Header */}
        <div className={`flex flex-col items-center w-full ${isExpanded ? 'gap-6 px-4' : 'gap-4'} transition-all duration-300`}>
          
          {/* Sidebar Logo */}
          <Image
            src={isExpanded ? assets.logo_text : assets.logo_icon}
            alt="logo_icon"
            width={isExpanded ? 144 : 48}
            height={48}
          />

          {/* New Chat Button */}
          <button
            className={`flex items-center justify-center bg-white/20 text-white font-medium rounded-lg transition-all duration-800 hover:bg-violet-900
              ${isExpanded ? 'w-full py-2 px-4' : 'w-10 h-10'}`}
          >
            <Image src={assets.new_chat_icon} alt="new_chat" width={isExpanded ? 20 : 24} height={24} className={isExpanded ? 'mr-2' : ''} />
            {isExpanded && <span>New Chat</span>}
          </button>

          {/* Recent Chats */}
          <div className={`flex flex-col items-start w-full transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0 hidden'}`}>
            <h2 className="text-white/80 text-sm font-semibold">Recent Chats</h2>
            <ChatLabel openMenu={opeMenu} setOpenMenu={setOpenMenu} assets={assets} />
          </div>
        </div>

        {/* Profile Section */}
        <div
          onClick={user ? () => {} : () => openSignIn()}
          className={`flex items-center text-white/60 text-sm p-2 cursor-pointer rounded-lg transition-all duration-300
            ${isExpanded ? 'gap-3 hover:bg-white/10' : 'justify-center w-full'}`}
        >
          <Image
            src={assets.profile_icon}
            alt="profile_icon"
            width={32}
            height={32}
            className="rounded-full"
          />
          {isExpanded && <span>My Profile</span>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
