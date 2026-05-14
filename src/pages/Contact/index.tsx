import { FadeIn } from '@/components/motion/FadeIn'
import { SectionLabel } from '@/components/ui/section-label'
import { ContactCard } from './sections/ContactCard'

import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Mail } from 'lucide-react'

export function Contact() {
  return(
    <main className='mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 pb-24 pt-32 md:px-10'>
      <FadeIn>
        <div className='max-w-3xl space-y-6'>
          <SectionLabel>
            Contato
          </SectionLabel>

          <h1 className='text-4xl font-bold tracking-tight sm:text-5xl'>
            Vamos conversar?
          </h1>

          <p className='text-lg leading-relaxed text-muted-foreground'>
            Estou em busca de oportunidades para atuar como desenvolvedor web,
            contribuir em projetos reais e continuar evoluindo tecnicamente.
          </p>

          <div className='mt-8 flex'>
            <a
              href='/curriculo.pdf'
              target='_blank'
              rel='noreferrer'
              className='inline-flex w-fit items-center gap-2 rounded-2xl border bg-card px-5 py-3 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg'
            >
              Baixar currículo
            </a>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <section className='mt-14 max-w-3xl space-y-6 text-base leading-relaxed text-muted-foreground'>
          <p>
            Meu nome é Guilherme Ferreira, e atualmente estudo Análise e 
            Desenvolvimento de Sistemas e venho desenvolvendo projetos 
            focados em React, TypeScript, Node.js e interfaces modernas para web.
          </p>

          <p>
            Tenho interesse especial em desenvolvimento frontend,
            experiência do usuário e construção de aplicações bem estruturadas.
          </p>

          <p>
            Se quiser trocar uma ideia, falar sobre oportunidades,
            projetos ou tecnologia, meus contatos estão logo abaixo.
          </p>
        </section>
      </FadeIn>

      <FadeIn delay={0.2}>
        <section className='mt-16 grid gap-4 sm:grid-cols-1 lg:grid-cols-3'>
          <ContactCard
            href='mailto:guilherme.bf93013@gmail.com'
            icon={Mail}
            title='Email'
            value='guilherme.bf93013@gmail.com'
          />

          <ContactCard
            href='https://github.com/guilhermebf93'
            icon={FaGithub}
            title='GitHub'
            value='github.com/guilhermebf93'
          />

          <ContactCard 
            href='https://www.linkedin.com/in/guiferreira93/'
            icon={FaLinkedin}
            title='LinkedIn'
            value='linkedin.com/in/guiferreira93/'
          />
        </section>
      </FadeIn>
    </main>
  )
}