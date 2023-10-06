import type { Project } from '../../data/portfolio';
import type { MouseEventHandler } from 'react';

export type ProjectTileProps = {
  openProjectPopup: MouseEventHandler<HTMLDivElement>;
  project: Project;
}

const ProjectTile = ({ openProjectPopup, project: { favicon, galleryImages, title, excerpt, company } }: ProjectTileProps) => {
  return (
    <div className="flex gap-x-4 cursor-pointer group" onClick={openProjectPopup}>
      <div className="w-12 h-12 min-w-max bg-white aspect-square overflow-hidden rounded">
        <img src={favicon ? favicon : galleryImages[0]} alt={title} className="flex items-center justify-center w-full h-full m-auto aspect-square object-cover" />
      </div>
      <div className="flex flex-col justify-start items-start w-full">
        <h3 className='text-lg leading-tight font-medium mb-1 max-w-max group-hover:text-supernova-500 transition-colors'>{title}</h3>
        <p className={`text-gray-300 text-sm mb-2`}>{excerpt}</p>
        <p className={`text-gray-300 text-sm m-0`}>{!!company ? `at ${company}` : `freelance project`}</p>
      </div>
    </div>
  )
}

export default ProjectTile;