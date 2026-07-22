import { skills } from '../data/SkillsElement'
import Headers from './Headers'

const Skills = () => {

    return (
        <section className='px-4 py-10 sm:px-6 sm:py-14'>
            <Headers header='Skills' id='skills' />
            <div className='grid grid-cols-2 min-[420px]:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-6 sm:gap-8 mt-10 sm:mt-15 max-w-6xl mx-auto place-items-center'>
                {skills.map(skill => (
                    <div
                        key={skill.id}
                        tabIndex={0}
                        className='relative group flex justify-center items-center outline-none'
                    >
                        <div className='border rounded-full bg-white p-4 group-hover:scale-120 group-focus:scale-120 group-active:scale-120 transition-transform duration-300 cursor-pointer shadow-sm'>
                            <div className={`${skill.color} text-2xl sm:text-3xl flex items-center justify-center`}>
                                {skill.icons}
                            </div>
                        </div>

                        <div className='absolute -top-10 opacity-0 group-hover:opacity-100 group-hover:-top-12 group-focus:opacity-100 group-focus:-top-12 group-active:opacity-100 group-active:-top-12 transition-all duration-300 pointer-events-none z-10 whitespace-nowrap bg-slate-800 text-white text-xs font-semibold px-2.5 py-1 rounded-md shadow-lg border border-slate-700'>
                            {skill.title}
                            <div className='absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-800'></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills