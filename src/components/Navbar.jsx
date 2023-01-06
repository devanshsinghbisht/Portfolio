import { useState  } from "react";
import { motion } from "framer-motion";
import { fadeIn , staggerContainer } from "../utils/motion";
import { Navigation } from "../constants";
import { hamburger } from '../constants';
import UseDarkSide from "./UseDarkSide";
import { DarkModeSwitch } from 'react-toggle-dark-mode';

export let dark = 1;

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [navbar , setNavbar] = useState(false);
 
  const changeNavbar = () => {
    if(window.scrollY >= 50){
      setNavbar(true); 
    } else {
      setNavbar(false);
    }
  }

  const [colorTheme, setTheme] = UseDarkSide(); 
  const [darkSide, setDarkSide] = useState( colorTheme  === "dark" ? true : false);
  dark = darkSide;
  const toggleDarkMode = (checked) => {
    setTheme(colorTheme); 
    setDarkSide(checked);
  };

  window.addEventListener('scroll' , changeNavbar);   
  return (
    <nav 
      variants={fadeIn('down' , 'tyeen' , 0.2 , 0 , 40)}
      className={ navbar ? 'w-full self-stretch z-100 flex px-5 py-3 flex-row justify-between items-center fixed top-0  bg-zinc-400  dark:bg-zinc-800  drop-shadow-lg' : 'w-full px-5 flex py-4 justify-between items-center navbar' }  
    > 
      <motion.div whileHover = {{scale : 1.2  }} className="flex md:justify-start md:order-1 order-2  justify-center "> 
        <a  href="#Home" className=" drop-shadow-3xl  px-10 font-irish in-shadow items-center font-bold text-black  dark:text-slate-300  md:text-[30px] text-[24px]">DSB</a> 
      </motion.div>
      < motion.ul variants={staggerContainer(0.2 , 0)} initial="hidden" whileInView="show" viewport={{ once: true }} className="list-none md:flex hidden justify-center items-center flex-1 md:order-2">
        {Navigation.map((item) => (
          <motion.li 
            key={item.key}  
            variants={fadeIn('up', 5)}    
            whileHover = {{scale : 1.2  }}
            transition = {{type : 'spring' , duration : 0.7 , bounce : 0.7}} 
            className="font-Ramabhadra text-[16px] mr-10 "  
          >
            <a
              href={item.href}     
              className={ "text-black dark:text-slate-300  text-lg  m-2"}
            > 
              {item.name}
            </a>
          </motion.li>
        ))}
      </motion.ul>
      {/* Mobole Navabr */}
      <div className="md:hidden flex justify-start items-center ">
        <svg  
          xmlns="http://www.w3.org/2000/svg" className='w-[24px] h-[24px] fill-black dark:fill-slate-100   hover:cursor-pointer z-30' width="20"   height="12" viewBox={toggle ? hamburger[0].viewbox : hamburger[1].viewbox}
          alt="menu"   
          onClick={() => setToggle((prev) => (!prev))}
        >
          <path d={toggle ? hamburger[0].path : hamburger[1].path} />
        </svg>    
        <motion.div variants = {fadeIn('right' , 30)} initial="hidden" whileInView="show" className={`${toggle ? 'flex p-5 fixed w-1/2 justify-center  h-screen bg-slate-400 bg-opacity-95 dark:bg-slate-800 dark:bg-opacity-95 top-0 left-0 z-20' : 'hidden'} `}>
        <motion.ul variants={staggerContainer(0.15 , 0)} initial="hidden" whileInView="show" className="grid grid-cols gap-4 content-center place-items-center">
          {Navigation.map((item) => ( 
            <motion.li  
            key={item.key}
              variants = {fadeIn('right' , 30)}
              whileHover = {{scale : 1.1}}  
              transition = {{type : 'spring' , duration : 0.8 , bounce : 0.5}}
              className="font-Ramabhadra text-[16px] mr-1 mb-5 py-2  "  
            >
              <a
                href={item.href}     
                className={ "justify-center text-black dark:text-slate-300  items-center text-lg hover:text-white  m-2"}
              > 
                {item.name}
              </a>
              <hr />
            </motion.li>
          ))}
        </motion.ul>
        </motion.div>
      </div>
      <div className="lg:mx-4 order-3 ">
        <DarkModeSwitch
          checked={darkSide}
          onChange={toggleDarkMode}
          sunColor={"white"}
          moonColor={"black"}
          size={35} 
        /> 
      </div>
    </nav>
  )
}

export default Navbar;