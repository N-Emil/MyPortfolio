import { useState } from 'react'
import logo from '../assets/logo.png'
import { buttons } from '../data/NavbarElements'
import useTime from '../hooks/useTime'

const Navbar = () => {
    const time = useTime()
    const [menuOpen, setMenuOpen] = useState(false)
    const style = 'nav-link text-slate-300 text-lg lg:text-xl cursor-pointer px-5 py-3'

    const scrollToSection = (link) => {
        const section = document.querySelector(link)
        section?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        setMenuOpen(false)
    }

    return (
        <nav className='sticky top-0 z-[1000] bg-[#1E293B] w-full'>
            <div className='max-w-screen-xl mx-auto flex items-center justify-between h-25 px-4 sm:px-6'>
                <div className='flex items-center gap-3'>
                    <a href="/">
                        <img src={logo} alt="logo" className='w-20 h-20 rounded-full' />
                    </a>
                </div>

                <div className='hidden md:flex items-center gap-2 lg:gap-4'>
                    {buttons.map(btn => (
                        <a
                            href={btn.link}
                            key={btn.id}
                            onClick={(event) => {
                                event.preventDefault()
                                scrollToSection(btn.link)
                            }}
                        >
                            <button className={style}>{btn.title}</button>
                        </a>
                    ))}
                </div>

                <div className='flex items-center gap-2'>
                    <div className='text-[#C27803] font-mono text-xs sm:text-sm md:text-lg font-bold tracking-tighter whitespace-nowrap'>
                        {time}
                    </div>
                    <button
                        className='md:hidden text-slate-300 hover:text-white border border-slate-500 px-3 py-2 rounded-md'
                        onClick={() => setMenuOpen(prev => !prev)}
                        aria-label='Toggle navigation'
                    >
                        {menuOpen ? '✕' : '☰'}
                    </button>
                </div>
            </div>

            <div className={`md:hidden absolute top-full left-0 right-0 overflow-y-auto transition-all duration-300 ${menuOpen ? 'max-h-[calc(100vh-6.25rem)]' : 'max-h-0'}`}>
                <div className='flex flex-col gap-2 p-4 bg-[#1E293B]'>
                    {buttons.map(btn => (
                        <a
                            href={btn.link}
                            key={btn.id}
                            onClick={(event) => {
                                event.preventDefault()
                                scrollToSection(btn.link)
                            }}
                            className='block'
                        >
                            <button className={`${style} nav-link-mobile w-full text-left`}>
                                {btn.title}
                            </button>
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default Navbar