import React from 'react'
import { motion } from "framer-motion";
import { fadeIn , zoomIn } from "../utils/motion";
import { Myprojects } from "../constants";
import ProjectCard from './ProjectCard';
const Project = () =>  {
  return (
    <>
        <div name="projects" id='Project' className="container max-w-6xl md:px-5 py-[20] my-5 lg:p-5 lg:py-20 md:py-20">
            <motion.h1  
                variants={fadeIn('right' , 20)} 
                initial="hidden"
                whileInView="show"
                transition = {{type : 'spring' , duration : 2 , bounce : 0.5}}
                viewport={{ once: true }}
                className='md:text-[35px]  text-[24px] justify-center text-center text-black dark:text-slate-300 font-Ramabhadra'>My Projects 
            </motion.h1>
            <motion.p variants={fadeIn('left' , 20)} initial="hidden" whileInView="show"  transition = {{type : 'spring' , duration : 2 , bounce : 0.5}} viewport={{ once: true }} className="text-black dark:text-slate-300  font-Ramabhadra my-5 text-lg text-center">Here are a few past projects I've worked on.</motion.p>    
 
            <div className="flex items-center my-10 gap-10 justify-center rounded-md">
                <div className="grid grid-col-1 gap-16">
                    {Myprojects.slice(0, 3).map((item) => ( 
                        <motion.div 
                        key={item.key}
                        variants={zoomIn()}    
                        initial="hidden"
                        whileInView="show"
                        transition = {{type : 'tween' , duration : 0.5}}
                        viewport={{ once: true }} 
                        className="group relative items-center justify-center overflow-hidden cursor-default rounded-lg">
                        <ProjectCard e={item} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}

export default Project;