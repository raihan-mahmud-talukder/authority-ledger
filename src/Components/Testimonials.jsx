import { testimonials } from '../data/testimonial'
export const Testimonials = () => {
    return (
        <section className="py-32 px-8 max-w-[1280px] m-auto bg-[#F2F4F6]">
            <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-[#2180FF]" />
                <h3 className="font-extrabold text-xl md:text-3xl text-[#191C1E] tracking-tighter">Trusted by Industry Leaders</h3>
            </div>
            <div className='flex flex-col md:flex-row gap-8'>
                {testimonials.map((item, index) => {
                    return <Testimonial testimonial={item} key={index} />
                })}
            </div>
        </section>
    )
}

const Testimonial = ( {testimonial}) => {
    return (
        <article className='rounded-lg p-4 md:p-12 bg-white shadow-[0px_1px_2px0px#0000000D]
            flex flex-col gap-8'>
            <div className='flex items-center gap-1'>
                <img src={testimonial.rating} />
                <img src={testimonial.rating} />
                <img src={testimonial.rating} />
                <img src={testimonial.rating} />
                <img src={testimonial.rating} />
            </div>
            <p className='font-medium text-lg md:text-2xl text-[#191C1E] h-32'>{ testimonial.quotes}</p>
            <div className='flex gap-4 items-center pt-2'>
                <img className='w-12 h-12' src={ testimonial.image} />
                <div>
                    <h6 className='font-bold text-[#000000]'>{ testimonial.name}</h6>
                    <span className='font-medium text-sm text-[#44474D]'>{ testimonial.position }</span>
                </div>
            </div>
        </article>
    )
}