import { Link } from 'react-router-dom'

export function Navbar () {
  return(
    <header className='fixed inset-x-0 top-0 z-50 border-b border-white/6 bg-background/40 backdrop-blur-xl'>
      <div className='mx-auto flex max-w-7xl items-center justify-between px-6 py-7 lg:px8'>
        <Link
          to='/'
          className='group flex items-center font-heading text-3xl font-bold tracking-[-0.06em]'
        >
          GUI
          <span className='text-blue-400 transition group-hover:text-blue-300'>
            .
          </span>
        </Link>

        <nav className='hidden items-center gap-8 md:flex'>
          <Link
            to='/sobre'
            className='text-sm font-medium text-muted-foreground/80 transition hover:text-foreground'
          >
            Sobre
          </Link>

          <a
            href='#'
            className='text-sm font-medium text-muted-foreground/80 transition hover:text-foreground'
          >
            Projetos
          </a>

          <a
            href='#'
            className='text-sm font-medium text-muted-foreground/80 transition hover:text-foreground'
          >
            Contato
          </a>
        </nav>
      </div>
    </header>
  )
}