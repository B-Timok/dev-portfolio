import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import arrowLeftIcon from "../assets/arrow-left.png";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  play_game_link,
  report_link,
}) => {
return (
    <div>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>

        {play_game_link && (
          <div className='mt-4'>
            <a
              href={play_game_link}
              target='_blank'
              rel='noopener noreferrer'
              className='text-orange-500 hover:underline flex items-center'
            >
              Play a quick game
              <img src={arrowLeftIcon} alt="Arrow Icon" className='w-4 h-4 ml-2' />
            </a>
          </div>
        )}

        {report_link && (
          <div className='mt-4'>
            <a
              href={report_link}
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-500 hover:underline flex items-center'
            >
              Read the report
              <img src={arrowLeftIcon} alt="Arrow Icon" className='w-4 h-4 ml-2' />
            </a>
          </div>
        )}

      </Tilt>
    </div>
  );
};

const Works = () => {
  return (
    <section className="works-section">
      <div>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </div>

      <div className='w-full flex'>
        <p
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <div key={`project-${index}`}>
            <ProjectCard index={index} {...project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Works, "projects");