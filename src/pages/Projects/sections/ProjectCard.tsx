import type { Project } from '@/types/project'

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({
  project
}: ProjectCardProps) {
  return(
    <article className='group relative flex flex-col overflow-hidden rounded-3xl border bg-card transition-colors duration-700 cursor-pointer hover:bg-muted/30'>
      <div className='relative overflow-hidden'>
        <div className='absolute inset-0 z-10 bg-linear-to-t from-background/20 to-transparent opacity-60' />
        <img 
          src={project.image}
          alt={project.imageAlt}
          className='aspect-video w-full object-cover transition duration-700 group-hover:scale-[1.03]'
        />
      </div>

      <div className='flex flex-1 flex-col space-y-6 p-7'>
        <div className='flex items-center justify-between gap-4'>
          <h3 className='text-2xl font-semibold leading-tight tracking-tight'>
            {project.title}
          </h3>

          <span className='text-sm text-muted-foreground'>
            {project.year}
          </span>
        </div>

        <p className='text-[15px] leading-relaxed text-muted-foreground'>
          {project.description}
        </p>

        <div className='flex flex-wrap gap-2'>
          {project.stacks.map(stack => (
            <span
              key={stack}
              className='rounded-full border bg-background px-3 py-1 text-xs font-medium'
            >
              {stack}
            </span>
          ))}
        </div>

        <div className='mt-auto flex items-center justify-center gap-5 border-t pt-5 text-sm font-medium'>
          <a target='_blank' href={project.github} className='text-muted-foreground transition-colors hover:text-foreground'>Github</a>
          {project.demo ? (
            <a
              target="_blank"
              href={project.demo}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Demo
            </a>
          ) : (
            <span className="cursor-not-allowed text-muted-foreground/40">
              Demo
            </span>
          )}
        </div>
      </div>
    </article>
  )
}