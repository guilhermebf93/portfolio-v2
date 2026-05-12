import { Container } from '@/components/ui/container'

import { ProjectsHero } from './sections/ProjectsHero'
import { FeaturedProject } from './sections/FeaturedProject'
import { ProjectsGrid } from './sections/ProjectsGrid'

export function Projects() {
  return(
    <Container>
      <main className='relative overflow-hidden'>
        <ProjectsHero />

        <div className='mt-24 space-y-32'>
          <FeaturedProject />
          <ProjectsGrid />
        </div>
      </main>
    </Container>
  )
}