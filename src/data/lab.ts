import productGallery from "@/assets/lab/nooma.png";
import dnd from "@/assets/lab/dnd-recruitment.png";
import pikachu from "@/assets/lab/pikachu.jpg";
import cart from "@/assets/lab/xstate-cart-4-fun.png";

export type Lab = {
  thumbnail: ImageMetadata;
  title: string;
  type: "CodePen" | "Demo";
  codepen?: string;
  demo?: string;
  github?: string;
};

export const data: Lab[] = [
  {
    thumbnail: cart,
    title: "xState cart 4 fun",
    type: "Demo",
    github: "https://github.com/frontendkris/xstate-cart-4-fun",
    demo: "https://xstate-cart-4-fun.vercel.app/",
  },
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
