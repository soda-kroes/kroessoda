
'use client'
import { ThemeProvider as NextThemsProvider } from 'next-themes'

export function ThemeProvider({ children, ...props }) {
    return <NextThemsProvider {...props}>{children}</NextThemsProvider>
}