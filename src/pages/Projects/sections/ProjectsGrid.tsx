import { projects } from '@/data/projects'
import { ProjectCard } from './ProjectCard'

export function ProjectsGrid() {
  return(
    <section className='pb-24 md:pb-32'>
      <div className='grid gap-8 md:grid-cols-2 lg:gap-10'>
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}