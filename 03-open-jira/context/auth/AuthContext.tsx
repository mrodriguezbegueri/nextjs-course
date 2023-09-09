"use client"

import { createContext } from 'react'

export interface ContextProps {
    // session: Session
    logout: () => void
}


export const AuthContext = createContext ({} as ContextProps)