"use client";
import { useUser } from '@clerk/nextjs';
import React, { createContext, useContext } from 'react';

export const AppContext = createContext({ user: null });

export const useAppContext = ()=>{
    return useContext(AppContext);
}

export const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const {user} = useUser();

    const value = {
        user,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}