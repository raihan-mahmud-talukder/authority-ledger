export const Contact = () => {
    return (
        <section className="py-16 px-8 flex flex-col md:flex-row justify-between gap-24 md:flex-wrap">
            <aside className="
                flex flex-col gap-8 md:w-[560px]
            ">
                <h2 className="
                    font-[Manrope] font-extrabold text-5xl text-[#181c1e] tracking-[-0.2rem] md:tracking-[-2.4px]
                    ">Ready to build your <span className="text-[#2180ff]">Authority?</span></h2>
                <p className="
                    text-lg text-[#44474D]
                ">Schedule a discovery call with our architectural lead to audit your current performance and map your growth path.</p>
                <div className="flex gap-6 items-center">
                    <img src="https://douqbxfmnweaqtofllcq.supabase.co/storage/v1/object/public/Images/email.png" alt="email" />
                    <span className="font-semibold">hello@authorityledger.com</span>
                </div>
                <div className="flex gap-6 items-center">
                    <img src="https://douqbxfmnweaqtofllcq.supabase.co/storage/v1/object/public/Images/address.png" alt="address" />
                    <span className="font-semibold">Financial District, New York</span>
                </div>
            </aside>
            <form className="
                rounded-lg bg-white flex flex-col gap-8 md:w-[560px]
                p-5 md:px-10 md:pt-10 md:pb-14
                border border-[#C5C6CD1A] shadow-[0px_1px_2px0px#0000000D] 
            ">
                <div>
                    <p className="
                        font-bold text-xs tracking-wider md:tracking-widest uppercase text-[#44474D]
                    ">Full Name</p>
                    <input
                        className="
                            font-medium text-lg text-[#6B7280] w-full
                            border-b-2 border-[#C5C6CD4D] pt-1 pb-4"
                        type="text"
                        placeholder="John Doe" />
                </div>
                <div>
                    <p className="
                        font-bold text-xs tracking-wider md:tracking-widest uppercase text-[#44474D]
                    ">Company Email</p>
                    <input
                        className="
                            font-medium text-lg text-[#6B7280] w-full
                            border-b-2 border-[#C5C6CD4D] pt-1 pb-4"
                        type="text"
                        placeholder="john@company.com" />
                </div>
                <div>
                    <p className="
                        font-bold text-xs tracking-wider md:tracking-widest uppercase text-[#44474D]
                    ">Project Goals</p>
                    <input
                        className="
                            font-medium text-lg text-[#6B7280] w-full
                            border-b-2 border-[#C5C6CD4D] pb-16"
                        type="text"
                        placeholder="Tell us about your growth targets..." />
                </div>
                <button className="
                    font-bold text-center bg-black text-white
                    rounded py-5 flex items-center justify-center gap-3 w-full
                ">Submit Inquiry <img src="https://douqbxfmnweaqtofllcq.supabase.co/storage/v1/object/public/Images/arrow.png" alt="arrow" /></button>
            </form>
        </section>
    )
}