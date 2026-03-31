import { skills } from '../data/SkillsElement'
import Headers from './Headers'

const Skills = () => {

    return (
        <section className='px-4 py-10 sm:px-6 sm:py-14'>
            <Headers header='Skills' id='skills' />
            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 place-items-center gap-6 sm:gap-8 mt-8'>
                {skills.map(skill => (
                    <div key={skill.id} className='border rounded-full bg-white p-4 hover:scale-110 transition-transform duration-300'>
                        <div className={`${skill.color} text-2xl sm:text-3xl`}>{skill.icons}</div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills