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
    github: 'https://github.com/guilhermebf93/portfolio-v2',
    demo: 'https://...',
    highlights: [
      'Motion design refinado',
      'Arquitetura escalável',
      'UI cinematográfica',
    ],
    status: 'in-progress'
  },
  {
    id: 'devcontrole',
    title: 'DevControle',
    subtitle: 'Projeto do Curso \'NextJS do zero ao avançado na pratica 2024\' pela Udemy. ',
    description:
      'Projeto feito durante a última seção do curso \'NextJS do zero ao avançado na prática 2024\', como revisão dos conceitos aprendidos.',
    year: '2024',
    image: '/images/projects/devcontrole.png',
    imageAlt: 'Preview do DevControle',
    stacks: [
      'React',
      'Typescript',
      'Tailwind',
      'Prisma',
      'MongoDB',
      'next-auth'
    ],
    github: 'https://github.com/guilhermebf93/devcontrole',
    demo: 'devcontrole-zeta.vercel.app',
    highlights: [
      'Totalmente funcional',
      'Criação, edição, atualização e exclusão de chamados',
      'App fullstack usando MongoDB e Prisma'
    ],
    status: 'completed'
  }
]



export const featuredProject: Project = projects[0]