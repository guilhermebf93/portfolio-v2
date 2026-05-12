import type { Project } from '@/types/projects'

export const projects: Project[] = [
  {
    id: 'portfolio-v2',
    title: 'Portfolio V2',
    subtitle: 'Meu novo portfolio pessoal',
    description:
      'Portfolio moderno desenvolvido com React, Vite, Tailwind e Framer Motion.',
    year: '2026',
    image: '/images/projects/portfolio-v2.png',
    imageAlt: 'Preview do Portfólio',
    stacks: [
      'React',
      'Typescript',
      'Tailwind',
      'Framer Motion',
    ],
    github: 'https://github.com/...',
    demo: 'https://...',
    highlights: [
      'Motion design refinado',
      'Arquitetura escalável',
      'UI cinematográfica',
    ],
  },
]

export const featuredProject: Project = projects[0]