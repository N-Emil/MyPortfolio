import { buttons, content } from "../data/AboutContent"
import Headers from "./Headers"

const About = () => {
  return (
    <section className='px-4 py-10 sm:px-6 sm:py-14'>
      <Headers header='About' id='about' />
      <div className="flex justify-center mt-8">
        <div className="border text-white rounded-lg flex flex-col justify-center items-center gap-8 p-6 sm:p-10 max-w-xl w-full hover:scale-105 transition-transform duration-300">
          <div className="bg-white rounded-full p-4">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/048/216/761/small/modern-male-avatar-with-black-hair-and-hoodie-illustration-free-png.png"
              alt="user" className="w-24 h-24 sm:w-28 sm:h-28 object-cover" />
          </div>
          {content.map(c => (
            <div key={c.id} className="flex justify-center items-center flex-col gap-3 text-center px-3">
              <h1 className="font-bold text-2xl">{c.user}</h1>
              <p className="font-medium text-xl text-[#CD7F32]">{c.role}</p>
              <p className="text-slate-400 leading-relaxed max-w-md break-words">{c.description}</p>
              <div className="flex items-center gap-4 mt-4">
                {buttons.map(button => (
                  <a key={button.id} href="/Emil_cv.pdf" download={button.download} target="_blank">
                    <button className="bg-[#C27803] hover:bg-[#E28D04] text-white px-5 py-2 rounded-lg transition-all duration-300 cursor-pointer">
                      {button.title}
                    </button>
                  </a>
                ))}

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About