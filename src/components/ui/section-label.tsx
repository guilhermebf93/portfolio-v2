import type { ReactNode } from 'react'

interface SectionLabelProps {
  children: ReactNode
}

export function SectionLabel({ children }: SectionLabelProps) {
  return(
    <span className='mb-6 block text-sm uppercase tracking-[0.3em] text-blue-300/80'>
      {children}
    </span>
  )
}