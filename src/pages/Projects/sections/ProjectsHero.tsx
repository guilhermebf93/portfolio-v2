import { FadeIn } from '@/components/motion/FadeIn'
import { SectionLabel } from '@/components/ui/section-label'

export function ProjectsHero() {
  return(
    <section className='relative pt-32 md:pt-40'>
      <div className='absolute inset-0 pointer-events-none overflow-hidden'>
        <div className='absolute left-50 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl' />
      </div>

      <div className='max-w-5xl'>        
        <FadeIn>
          <SectionLabel>
            Projetos Selecionados
          </SectionLabel>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className='mt-8 text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl'>
            Interfaces, 
            <br />
            aplicações
            <br />
            e experiências digitais
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className='mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground'>
            Projetos desenvolvidos com foco em experiência do usuário,
            performance e interfaces modernas.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}