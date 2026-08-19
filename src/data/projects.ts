import type { Project } from '@/types/project'

export const projects: Project[] = [
  {
    id: 'check-km',
    title: 'Check KM',
    subtitle: 'Gestão veicular pessoal',
    description: 'Aplicação fullstack para gerenciamento de veículos, quilometragem e histórico de uso, desenvolvida com foco em uma arquitetura escalável e experiência de usuário moderna.',
    year: '2026',
    image: '/images/projects/check-km.png',
    imageAlt: 'Preview do Check KM',
    stacks: [
      'Next.Js',
      'Typescript',
      'SCSS',
      'Prisma',
      'PostgreSQL',
      'Supabase',
      'zod'
    ],
    github: 'https://github.com/guilhermebf93/check-km',
    demo: '',
    highlights: [
      'Autenticação com Google e proteção de rotas',
      'Gerenciamento completo de veículos e quilometragem',
      'Arquitetura fullstack com Next.js, Prisma e PostgreSQL',
      'Interface responsiva com abordagem mobile-first'
    ],
    status: 'in-progress'
  },
  {
    id: 'dev-playground',
    title: 'Dev Playground',
    subtitle: 'Laboratório de projetos e experimentos para desenvolvimento web',
    description: 'Plataforma criada para desenvolver, experimentar e demonstrar diferentes projetos web, explorando lógica, interfaces, APIs do navegador e novas tecnologias em aplicações independentes.',
    year: '2026',
    image: '/images/projects/dev-playground.png',
    imageAlt: 'Preview do Dev Playground',
    stacks: [
      'Next.js',
      'React',
      'Typescript',
      'SCSS'
    ],
    github: 'https://github.com/guilhermebf93/dev-playground',
    demo: '',
    highlights: [
      'Coleção de projetos independentes em uma única plataforma',
      'Identidade visual consistente entre os experimentos',
      'Projetos focados em lógica, UI, UX e fundamentos do desenvolvimento web',
      'Uso de APIs e recursos nativos do navegador',
    ],
    status: 'in-progress'
  },
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
    demo: 'https://guiferreira.dev',
    highlights: [
      'Motion design refinado',
      'Arquitetura escalável',
      'UI cinematográfica',
    ],
    status: 'completed'
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
    demo: '',
    highlights: [
      'Totalmente funcional',
      'Criação, edição, atualização e exclusão de chamados',
      'App fullstack usando MongoDB e Prisma'
    ],
    status: 'completed'
  },
]



export const featuredProject: Project = projects[0]