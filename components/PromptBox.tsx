'use client';
import React, { useState } from 'react';

const assets = {
  search_icon: '/assets/search_icon.svg',
  pin_icon: '/assets/pin_icon.svg',
  arrow_icon: '/assets/arrow_icon.svg',
  arrow_icon_dull: '/assets/arrow_icon_dull.svg',
};

interface PromptBoxProps {
  setIsLoading: (isLoading: boolean) => void;
  isLoading: boolean;
}

const PromptBox: React.FC<PromptBoxProps> = ({ setIsLoading, isLoading }) => {
  const [prompt, setPrompt] = useState('');

  return (
    <form className={`w-full ${false ? 'max-w-3xl' : 'max-w-2xl'} bg-gradient-to-b from-gray-900 to-violet-950 p-4 rounded-3xl mt-4 transition-all`}>
      <textarea
        className='outline-none w-full resize-none overflow-hidden break-words bg-transparent text-white'
        rows={2}
        placeholder='How can I help you today?'
        required
        onChange={(e) => setPrompt(e.target.value)}
        value={prompt}
      />

      <div className='flex items-center justify-between mt-3'>
        <div>
          <p className='flex items-center gap-2 text-xs border border-violet-300/60 px-2 py-1 rounded-full cursor-pointer hover:bg-violet-500/50 transition-all duration-300'>
            <img className='h-5' src={assets.search_icon} alt='search_icon' />
            Search
          </p>
        </div>
        <div className='flex items-center gap-3'>
          <img className='w-4 cursor-pointer' src={assets.pin_icon} alt='pin_icon' />
          <button
            type='submit'
            className={`${
              prompt ? 'bg-violet-500 hover:bg-violet-500' : 'bg-violet-500/50'
            } rounded-full p-2 cursor-pointer transition-all duration-300`}
          >
            <img
              className='w-3.5 aspect-square'
              src={prompt ? assets.arrow_icon : assets.arrow_icon_dull}
              alt='arrow_icon'
            />
          </button>
        </div>
      </div>
    </form>
  );
};

export default PromptBox;
