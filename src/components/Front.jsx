import Debu from '../assets/Debu.jpg';
import { motion } from 'framer-motion';
import { fadeIn , staggerContainer} from '../utils/motion';

const Front = () => {
  return (    
    <>
      <div id='Home' className="container md:py-[8rem] lg:px-[3rem]  center grid md:grid-cols-2 md:gap-4 gap-2 md:grid-flow-col items-center justify-items-center">
        <div className="flex col-span-1 md:mt-20 mt-10 md:order-2   justify-items-center">
          <motion.img variants={fadeIn('left', 100)}  initial="hidden"  whileInView="show" viewport={{once : true}} whileHover={{scale : 1.1 }} src={Debu} alt="debu"
            className=' md:w-[360px] object-cover md:h-[330px] w-[230px] h-[220px] boxShadow Front_img dark:shadow-3xl dark:shadow-zinc-400'
          />
        </div>
        <motion.div variants={staggerContainer(0.2 , 0)} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex flex-col col-span-1  md:order-1 mt-20 w-full z-1 justify-center    ">
          <motion.h1 variants={fadeIn('right'  , 80)} className="md:text-[48px] text-[35px] text-black dark:text-slate-400 font-Pacifico md:text-left text-center">Hi! I'm Devansh</motion.h1> 
          <br />  
          <motion.p variants={fadeIn('right', 80)} className="md:text-[24px] text-[25px] text-black dark:text-slate-400 font-Alkalami md:text-left text-center">
            React Developer & Competitive Programmer  
          </motion.p>
          <br />
          <motion.p variants={fadeIn('right', 80)} className="md:text-[24px] text-[25px] text-black dark:text-slate-400 font-Alkalami md:text-left text-center">
          I am Devansh Singh Bisht. I am currently pursuing Mca. I love coding and Gaming
          </motion.p>
          <a href="https://drive.google.com/file/d/180rAM3Di-NFNYLWWeHjllSJ7Yh5J9wqD/view?usp=share_link" rel="noreferrer" target="_blank " className='md:text-left text-center justify-center center   '>
            <motion.button variants={fadeIn('right'  , 80)} whileHover={{scale : 1.1 , textShadow:"0px 0px 1px rgb(255,255,255)",boxShadow:"0px 0px 8px rgb(255,255,255)"}} className='rounded-[15px] md:justify-start justify-center text-white   dark:text-slate-200 bg-slate-800 dark:bg-blue-700 m-5 drop-shadow-lg lg:text-[19px] text-[14px] md:p-4 p-3'>Download CV</motion.button>
          </a>
        </motion.div>
      </div>
    </>
  );
};

export default Front;