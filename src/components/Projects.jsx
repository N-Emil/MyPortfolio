import { FaArrowRight } from 'react-icons/fa'
import { projects } from '../data/ProjectsElements'
import Headers from './Headers'

const Projects = () => {
    return (
        <section className='px-4 py-10 sm:px-6 sm:py-14'>
            <Headers header='Projects' id='projects' />
            <div className='flex justify-center mt-8'>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 text-white gap-5 w-full max-w-screen-xl'>
                    {projects.map(project => (
                        <div key={project.id} className='border rounded-lg text-white p-5 flex flex-col gap-6 hover:shadow-lg transition-shadow duration-300'>
                            <div className='overflow-hidden rounded-lg h-52 w-full group'>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                                />
                            </div>
                            <div className='flex justify-center items-center flex-col gap-4'>
                                <h1 className='text-[#F59E0B] font-medium text-lg sm:text-xl text-center'>{project.title}</h1>
                                <p className='text-slate-400 leading-relaxed max-w-sm break-words text-center'>{project.description}</p>
                                <a href={project.app_url} className='underline text-[#38BDF8]' target='_blank' rel='noreferrer'>Project link</a>
                                <a href={project.github_url} target='_blank' rel='noreferrer'>
                                    <button className='flex items-center justify-center gap-3 cursor-pointer bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-md w-full'>
                                        <p>Source code</p>
                                        <div className='border rounded-full p-1 bg-white text-blue-500'>
                                            <FaArrowRight />
                                        </div>
                                    </button>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects