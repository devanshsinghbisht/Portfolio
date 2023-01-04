import { links } from "../constants";

const ProjectCard = (e) => {  
  const tags = e.e.tags;
  return (
    <>
        <div className="md:h-[18rem] md:w-[35rem] h-[13rem] w-[20rem]">     
            <img className="h-full w-full shrink object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500" src={e.e.img} alt={e.e.name} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black" ></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[40%] group-hover:translate-y-0 transition-all duration-500">
          <h1 className="md:text-3xl text-[1.1rem]  font-bold  text-white">{e.e.name}</h1>
          <p className="md:text-lg text-sm italic text-white mb-3 hidden group-hover:flex opacity-0 group-hover:opacity-100 tainsition-opacity duration-300">{e.e.text}</p>
          <div className="group-hover:flex flex-row hidden gap-1 ">
            {tags.map((item ) => ( 
              <span key={item} className="flex flex-wrap text-white md:text-md text-sm bg-slate-700 p-1 rounded-md content-center ">{item}</span>
            ))} 
          </div>
          <div className="group-hover:flex flex-row flex-wrap content-center hidden p-2 ">
            <a href={e.e.github}   target="_blank" rel="noreferrer" >
              <svg xmlns="http://www.w3.org/2000/svg" className='w-11 h-11 fill-slate-200' width="24" height="24" viewBox={links[0].viewbox}>
                  <path d={links[0].path} />
              </svg>  
            </a>
            {e.e.live !== 'false' && (
              <a href={e.e.live} target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" className='w-9 h-9 fill-slate-200 content-center pt-1' width="24" height="24" viewBox={links[1].viewbox}>
                  <path d={links[1].path} />
              </svg>  
            </a>
            )}
            
          </div>

        </div>
    </>
  )
}

export default ProjectCard;