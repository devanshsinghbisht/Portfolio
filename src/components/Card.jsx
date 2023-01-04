import { motion } from 'framer-motion';
const Card = ({i , name , path , viewBox}) => {
    return (
        <>
        <motion.div 
            key={i}
            animate = {{y:0 }}
            initial = {{y : 100} }  
            transition = {{type : 'spring' , duration : 1 , bounce : 0.5}}
            className='w-2rem h-1rem md:p-3 p-2 bg-opacity-80 border-gray-500 rounded-md border-2 backdrop-blur-md flex md:justify-start items-center justify-center bg-gray-300'>
            <svg xmlns="http://www.w3.org/2000/svg" className='w-11 h-11 ' width="24" fill="black" height="24" viewBox={viewBox}>
                <path d={path} />
            </svg>
            <p className='hidden md:block flex-initial pl-5 lg:text-[21px] md:text-[16px] font-Ramabhadra'>{name}</p>
        </motion.div>
        </>
    )
}

export default  Card;