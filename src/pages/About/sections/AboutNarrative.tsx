import { SectionLabel } from '@/components/ui/section-label'
import { FadeIn } from '@/components/motion/FadeIn'

export function AboutNarrative() {
  return(
    <section className='relative py-40'>
      <div className='mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 md:grid-cols-12'>

        <div className='relative md:col-span-3'>
          <FadeIn>
            <SectionLabel>
              Perfil
            </SectionLabel>
          </FadeIn>
        </div>
        

        <div className='md:col-span-9'>          
          <div className='space-y-8'>
            <FadeIn delay={0.1}>
              <p className='text-3xl leading-[1.15] tracking-tight text-foreground md:text-4xl'>
                Meu foco é desenvolver aplicações modernas que combinem
                performance, clareza visual e experiência de usuário.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className='max-w-3xl text-lg leading-relaxed text-muted-foreground'>
                Atualmente estudo e desenvolvo projetos voltados para frontend,
                backend e arquitetura de aplicações web, buscando criar produtos
                funcionais, escaláveis e visualmente bem construídos.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
                Tenho interesse especial por interfaces modernas, componentização,
                experiência do usuário e pela construção de aplicações com identidade
                visual forte e navegação fluida.
              </p>
            </FadeIn>

            <div className="absolute left-0 top-1/2 -z-10 h-100 w-100 -translate-y-1/2 rounded-full bg-blue-500/5 blur-3xl" />
          </div>
        </div>

      </div>
    </section>
  )
}