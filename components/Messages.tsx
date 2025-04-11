'use client';
import React from 'react';
const assets = {
  user_icon: '/assets/user_icon.svg',
  pencil_icon: '/assets/pencil_icon.svg', 
  copy_icon: '/assets/copy_icon.svg',
  regenerate_icon: '/assets/regenerate_icon.svg',
  like_icon: '/assets/like_icon.svg',
  dislike_icon: '/assets/dislike_icon.svg',
  logo_icon: '/assets/logo_icon.svg'
};

interface MessagesProps {
  role: 'user' | 'ai';
  content: string;
}

const Messages: React.FC<MessagesProps> = ({ role, content }) => {
  return (
    <div className="flex flex-col w-full max-w-3xl text-sm">
      <div className={`flex flex-col w-full mb-8 ${role === 'user' ? 'items-end' : ''}`}>
        <div className={`group relative flex py-3 px-5 rounded-xl gap-3 max-w-2xl ${role === 'user' ? 'bg-[#414158]' : 'bg-white/10'}`}>
          <div className={`opacity-0 group-hover:opacity-100 absolute transition-all ${role === 'user' ? '-left-16 top-2.5' : 'left-9 -bottom-6'}`}>
            <div className="flex items-center gap-2 opacity-70">
              {role === 'user' ? (
                <>
                  <img src="/assets/user_icon.svg" alt="user_icon" className="w-4 cursor-pointer" />
                  <img src="/assets/pencil_icon.svg" alt="pencil_icon" className="w-[18px] cursor-pointer" />
                </>
              ) : (
                <>
                  <img src="/assets/copy_icon.svg" alt="copy_icon" className="w-[18px] cursor-pointer" />
                  <img src="/assets/regenerate_icon.svg" alt="regenerate_icon" className="w-[18px] cursor-pointer" />
                  <img src="/assets/like_icon.svg" alt="like_icon" className="w-[18px] cursor-pointer" />
                  <img src="/assets/dislike_icon.svg" alt="dislike_icon" className="w-[18px] cursor-pointer" />
                </>
              )}
            </div>
          </div>

          {role === 'user' ? (
            <span className="text-white/90">{content}</span>
          ) : (
            <>
              <img
                src="/assets/logo_icon.svg"
                alt="logo_icon"
                className="h-9 w-9 p-1 border border-white/15 rounded-full"
              />
              <div className="space-y-4 w-full overflow-scroll text-white/90">{content}</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Messages;
