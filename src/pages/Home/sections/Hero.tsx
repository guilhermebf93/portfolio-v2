import { motion } from 'framer-motion'

import { ArrowRight } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export function Hero () {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_45%)]" />

      <div className="grid w-full items-center gap-20 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='space-y-8'
        >
          <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur">
            Full Stack Developer • React • Node.js
          </div>

          <div className="space-y-6">
            <h1 className="max-w-2xl font-heading text-5xl font-bold leading-tight tracking-tight-[-0.04em] md:text-6xl">
              Transformando ideias em aplicações modernas, funcionais e visualmente bem construídas.
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Desenvolvedor Full Stack construindo aplicações web modernas com React, Node.js e foco em interfaces limpas, experiência fluida e arquitetura escalável.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              to='/projetos'
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition hover:opacity-90"
            >
              Ver projetos
              <ArrowRight size={18} />
            </Link>

            <Link
              to='/contato' 
              className="rounded-full border border-border px-6 py-3 font-medium transition hover:bg-muted"
            >
              Contato
            </Link>

          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:flex lg:flex-col lg:items-center lg:justify-center"
        >
          <div className="absolute h-80 w-80 rounded-full bg-blue-500/15 blur-[120px]" />

          <div className="relative flex h-115 w-85 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/3 shadow-2xl backdrop-blur-xl">
            <img
              src="/images/profile-pic.png"
              alt="Gui Ferreira"
              className="h-full w-full object-cover"
/>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <a
              href="https://github.com/guilhermebf93"
              className="rounded-full border border-white/10 bg-white/2 p-4 text-muted-foreground transition hover:border-white/20 hover:bg-white/2 hover:text-foreground"
            >
              <FaGithub size={28} />
            </a>

            <a
              href="https://www.linkedin.com/in/guiferreira93/"
              className="rounded-full border border-white/10 bg-white/2 p-4 text-muted-foreground transition hover:border-white/20 hover:bg-white/2 hover:text-foreground"
            >
              <FaLinkedin size={28} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}