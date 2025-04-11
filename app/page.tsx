'use client';
import { useState } from 'react';
import Sidebar from '../components/sidebar';
import PromptBox from '../components/PromptBox';
import Messages from '../components/Messages';


const assets = {
  menu_icon: '/assets/menu_icon.svg',
  chat_icon: '/assets/chat_icon.svg',
  logo_icon: '/assets/logo_icon.svg',
  logo_text: '/assets/logo_text.svg',
  new_chat_icon: '/assets/new_chat_icon.svg',
  profile_icon: '/assets/profile_icon.svg',
  three_dots: '/assets/three_dots.svg',
  pencil_icon: '/assets/pencil_icon.svg',
  delete_icon: '/assets/delete_icon.svg',
};

export default function Home() {
  const [expand, setExpand] = useState(false);
  // const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
<div className="h-screen bg-cover bg-center flex" style={{ backgroundImage: "url('/purple-bg.png')" }}>
      <Sidebar expand={expand} setExpand={setExpand} assets={assets} />
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-0"></div>
      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-4 relative">
        
        {/* Chat Container */}
        <div className="w-[1350px] h-[650px] bg-black/10 backdrop-blur-2xl border border-black/20 rounded-2xl p-6 flex flex-col relative overflow-hidden shadow-2xl">
          
          {/* Mobile Header */}
          <div className="md:hidden px-4 py-2 flex items-center justify-between w-full">
            <img
              onClick={() => setExpand(!expand)}
              src={assets.menu_icon}
              alt="menu icon"
              className="cursor-pointer"
            />
            <img className="opacity-70" src={assets.chat_icon} alt="chat icon" />
          </div>

          {/* Chat Section */}
          <div className="flex-1 flex flex-col items-center justify-center text-white">
            {Messages.length !== 0 ? (
              <>
                <div className="flex items-center gap-3">
                  <img src={assets.logo_icon} alt="logo" className="h-16" />
                  <p className="text-2xl font-medium">Hi, I'm Fryd.ai</p>
                </div>
                <p className="text-sm mt-2">How was your day, Shreshtha?</p>
              </>
            ) : (
              <div>
                <Messages role='user'  content='Aur be bkl'/>
              </div>
            )}

           <PromptBox isLoading={isLoading} setIsLoading={setIsLoading} />
          </div>
        </div>
            
        <p className="text-xs absolute bottom-1 text-center w-full text-white/70">
          Made by Shreshtha Bhushan.
        </p>
      </div>
    </div>
  );
}
