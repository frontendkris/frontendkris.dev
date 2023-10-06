import { useState, } from 'react';
import type { Project } from '../data/portfolio';
import { portfolio } from '../data/portfolio';
import ProjectTile from './partials/ProjectTile';

const PortfolioContent = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const handleTileClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, project: Project): void => {
    setActiveProject(project);
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
              handleTileClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => handleTileClick(e, { ...project })}
            />
          ))
      }
      {
        !!activeProject &&
        <div
          onClick={() => setActiveProject(null)}
          className='
            fixed inset-0
            flex items-center justify-center
            backdrop-blur-sm transition-all
            z-40
          '
        >
          <div
            className='
              md:mt-12
              bg-gradient-to-b from-neutral-800 to-neutral-900 drop-shadow-2xl md:rounded-xl
              w-[900px] max-w-full max-h-full overflow-y-scroll no-scrollbar
              m-auto z-50
            '
            onClick = {(event) => event.stopPropagation()}
          >
            <div className='flex flex-col gap-6 p-6 pb-3 md:p-12'>
              <h2 className="text-2xl leading-tight font-medium mb-0 max-w-max">{activeProject.title}</h2>
              <p className='text-gray-300 text-sm m-0'>{activeProject.excerpt}</p>
              {/* <p className='text-gray-300 text-sm m-0 max-w-max'>
                {!!activeProject.company ? `Project realized for ${activeProject.company}` : `Freelance project`}
              </p> */}
            </div>
            <div className="flex flex-nowrap overflow-x-scroll no-scrollbar px-6 md:px-12 mb-6">
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
            <div className="flex flex-nowrap gap-x-4 w-full overflow-x-scroll scroll-smooth gallery scroll-horizontally no-scrollbar px-6 md:px-12">
              {
                activeProject.galleryImages.map((image: string) =>
                  <div
                    key={`${activeProject.title}-${image}`}
                    className='w-full min-w-full lg:min-w-[80%] h-auto lg:h-96 bg-neutral-950 lg:py-8 aspect-auto rounded-lg'
                  >
                    <img
                      src={image}
                      alt={activeProject.title}
                      className='flex items-center justify-center w-full h-full m-auto object-contain rounded'
                    />
                  </div>
                )
              }
            </div>
            <div className='flex flex-col gap-6 p-6 md:p-12'>
              <p className='text-gray-300 text-base md:text-lg m-0 max-w-max'>{activeProject.description}</p>
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