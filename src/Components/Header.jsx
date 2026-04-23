import { useState } from "react"

export const Header = () => {
    const [navbar, setNavbar] = useState(false)
    return (
        <section className="py-4 px-8 bg-white/80 shadow-sm backdrop-blur-xl">
            <div className="
                flex flex-col items-center gap-5 md:hidden 
            ">
                <span className="font-bold text-2xl tracking-[-1px] text-[#0F172A]">Authority Ledger</span>
                <button
                    className="m-2 p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border md:hidden"
                    onClick={() => setNavbar(!navbar)}
                >
                    {navbar ? (
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" >
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
                <ul className={`${navbar ? "block md:hidden" : "hidden md:hidden"} flex flex-col items-center gap-2 font-bold tracking-[-0.4px] text-[#475569]`}>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Case Studies</li>
                </ul>
                <button className="
                py-4 px-8 w-full
                bg-black rounded font-bold text-lg text-white
                ">Get Started</button>
            </div>
            <div className="
                hidden md:flex md: justify-between md:items-center
            ">
                <span className="font-bold text-xl tracking-[-1px] text-[#0F172A]">Authority Ledger</span>
                <ul className="flex gap-8 font-bold tracking-[-0.4px] text-[#475569]">
                    <li>Home</li>
                    <li>Services</li>
                    <li>Case Studies</li>
                </ul>
                <button className="
                py-2 px-6 bg-black rounded font-semibold text-sm text-white
                ">Get Started</button>
            </div>
        </section>
    )
}