import React from "react";
import Tilt from "react-parallax-tilt";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, icon, title }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <div className='w-full light-blue-pink-gradient p-[1px] rounded-[20px] shadow-card'>
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Who I Am.</h2>
      </div>

      <p className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
      I'm a Computer Science graduate from UNLV and a software developer specializing in full-stack web development. I build scalable solutions using Next.js, TypeScript, Python, C#, SQL, and Supabase, with expertise in React, Node.js, Docker, and PostgreSQL. I have hands-on experience integrating and developing different APIs and managing Git, Github, and version control.

      Driven by a passion for problem-solving and innovation, I thrive in fast-paced, evolving projects. Let's connect and build something great!
      </p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};


export default SectionWrapper(About, "about");
