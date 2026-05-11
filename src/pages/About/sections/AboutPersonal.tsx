import { SectionLabel } from '@/components/ui/section-label'
import { FadeIn } from '@/components/motion/FadeIn'

export function AboutPersonal() {
  return(
    <section className='relative overflow-hidden py-40'>
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute bottom-0 right-0 h-125 w-125 rounded-full bg-cyan-500/5 blur-3xl' />
      </div>

      <div className='mx-auto max-w-5xl px-6'>

        <FadeIn>
          <SectionLabel>
            Além do código
          </SectionLabel>
        </FadeIn>

        <div className='space-y-8'>
          <FadeIn delay={0.1}>
            <p className='text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl'>
              Tecnologia, design, música e cultura visual influenciam 
              diretamente a forma como eu penso e construo aplicações.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className='max-w-3xl text-lg leading-relaxed text-muted-foreground/90'>
              Tenho interesse por interfaces modernas, identidade 
              visual forte e experiências digitais que transmitam clareza, 
              personalidade e sensação de fluidez — quase como ritmo em movimento.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className='max-w-3xl text-base leading-relaxed text-muted-foreground/70'>
              Fora do desenvolvimento, acompanho futebol, Fórmula 1, NBA, música, 
              meteorologia e tudo que envolve atmosfera, estética e experiência. 
              Crescer perto da praia também influenciou muito meu olhar para ritmo, 
              espaço e ambientação.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}