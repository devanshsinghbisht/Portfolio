import { motion } from "framer-motion";
import { staggerContainer , fadeIn , zoomIn} from "../utils/motion";
const  Footer = () => {
  return (
    <>
        <div className="bg-gray-600 dark:bg-zinc-800 w-full mt-auto h-30 md:px-10 px-3">
            <motion.div variants={staggerContainer(0.2 , 0)} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex flex-row md:gap-10 gap-2 p-0">
                <motion.div variants={fadeIn('up' , 20  )} className="md:flex hidden flex-col gap-5 py-5 h-full md:basis-1/4 items-end">  
                    <h1 className="md:text-[23px] text-[18px] text-white font-Ramabhadra lg:pr-7">Devansh</h1>
                    <p className="md:text-[20px] text-[16px] text-white font-Ramabhadra">React Developer</p>
                </motion.div>
                <div className="flex flex-col gap-5 h-full md:basis-2/4  basis-2/3 items-center">
                    <div className="flex flex-row py-5 md:gap-20 gap-5">
                        <motion.div variants={fadeIn('up' , 10  )} transition = {{type : 'spring' , duration : 0.5 , bounce : 0.5}}>                          
                            <a href="#Project" className="text-slate-300 md:text-[18px] hover:text-white text-[16px] font-Ramabhadra">Projects</a>
                        </motion.div>
                        <motion.div variants={fadeIn('up' , 10  )} transition = {{type : 'spring' , duration : 0.5 , bounce : 0.5}}>                             
                            <a href="#Skillset" className="text-slate-300 md:text-[18px] hover:text-white first-letter:text-[16px] font-Ramabhadra">Skillset</a>
                        </motion.div>
                        <motion.div variants={fadeIn('up' , 10  )} transition = {{type : 'spring' , duration : 0.5 , bounce : 0.5}}>                          
                            <a href="#Contact" className="text-slate-300 md:text-[18px] hover:text-white first-letter:text-[16px] font-Ramabhadra">Contact me</a>
                        </motion.div>
                    </div>  
                    <motion.span variants={zoomIn()} className="text-white  ">@2023 all rights reserved</motion.span>
                </div>
                <div className="flex flex-col basis-1/4 gap-3 h-full py-5   ">
                    <motion.a variants={fadeIn('up' , 10  )} transition = {{type : 'spring' , duration : 0.5 , bounce : 0.5}} href="https://www.linkedin.com/in/devansh-bisht-b72905199/" target="_blank" className="text-slate-300 md:text-[18px] hover:text-white first-letter:text-[16px] font-serif">Linkedin</motion.a>
                    <motion.a variants={fadeIn('up' , 10  )} transition = {{type : 'spring' , duration : 0.5 , bounce : 0.5}} href="https://www.instagram.com/devansh_singh_bisht/" target="_blank" className="text-slate-300 md:text-[18px] hover:text-white first-letter:text-[16px] font-serif">Instagram</motion.a>
                    <motion.a variants={fadeIn('up' , 10  )} transition = {{type : 'spring' , duration : 0.5 , bounce : 0.5}} href="https://github.com/devanshsinghbisht" target="_blank" className="text-slate-300 md:text-[18px] hover:text-white first-letter:text-[16px] font-serif">Github</motion.a>
                </div>
            </motion.div>
        </div>
    </>   
  )
}

export default Footer;