// import { useState , useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn , staggerContainer} from '../utils/motion';
import { Skillsets } from '../constants'; 
import { dark } from './Navbar';
const Skillset = () => {  
    const SetEffect = () =>  {
        let closer = [];
        function clearcloser() {   
            closer.splice(0, closer.length).forEach((e) => {
                e.style.borderImage = null;
            });
        }
        // Effect #1
        document.querySelectorAll(".card").forEach((b) => {
            const color = b.style.background;
            const border = b.style.borderImage;
            b.onmouseleave = (e) => {   
                e.target.style.background = color;  
                e.target.style.borderImage = border;    
            }; 
            b.onmouseenter = () => {        
                clearcloser();  
            };
            b.addEventListener("mousemove", (e) => {
                const rect = e.target.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                if(!dark) {
                    e.target.style.background = `radial-gradient(circle at ${x}px ${y}px ,rgba(255,255,255,0.2),rgba(0, 0, 0, 0) )`;
                    e.target.style.borderImage = `radial-gradient(15% 70% at ${x}px ${y}px , rgba(255,255,255,1), rgb(107 114 128) ) 1 / 1px / 0 stretch`;
                } else  {
                    e.target.style.background = `radial-gradient(circle at ${x}px ${y}px , rgba(255,255,255,1),rgb(219, 219, 225) )`;
                    e.target.style.borderImage = `radial-gradient(20% 80% at ${x}px ${y}px , rgba(0,0,0,1), rgb(156 163 175) ) 1 / 1px / 0 stretch`;
                }   
            });
        });
        // Effect #2
        const element = document.querySelector(".card-grid"); 
        element.addEventListener("mousemove" , (e) => {
            clearcloser();
            const x = e.x;
            const y = e.y;  
            const el1 = document.elementFromPoint(x-25 , y-25);
            const el2 = document.elementFromPoint(x+25 , y-25);
            const el3 = document.elementFromPoint(x-25 , y+25);
            const el4 = document.elementFromPoint(x+25 , y+25);
            const myar = [el1 , el2 , el3 , el4];
            closer = myar.reduce((acc , r ) => {
                const brect = r.getBoundingClientRect();
                const bx = x - brect.left;
                const by = y - brect.top;
                if(!dark) {
                    r.style.borderImage = `radial-gradient(40% 90% at ${bx}px ${by}px ,rgba(255,255,255,1), rgb(107 114 128) ) 1 / 1px / 0px stretch `;
                } else {
                    r.style.borderImage = `radial-gradient(40% 90% at ${bx}px ${by}px ,rgba(0,0,0,1), rgb(156 163 175) ) 1 / 1px / 0px stretch `;
                }
                return [...acc , r];
            },[])
        })
        element.onmouseleave = () => {
            clearcloser();
        }
    }
      
    return (
        <>
            <div name="skillset" id="Skillset" className="container max-w-6xl py-[20px] my-5 lg:p-16 md:py-20">
                <motion.h1  
                    variants={fadeIn('right' , 200)} 
                    initial="hidden"
                    whileInView="show"
                    transition = {{type : 'spring' , duration : 2 , bounce : 0.5}}
                    viewport={{ once: true }}
                    id="heading"
                    className='md:text-[35px] text-[24px] text-black  dark:text-slate-300 font-Ramabhadra text-center'>My Skillset
                </motion.h1>
                <motion.div 
                    variants={staggerContainer(0.1 , 0)} 
                    initial="hidden" 
                    whileInView="show"  
                    viewport={{ once: true }}  
                    id="content"    
                    className="container grid my-7 p-5 card-grid grid-cols-3 gap-3" 
                    onMouseOver={SetEffect} 
                    >
                    {Skillsets.map((item) => (
                        <motion.div     
                            id={item.key}
                            key={item.key}
                            variants={fadeIn('up' , 15)}
                            transition = {{type : 'spring' , duration : 1.3  , bounce : 0.7}}
                            className=' card bg-zinc-200  md:p-4 p-2 border-gray-400 dark:border-gray-500 border-[1px] flex md:justify-start items-center justify-center  dark:bg-zinc-900' 
                        >
                                <svg xmlns="http://www.w3.org/2000/svg" className='w-9 h-9 pointer-events-none z-5 fill-black dark:fill-slate-200 bg-transparent' width="24" height="24" viewBox={item.viewbox}>
                                    <path d={item.path} />
                                </svg>
                                <p className='hidden md:block z-5 flex-initial pl-5 lg:text-[18px] pointer-events-none md:text-[16px] bg-transparent font-Ramabhadra text-black dark:text-slate-200'>{item.name}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </>
    )
}

export default Skillset;