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
        As a recent Computer Science graduate with a Bachelor's of Science degree from UNLV, I'm a motivated software developer with expertise in Python, C#, SQL, and JavaScript, with an interest in web development and data science. Experienced in frameworks like React, Node.js, and .NET, I utilize tools such as Visual Studio Code, Docker, and PostgreSQL to create efficient, scalable solutions. My adaptability and quick learning enable me to tackle diverse challenges. I'm passionate about applying my skills to solve real-world problems and contribute to innovative projects. Let's connect and bring impactful solutions to life!
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
