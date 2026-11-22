const Headers = ({ header, id }) => {
    return (
        <h1 className="scroll-reveal text-white text-center text-3xl sm:text-4xl font-bold tracking-tighter text-slate-100 mt-10 sm:mt-16" id={id}>
            {header}
        </h1>
    )
}

export default Headers