import { useEffect, useState } from "react"
// import { speciality } from "../data/speciality"
import { getSpeciality } from "../service/api"

export const Specialities = () => {
    const [speciality, setSpeciality] = useState([])
    
    useEffect(() => {
        getSpeciality().then(data => setSpeciality(data))
    }, [])
    return (
        <section className="py-16 md:py-32 px-8 flex flex-col gap-20">
            <div className="flex flex-col gap-6">
                <h2 className="font-extrabold text-3xl md:text-5xl md:tracking-[-2.4px]">Our Core Specialities</h2>
                <p className="max-w-2xl text-[#44474D] text-lg">Integrated marketing solutions designed for the modern enterprise, backed by performance metrics.</p>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
                {speciality.map(item => <Speciality speciality={item} key={item.id} />)}
            </div>
        </section>
    )
}

const Speciality = ({ speciality }) => {
    return (
        <aside className="rounded-lg bg-[#F2F4F6] flex flex-col gap-4 p-4 md:p-10">
            <img className="w-14" src={speciality.icon} alt={speciality.name} />
            <h3 className="text-2xl font-bold text-[#191C1E]">{speciality.title}</h3>
            <p className="text-[#44474D]">{speciality.description}</p>
            <div className="flex items-center gap-2 text-[#000000] text-sm font-bold">
                <span>Learn More</span>
                <img src="https://douqbxfmnweaqtofllcq.supabase.co/storage/v1/object/public/Images/bow.png" alt="bow" />
            </div>
        </aside>
    )
}