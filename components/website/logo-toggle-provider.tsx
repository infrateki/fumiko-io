'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface LogoToggleContextType {
  useAltLogo: boolean
  toggle: () => void
}

const LogoToggleContext = createContext<LogoToggleContextType>({
  useAltLogo: false,
  toggle: () => {},
})

export function useLogoToggle() {
  return useContext(LogoToggleContext)
}

export function LogoToggleProvider({ children }: { children: ReactNode }) {
  const [useAltLogo, setUseAltLogo] = useState(false)

  const toggle = () => setUseAltLogo((prev) => !prev)

  return (
    <LogoToggleContext.Provider value={{ useAltLogo, toggle }}>
      {children}
    </LogoToggleContext.Provider>
  )
}
