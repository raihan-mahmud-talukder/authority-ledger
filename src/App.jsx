import { Header } from "./Components/Header"
import { Contact } from "./Components/Contact"
import { Hero } from "./Components/Hero"
import { Features } from "./Components/Features"
import { Testimonials } from "./Components/Testimonials"

export const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}