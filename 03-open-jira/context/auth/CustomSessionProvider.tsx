"use client"

import { SessionProvider } from "next-auth/react"
import { FC, PropsWithChildren } from "react"

const CustomSessionProvider:FC<PropsWithChildren> = ({ children }) => {
  return (
    <SessionProvider>
        {children}
    </SessionProvider>
  )
}

export default CustomSessionProvider