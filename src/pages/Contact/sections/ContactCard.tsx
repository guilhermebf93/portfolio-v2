import type { LucideIcon } from 'lucide-react'
import type { IconType } from 'react-icons'

import { ArrowUpRight } from 'lucide-react'

type ContactCardProps = {
  icon: LucideIcon | IconType,
  title: string,
  value: string,
  href: string
}

export function ContactCard({
  icon: Icon, title, value, href
}: ContactCardProps) {
  return(
    <a
      href={href}
      target='_blank'
      rel='noreferrer'
      className='group rounded-3xl border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg'
    >
      <div className='flex items-start justify-between'>
        <div className='space-y-4'>
          <div className='flex h-12 w-12 items-center justify-center rounded-2xl border bg-background'>
            <Icon className='h-5 w-5' />
          </div>

          <div>
            <h2 className='font-medium'>
              {title}
            </h2>

            <p className='mt-1 text-sm text-muted-foreground'>
              {value}
            </p>
          </div>
        </div>

        <ArrowUpRight className='h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1' />
      </div>
    </a>
  )
}