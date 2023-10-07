import { useRef, useState, } from 'react';
import type { Project } from '../data/portfolio';
import { portfolio } from '../data/portfolio';
import ProjectTile from './partials/ProjectTile';

const PortfolioContent = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const overlay = useRef<HTMLDivElement>(null);
  const popup = useRef<HTMLDivElement>(null);

  const openProjectPopup = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, project: Project): void => {
    setActiveProject(project);
  }

  const closeProjectPopup = (e: React.MouseEvent<any, MouseEvent>): void => {
    popup.current?.classList.add("animation-fade-out");
    overlay.current?.classList.add("animation-blur-out");
    
    setTimeout(() => {
      setActiveProject(null);
    }, 300);
  }

  return (
    <>
      {
        portfolio
          .filter((el) => el.active === true)
          .map((project: Project) => (
            <ProjectTile
              key={project.title}
              project={project}
              openProjectPopup={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => openProjectPopup(e, { ...project })}
            />
          ))
      }
      {
        !!activeProject &&
        <div
          ref={overlay}
          onClick={closeProjectPopup}
          className='
            fixed inset-0
            flex items-center justify-center
            backdrop-blur-sm transition-all
            z-40 animation-blur-in
          '
        >
          <div
            ref={popup}
            className='
              mt-0 m-auto opacity-0
              bg-gradient-to-b from-neutral-800 to-neutral-900 drop-shadow-2xl md:rounded-xl
              w-[900px] max-w-full max-h-full h-full overflow-y-scroll overflow-x-hidden no-scrollbar
              z-50 animation-fade-in
            '
            onClick = {(event) => event.stopPropagation()}
          >
            <div className='relative flex flex-col gap-3 p-6 pb-6 md:p-12'>
              <svg
                onClick={closeProjectPopup}
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="w-6 h-6 absolute right-6 top-6 md:right-12 md:top-12 cursor-pointer hover:text-supernova-500 transition-colors">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
              <h2 className="text-2xl leading-tight font-medium mb-0 max-w-max">{activeProject.title}</h2>
              <div className='text-gray-300 text-sm m-0'>{activeProject.excerpt}</div>
              {/* <p className='text-gray-300 text-sm m-0 max-w-max'>
                {!!activeProject.company ? `Project realized for ${activeProject.company}` : `Freelance project`}
              </p> */}
            </div>
            <div className="flex flex-nowrap overflow-x-scroll no-scrollbar px-6 md:px-12 md:-mt-6 mb-12">
              {
                activeProject.technologies.map((tech: string) =>
                <div
                  key={`${activeProject.title}-${tech}`}
                  className='bg-neutral-900 rounded-lg text-sm text-gray-300 px-4 py-2 mr-2 min-w-max'
                  >
                  {tech}
                </div>)
              }
            </div>
            <div className="animation-slide-left flex flex-nowrap gap-x-4 w-full overflow-x-scroll scroll-smooth gallery scroll-horizontally no-scrollbar px-6 md:px-12">
              {
                activeProject.galleryImages.map((image: string) =>
                  <div
                    key={`${activeProject.title}-${image}`}
                    className='w-full min-w-full lg:min-w-[80%] h-auto lg:h-96 bg-neutral-950 lg:py-8 aspect-auto rounded-lg'
                  >
                    <picture>
                      <img
                        loading='lazy'
                        src={image}
                        alt={activeProject.title}
                        className='flex items-center justify-center w-full h-full m-auto object-contain rounded'
                      />
                    </picture>
                  </div>
                )
              }
            </div>
            <div className='flex flex-col gap-6 p-6 pt-12 pb-9 md:p-12'>
              <p className='text-gray-300 text-base md:text-lg m-0 max-w-max md:whitespace-pre-line md:leading-loose'>{activeProject.description}</p>
              <a
                role="button"
                href={activeProject.link}
                target="_blank"
                rel="nofollow"
                className='
                  flex px-16 py-2 max-w-max
                  bg-neutral-700 hover:bg-neutral-600
                  border border-neutral-700
                  rounded-lg text-base text-gray-300
                  transition-all
                '>Visit</a>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default PortfolioContent;