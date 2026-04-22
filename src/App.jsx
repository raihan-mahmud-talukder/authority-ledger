import { Header } from "./Components/Header"
import { Contact } from "./Components/Contact"
import { Hero } from "./Components/Hero"
import { Specialities } from "./Components/Specialities"
import { Testimonials } from "./Components/Testimonials"
import { Footer } from "./Components/Footer"

export const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Specialities />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}