import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Dashboard from '../components/Dashboard'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import SmoothScroll from '../components/SmoothScroll'
import ThreeScene from '../components/ThreeScene'

export default function Home() {
  return (
    <SmoothScroll>
      <Header />
  <ThreeScene />
      <Hero />
      <About />
      <Services />
      <Dashboard />
      <Contact />
      <Footer />
    </SmoothScroll>
  )
}