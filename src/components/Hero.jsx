import { styles } from "../styles";
import avatar from "../assets/avatar.png";

const Hero = () => {
  return (
    <section className={`relative w-full mx-auto hero-section min-h-[60vh] sm:min-h-screen`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className='flex flex-row items-start gap-5'>
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className='text-[#915EFF]'>Brandon</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I'm a software developer with an interest in web development, data science, and IT.
            </p>
          </div>
          <div className='flex-shrink-0'>
            <img src={avatar} alt="Brandon" className='profile-picture' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;