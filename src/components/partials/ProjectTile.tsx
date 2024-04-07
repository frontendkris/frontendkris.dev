import type {Project} from "../../data/portfolio";
import type {MouseEventHandler} from "react";

export type ProjectTileProps = {
  openProjectPopup: MouseEventHandler<HTMLDivElement>;
  project: Project;
};

const ProjectTile = ({
  openProjectPopup,
  project: {favicon, galleryImages, title, excerpt, company},
}: ProjectTileProps) => {
  return (
    <div
      className="flex gap-x-4 cursor-pointer group"
      onClick={openProjectPopup}
    >
      <div className="w-12 h-12 min-w-max bg-white aspect-square overflow-hidden rounded shadow-lg">
        <img
          src={favicon ? favicon : galleryImages[0]}
          alt="Project cover image"
          className="flex items-center justify-center w-full h-full m-auto aspect-square object-cover"
        />
      </div>
      <div className="flex items-start justify-between gap-4 w-full">
        <div className="flex flex-col justify-start items-start w-full">
          <h3 className="text-lg leading-tight font-medium mb-1 max-w-max transition-colors">
            {title}
          </h3>
          <p className={`text-gray-300 text-sm mb-2`}>{excerpt}</p>
          <p className={`text-gray-300 text-sm m-0`}>
            {!!company ? `at ${company}` : `freelance project`}
          </p>
        </div>
        <button
          className={`
            flex px-3 py-1 min-w-max max-w-max m-auto
            bg-neutral-800 group-hover:bg-neutral-700
            rounded-lg text-sm font-bold text-gray-100
            transition-all shadow-lg
          `}
        >
          View
        </button>
      </div>
    </div>
  );
};

export default ProjectTile;
