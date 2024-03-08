import productGallery from "@/assets/lab/nooma.png";
import dnd from "@/assets/lab/dnd-recruitment.png";
import pikachu from "@/assets/lab/pikachu.jpg";

export type Lab = {
  thumbnail: string;
  title: string;
  type: "CodePen" | "Demo";
  codepen?: string;
  demo?: string;
  github?: string;
};

export const data: Lab[] = [
  {
    thumbnail: productGallery,
    title: "Product Gallery",
    type: "Demo",
    github: "https://github.com/frontendkris/noo.ma-recruitment-task",
    demo: "https://noo-ma-recruitment-task.vercel.app/",
  },
  {
    thumbnail: dnd,
    title: "RPG skills tree",
    type: "Demo",
    github: "https://github.com/frontendkris/front-end-developer-challenge",
    demo: "https://front-end-developer-challenge-g2mx9qb14-frontendkris.vercel.app/",
  },
  {
    thumbnail: pikachu,
    title: "CSS only Pikachu",
    type: "CodePen",
    codepen: "https://codepen.io/frontendkris/pen/BaYOdVb",
  },
];
