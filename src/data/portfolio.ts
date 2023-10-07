export type FrontendTech = "TypeScript" | "JavaScript" | "React" | "Redux" | "Preact" | "Next.js" | "Astro JS" | "Svelte" | "HTML" | "Twig";
export type BackendTech = "Express.js" | "Deno" | "Node.js" | "PHP";
export type StylingTech = "CSS" | "SCSS" | "Tailwind CSS" | "Bootstrap" | "Material UI" | "Daisy UI" | "Styled Components";
export type CMS = "WordPress" | "ACF" | "WooCommerce" | "Sylius";
export type Database = "MongoDB" | "MySQL";
export type Technology = FrontendTech | BackendTech | StylingTech | CMS | Database;

export type Project = {
  title: string,
  description: string,
  excerpt: string,
  link: string,
  technologies: Technology[],
  active: boolean,
  galleryImages: string[],
  favicon?: string,
  company?: "KERRIS" | "300.codes" | "BrandOxygen" | "Antygen.pl",
  type: "commercial" | "non-commercial",
  year?: number,
}

export const portfolio: Project[] = [
  {
    "title": "Agronomist",
    "excerpt": "Redesign and maintenance",
    "description": `Agronomist is a portal providing tools and informations in the field of agriculture.
      Work on the project was carried out in a two-person team.
      The main task was to redesign the website and improve its performance.
      I took the opportunity to refactor most of the code of the modified components.
      I was also responsible for implementing a package with reusable components.
    `,
    "link": "https://agronomist.pl/",
    "technologies": ["React", "TypeScript", "Redux", "Styled Components", "SCSS"],
    "active": true,
    "galleryImages": [
      "/projects/agronomist-1.png",
      "/projects/agronomist-2.png",
      "/projects/agronomist-3.png",
      "/projects/agronomist-4.png",
    ],
    "favicon": "/projects/agronomist-icon.png",
    "company": "300.codes",
    "type": "commercial",
    "year": 2023,
  },
  {
    "title": "Mygift.pl",
    "excerpt": "Visual product personalizator and admin panel",
    "description": `Product personalizator allows you to modify a product with your own graphics and texts.
      Work on the project was carried out in a two-person team.
      I was responsible for layout and components of the visual product personalizator and administration panel.
    `,
    "link": "https://mygift.pl/kreator/",
    "technologies": ["Next.js", "MongoDB", "Daisy UI", "Tailwind CSS"],
    "active": true,
    "galleryImages": [
      "/projects/mgd-1.png",
      "/projects/mgd-2.png",
      "/projects/mgd-3.png",
    ],
    "favicon": "/projects/mygift-icon.png",
    "company": "300.codes",
    "type": "commercial",
    "year": 2022,
  },
  {
    "title": "Trzech Kumpli",
    "excerpt": "A multilanguage website of brewery company",
    "description": `Trzech Kumpli is an award-winning brewery creating craft beers.
      The website is multilingual, displays all the products and has a blog.
      I was responsible for the implementation of the website and its maintenance.
      Project was dropped by other developer at the beginning and I was asked to finish it.
    `,
    "link": "https://trzechkumpli.pl/",
    "technologies": ["WordPress", "ACF", "CSS", "PHP", "MySQL", "JavaScript"],
    "active": true,
    "galleryImages": [
      "/projects/trzech-1.png",
      "/projects/trzech-2.png",
      "/projects/trzech-3.png",
      "/projects/trzech-4.png",
      "/projects/trzech-5.png",
      "/projects/trzech-6.png",
      "/projects/trzech-7.png",
    ],
    "favicon": "/projects/trzechkumpli-icon.png",
    "company": "BrandOxygen",
    "type": "commercial",
    "year": 2019,
  },
  {
    "title": "abagard.pl",
    "excerpt": "Portfolio website for tiler company and SEO",
    "description": `Abagard is a local business based in Poznań that provides tiling services.
      The website was created to present the company and improve its visibility at Google.
      Due to inflation and the war, the company stopped getting orders.
      I was responsible for the implementation of the website and SEO actions.
      Now the company has work planned for a year ahead thanks to my positioning at Google.
      He acquires customers not through recommendations as before, but from the Internet.
    `,
    "link": "https://abagard.pl",
    "technologies": ["Astro JS", "React", "Tailwind CSS", "SCSS"],
    "active": true,
    "galleryImages": [
      "/projects/abagard-1.png",
      "/projects/abagard-2.png",
      "/projects/abagard-3.png",
      "/projects/abagard-4.png",
      "/projects/abagard-5.png"
    ],
    "favicon": "/projects/abagard-icon.svg",
    "type": "non-commercial"
  },
  {
    "title": "adwokatwysocki.pl",
    "excerpt": "AdwokatWysocki.pl website with SEO focus.",
    "description": "",
    "link": "https://adwokatwysocki.pl",
    "technologies": ["Astro JS", "React", "Tailwind CSS", "SCSS"],
    "active": false,
    "galleryImages": [
      "/projects/adwokat-1.png",
      "/projects/adwokat-2.png",
      "/projects/adwokat-3.png",
      "/projects/adwokat-4.png",
    ],
    "favicon": "/projects/adwokat-icon.svg",
    "type": "non-commercial"
  },
  {
    "title": "Novavis Group",
    "excerpt": "Creating a full website with unique features",
    "description": "Company website for Novavis Group.",
    "link": "https://novavisgroup.pl/",
    "technologies": ["WordPress", "ACF", "CSS", "PHP", "MySQL", "JavaScript"],
    "active": true,
    "galleryImages": [
      "/projects/novavis-1.png",
      "/projects/novavis-2.png",
      "/projects/novavis-3.png",
    ],
    "favicon": "/projects/novavis-icon.webp",
    "company": "KERRIS",
    "type": "commercial",
    "year": 2023,
  },
  {
    "title": "Lema 3D",
    "excerpt": "Website for Lema3D company.",
    "description": "A multilanguage website for the Lema3D company.",
    "link": "https://lema3d.pl/",
    "technologies": ["WordPress", "ACF", "CSS", "PHP", "MySQL", "JavaScript"],
    "active": false,
    "galleryImages": [
      "/projects/lema-1.png",
      "/projects/lema-2.png",
      "/projects/lema-3.png",
    ],
    "favicon": "/projects/lema3d-icon.png",
    "company": "BrandOxygen",
    "type": "commercial",
    "year": 2019,
  },
  {
    "title": "Mediderm",
    "excerpt": "Website for MediDerm company.",
    "description": "A website for the Mediderm company.",
    "link": "https://mediderm.help/",
    "technologies": ["WordPress", "ACF", "CSS", "PHP", "MySQL", "JavaScript"],
    "active": false,
    "galleryImages": [
      "/projects/medi-1.png",
      "/projects/medi-2.png",
      "/projects/medi-3.png",
      "/projects/medi-4.png",
    ],
    "favicon": "/projects/mediderm-icon.jpg",
    "company": "BrandOxygen",
    "type": "commercial",
    "year": 2019,
  },
  {
    "title": "Vistula",
    "excerpt": "Landing page",
    "description": "A project for Vistula University.",
    "link": "https://pultusk.vistula.edu.pl/landingpage/",
    "technologies": ["WordPress", "ACF", "CSS", "PHP", "MySQL", "JavaScript"],
    "active": true,
    "galleryImages": [
      "/projects/vistula-1.png",
      "/projects/vistula-2.png",
      "/projects/vistula-3.png",
      "/projects/vistula-4.png",
    ],
    "favicon": "/projects/vistula-icon.png",
    "company": "KERRIS",
    "type": "commercial",
    "year": 2020,
  },
  {
    "title": "Glass System",
    "excerpt": "Website for Academy Asseco company.",
    "description": "Company website with product catalog.",
    "link": "https://glasssystem.com/",
    "technologies": ["WordPress", "ACF", "CSS", "PHP", "Twig", "MySQL", "JavaScript"],
    "active": true,
    "galleryImages": [
      "/projects/glass-1.png",
      "/projects/glass-2.png",
      "/projects/glass-3.png",
      "/projects/glass-5.png",
      "/projects/glass-6.png",
    ],
    "favicon": "/projects/glass-system-icon.png",
    "company": "KERRIS",
    "type": "commercial"
  },
  {
    "title": "academy.asseco.pl",
    "excerpt": "Website for Academy Asseco company.",
    "description": "A project for Academy Asseco company.",
    "link": "https://academy.asseco.pl/",
    "technologies": ["WordPress", "ACF", "CSS", "PHP", "Twig", "MySQL", "JavaScript"],
    "active": true,
    "galleryImages": [
      "/projects/asseco-1.png",
      "/projects/asseco-2.png",
      "/projects/asseco-3.png",
      "/projects/asseco-4.png",
      "/projects/asseco-5.png",
    ],
    "favicon": "/projects/asseco-icon.png",
    "company": "KERRIS",
    "type": "commercial"
  },
  {
    "title": "lindnerLab.pl",
    "excerpt": "Minimalist website LindnerLab.pl.",
    "description": "A minimalist website project.",
    "link": "https://lindnerlab.pl",
    "technologies": ["WordPress", "ACF", "SCSS", "PHP", "Twig", "MySQL", "JavaScript"],
    "active": false,
    "galleryImages": [
      "https://picsum.photos/200/340",
      "https://picsum.photos/200/341",
      "https://picsum.photos/200/342",
      "https://picsum.photos/200/343",
      "https://picsum.photos/200/344"
    ],
    "favicon": "/projects/lindnerlab-icon.png",
    "type": "commercial"
  },
  {
    "title": "Nawmar",
    "excerpt": "Website for Nawmar company.",
    "description": "A project for Nawmar company.",
    "link": "http://www.nawmar.pl/",
    "technologies": ["HTML", "CSS", "JavaScript"],
    "active": false,
    "galleryImages": [
      "https://picsum.photos/200/325",
      "https://picsum.photos/200/326",
      "https://picsum.photos/200/327",
      "https://picsum.photos/200/328",
      "https://picsum.photos/200/329"
    ],
    "favicon": "/projects/nawmar-icon.png",
    "company": "Antygen.pl",
    "type": "commercial",
    "year": 2017,
  },
];
