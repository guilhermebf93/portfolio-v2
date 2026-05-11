import { AboutHero } from './sections/AboutHero'
import { AboutNarrative } from './sections/AboutNarrative'
import { AboutStack } from './sections/AboutStack'
import { AboutPersonal } from './sections/AboutPersonal'

export function About() {
  return(
    <main className='bg-background text-foreground'>
      <AboutHero />
      <AboutNarrative />
      <AboutStack />
      <AboutPersonal />
    </main>
  )
}