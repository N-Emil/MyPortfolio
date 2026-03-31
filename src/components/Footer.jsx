import { items } from "../data/FooterElements"

const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <footer className="bg-[#0B1120] h-auto min-h-40 mt-12 text-white flex flex-col justify-center items-center gap-6 px-4 py-8 sm:px-6">
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
                {items.map(item => (
                    <a key={item.id} href={item.link} target="_blank" rel='noreferrer'>
                        <div id="contact" className={`${item.color} text-2xl hover:scale-110 transition-transform duration-300 px-2 py-2`}>{item.icon}</div>
                    </a>
                ))}
            </div>
            <div className="text-slate-400 text-sm font-light text-center">
                © Copyright {currentYear}
            </div>
        </footer>
    )
}

export default Footer