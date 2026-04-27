import { supabase } from "./supabase"

export const getSpeciality = async () => {
    const {data, error} = await supabase.from('speciality').select('*')
    
    if (error) {
        console.error(error)
        throw new Error('Not Found')
    }
    return data
}

export const getTestimonial = async () => {
    const {data, error} = await supabase.from('testimonial').select('*')
    
    if (error) {
        console.error(error)
        throw new Error('Not Found')
    }
    return data
}