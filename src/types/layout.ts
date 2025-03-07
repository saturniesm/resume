export type Navigation = 'aboutme' | 'experience' | 'project'

export type Project = 'project' | 'desc'

export type NavigationType =
  | 'text'
  | 'border'
  | 'background'
  | 'bg-transparant'
  | 'text-transparant'
  | 'border-hover'

export type TechNav = 'imaps' | 'eproc' | 'lsm' | 'eproc' | 'digi' | 'grantha'

const NAVIGATION = {
  ABOUT: 'ABOUT',
  PROJECT: 'PROJECT',
  EXP: 'EXP',
} as const

export type NavigationKey = keyof typeof NAVIGATION // "ABOUT" | "PROJECT" | "EXP"
