import { FaArrowRight, FaGithub } from 'react-icons/fa'
import { projects } from '../data/ProjectsElements'
import { getProjectButtons } from '../data/ProjectButtons'
import Headers from './Headers'

const Projects = () => {
    return (
        <section className='px-4 py-10 sm:px-6 sm:py-14'>
            <Headers header='Projects' id='projects' />
            <div className='flex justify-center mt-8'>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 text-white gap-5 w-full max-w-screen-xl'>
                    {projects.map(project => (
                        <div key={project.id} className='border rounded-lg text-white p-5 flex flex-col gap-6 hover:shadow-lg transition-shadow duration-300 relative'>
                            <div className='flex items-center justify-end w-full'>
                                <span className='bg-indigo-950/80 text-indigo-300 border border-indigo-700/50 text-[11px] font-medium px-3 py-1 rounded-full shadow-sm flex items-center gap-1.5 transform-transition duration-400 hover:scale-120'>
                                    <span className='w-1.5 h-1.5 rounded-full bg-indigo-400'></span>
                                    {project.platform}
                                </span>
                            </div>

                            <div className='overflow-hidden rounded-lg h-52 w-full group'>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                                />
                            </div>

                            <div className='flex justify-center items-center flex-col gap-7'>
                                <h1 className='text-[#F59E0B] font-medium text-lg sm:text-xl text-center'>{project.title}</h1>
                                <p className='text-slate-400 leading-relaxed max-w-md break-words text-justify'>{project.description}</p>

                                <div className='flex items-center justify-center gap-1 sm:gap-1.5 w-full py-1'>
                                    {project.technologies?.slice(0, 5).map((tech, index) => (
                                        <span
                                            key={index}
                                            className='whitespace-nowrap bg-slate-800/80 text-slate-300 border border-slate-700/60 text-[9px] sm:text-[11px] font-mono px-1.5 sm:px-2 py-0.5 rounded-md hover:bg-slate-700 transition-colors'
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className='flex items-center justify-between gap-3 w-full mt-2'>
                                    {getProjectButtons(project).map(btn => (
                                        <a key={btn.id} href={btn.url} target='_blank' rel='noreferrer' className='flex-1'>
                                            <button className={`flex items-center justify-center gap-3 cursor-pointer font-medium px-5 py-3 rounded-lg w-full text-sm transition-all duration-200 shadow-sm ${btn.btnStyle}`}>
                                                <span>{btn.label}</span>
                                                {btn.icon}
                                            </button>
                                        </a>
                                    ))}
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects