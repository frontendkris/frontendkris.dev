export type Lab = {
  thumbnail: string,
  title: string,
  type: "CodePen" | "Demo",
  codepen?: string,
  demo?: string,
  github?: string,
}

export const data: Lab[] = [
  {
    thumbnail: '/lab/dnd-recruitment.png',
    title: 'D&D skills tree',
    type: 'Demo',
    github: 'https://github.com/frontendkris/front-end-developer-challenge',
    demo: 'https://front-end-developer-challenge-g2mx9qb14-frontendkris.vercel.app/',
  },
  {
    thumbnail: '/lab/pikachu.jpg',
    title: 'CSS only Pikachu',
    type: 'CodePen',
    codepen: 'https://codepen.io/frontendkris/pen/BaYOdVb',
  }
]