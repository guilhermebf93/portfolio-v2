import { FadeIn } from '@/components/motion/FadeIn'
import { SectionLabel } from '@/components/ui/section-label'

export function AboutHero () {
  return(
    <section className='relative overflow-hidden border-b border-border/40 bg-linear-to-b from-background to-background/95'>
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute left-1/2 top-0 h-125 w-125 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl' />
          
        <div className='absolute right-0 top-1/3 h-75 w-75 rounded-full bg-cyan-400/20 blur-3xl' />
      </div>

      <div className='mx-auto flex min-h-screen max-w-7xl items-center px-6 py-40'>
        <div className='max-w-5xl'>
          <FadeIn>
            <SectionLabel>
              Sobre mim
            </SectionLabel>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <h1 className="text-4xl font-semibold leading-[0.95] tracking-tight md:text-8xl">
              Desenvolvedor focado em criar aplicações modernas,
              funcionais e visualmente marcantes.
            </h1>
          </FadeIn>          

          <FadeIn delay={0.4}>
            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground/90">
              Construindo experiências digitais com foco em frontend,
              arquitetura e interfaces que unem estética e usabilidade.
            </p>
          </FadeIn>
        </div>
      </div>

    </section>
  )
}