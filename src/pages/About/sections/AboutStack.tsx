import { FadeIn } from '@/components/motion/FadeIn'
import { SectionLabel } from '@/components/ui/section-label'

const stacks = [
  {
    title: 'Frontend',
    description:
      'Construção de interfaces modernas com foco em performance, responsividade e experiência de usuário.',
    technologies: [
      'React',
      'Next.js',
      'Typescript',
      'TailwindCSS',
      'Vite'
    ]
  },
  {
    title: 'Backend',
    description:
      'Desenvolvimento de APIs e aplicações web integrando autenticação, banco de dados e regras de negócio.',
    technologies: [
      'Node.js',
      'Express',
      'PostgreSQL',
      'REST APIs',
      'Prisma'
    ]
  },
  {
    title: 'Arquitetura e Qualidade',
    description:
      'Organização de aplicações escaláveis utilizando componentização, separação de responsabilidades e boas práticas.',
    technologies: [
      'React Router',
      'Design Systems',
      'Clean Code',
      'Responsive Design',
      'Git'
    ]
  },
  {
    title: 'Estudando atualmente',
    description: 
      'Expandindo conhecimentos em ecossistema full stack, testes automatizados e desenvolvimento mobile.',
    technologies: [
      'Jest',
      'Testing library',
      'Cypress',
      'React Native',
      'GraphQL'
    ]
  }
]

export function AboutStack() {
  return(
    <section className='relative overflow-hidden border-t border-border/40 py-24 md:py-32'>
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute bottom-15 left-1/3 h-100 w-100 rounded-full bg-blue-500/5 blur-3xl' />
      </div>

      <div className='mx-auto max-w-7xl px-6'>

        <div className='mb-20'>
          <FadeIn>
            <SectionLabel>
              Especialidades
            </SectionLabel>
          </FadeIn>
        </div>

        <div className='grid gap-x-12 gap-y-12 md:gap-y-20 md:grid-cols-2'>
          {stacks.map((stack, index) => (
            <FadeIn delay={index * 0.1 + 0.1}>
              <div
                key={stack.title}
                className={
                  `group relative border-b border-border/40 pb-10 transition duration-500 ${
                    index % 2 !== 0 && 'md:translate-y-12'
                  }`
                }
              >
                <div className='absolute inset-0 pointer-events-none rounded-3xl bg-blue-500/3 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100' />
                
                <h3 className='mb-4 text-3xl tracking-tight font-semibold'>
                  {stack.title}
                </h3>

                <p className='mb-6 max-w-md leading-relaxed text-muted-foreground'>
                  {stack.description}
                </p>

                <div className='flex flex-wrap gap-3'>
                  {stack.technologies.map(tech => (
                    <span
                      key={tech}
                      className='text-sm text-foreground/70 transition-colors duration-300 hover:text-blue-300'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  )
}