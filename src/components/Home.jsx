import Headers from './Headers'

const Home = () => {
    return (
        <section className='px-4 py-10 sm:px-6 sm:py-14'>
            <Headers header='Welcome to my website' id='home' />
            <div className='flex justify-center items-center py-6'>
                <a href="#about">
                    <button className='bg-[#E28D04] hover:bg-[#A36502] hover:scale-110 px-5 py-3 rounded-lg cursor-pointer transition-transform duration-300 text-base sm:text-lg'>
                        Let's explore
                    </button>
                </a>
            </div>
        </section>
    )
}

export default Home