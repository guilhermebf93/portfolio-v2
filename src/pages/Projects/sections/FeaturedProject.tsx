import { featuredProject } from '@/data/projects'
import { SectionLabel } from '@/components/ui/section-label'

export function FeaturedProject() {
  return(
    <section className='grid gap-16 lg:grid-cols-[1.4fr_0.8fr] lg:items-center'>
      <div className='group relative aspect-16/10 overflow-hidden rounded-3xl border bg-card'>
        <div className='absolute inset-0 bg-linear-to-t from-background/10 to-transparent opacity-60' />
        <img 
          src={featuredProject.image}
          alt={featuredProject.imageAlt}
          className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]'
        />
      </div>

      <div className='flex max-w-xl flex-col'>
        <SectionLabel>
          Projeto em destaque
        </SectionLabel>

        <h2 className='mt-5 text-4xl font-bold tracking-tight text-foreground md:text-5xl'>
          {featuredProject.title}
        </h2>

        <p className='mt-6 text-lg leading-relaxed text-muted-foreground'>
          {featuredProject.subtitle}
        </p>

        <div className='mt-8 flex flex-wrap gap-3'>
          {featuredProject.stacks.map(stack => (
            <span
              key={stack}
              className='rounded-full border bg-background px-4 py-2 text-sm text-foreground transition-colors hover:bg-muted'
            >
              {stack}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}