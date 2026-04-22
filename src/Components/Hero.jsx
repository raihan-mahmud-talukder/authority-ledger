export const Hero = () => {
    return (
        <section className="md:py-56 py-16 px-8 flex flex-col md:flex-row gap-12 items-center justify-between">
            <div className="flex flex-col gap-6">
                <span className="font-semibold text-xs tracking-widest uppercase text-[#2180FF]">Scalable Intelligence</span>
                <h1 className="font-extrabold text-5xl md:text-7xl tracking-tight">
                    Accelerate <br /><span className="text-[#2180FF]">Your Growth</span>
                </h1>
                <p className="text-[#44474D] text-xl max-w-[576px] pt-2">We help high-growth companies scale with data-driven marketing strategies that turn authority into measurable revenue.</p>
                <div className="py-4 flex gap-4 justify-center md:justify-start flex-wrap">
                    <button className="bg-black text-white py-4 px-8 rounded flex gap-2 items-center justify-center font-bold w-full sm:w-auto ">
                        <span>Partner With Us</span>
                        <span><img src="images/arrow.png" alt="arrow" /></span>
                    </button>
                    <button className="bg-[#E6E8EA] py-4 px-8 rounded font-bold w-full sm:w-auto">View Services</button>
                </div>
            </div>
            <div className="relative">
                <img src="images/hero.png" alt="hero" />
                <img className="absolute -top-5 right-0" src="images/graph.png" alt="graph" />
            </div>
        </section>
    )
}