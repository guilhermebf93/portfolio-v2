export type Project = {
  id: string,
  title: string,
  subtitle: string,
  description: string,

  year: string,

  image: string,
  imageAlt: string,

  stacks: string[],

  github?: string,
  demo?: string,

  status?: 'completed' | 'in-progress',

  highlights?: string[]
}