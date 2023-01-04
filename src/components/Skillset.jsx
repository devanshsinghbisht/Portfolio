import { motion } from 'framer-motion';
import { fadeIn , staggerContainer} from '../utils/motion';
import { Skillsets } from '../constants';
 

const Skillset = () => { 
    const setEffect = () =>  {
        document.addEventListener("mousemove" , (e) => {
            for(const card of document.getElementsByClassName("card")) {
                const rect = card.getBoundingClientRect(),
                    x = e.clientX - rect.left,
                    y = e.clientY - rect.top;
            
                card.style.setProperty("--mouse-x", `${x}px`);
                card.style.setProperty("--mouse-y", `${y}px`);
            };
        });
    }
    return (
        <>
            <div id="Skillset" className="container max-w-6xl py-[20px] my-10 lg:p-5 lg:py-20 md:py-20">
                <motion.h1  
                    variants={fadeIn('right' , 200)} 
                    initial="hidden"
                    whileInView="show"
                    transition = {{type : 'spring' , duration : 2 , bounce : 0.5}}
                    viewport={{ once: true }}
                    className='md:text-[48px] pb-10 text-[32px] text-black dark:text-slate-300 font-Ramabhadra text-center'>My Skillset
                </motion.h1>
                <motion.div 
                    variants={staggerContainer(0.1 , 0)} 
                    initial="hidden" 
                    whileInView="show" 
                    viewport={{ once: true }} 
                    id='card' 
                    className="container grid my-7 card grid-cols-3 md:gap-3 gap-3 " 
                    onMouseOver={setEffect} 
                    >
                    {Skillsets.map((item) => (
                        <motion.div     
                        key={item.key}
                        variants={fadeIn('up' , 15)}    
                        transition = {{type : 'spring' , duration : 1.3  , bounce : 0.7}}
                        className='w-2rem h-1rem md:p-3 p-2 bg-opacity-20 border-gray-800 rounded-md border-[1px] backdrop-blur-md flex md:justify-start items-center justify-center bg-zinc-800 dark:bg-zinc-900'>
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-11 h-11 fill-black dark:fill-slate-200' width="24" height="24" viewBox={item.viewbox}>
                                <path d={item.path} />
                            </svg>
                            <p className='hidden md:block flex-initial pl-5 lg:text-[21px] md:text-[16px] font-Ramabhadra text-black dark:text-slate-200'>{item.name}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </>
    )
}

export default Skillset;