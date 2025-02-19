import Benefits from './components/benefits'
import Faq from './components/faq'
import Features from './components/features'
import Footer from './components/footer'
import Hero from './components/hero'
import Images from './components/images'
import Navbar from './components/navbar'
import Partners from './components/partners'
import WhoWeAre from './components/whoweare'
import Testimonials from './testimonials'

function App() {
  const images = [
    {
      label: 'Mobile Fintech',
      url: '/assets/images/mobile.jpg'
    },
    {
      label: 'Laptop Fintech',
      url: '/assets/images/laptop.webp'
    },
  ]

  const partners = [
    '/assets/logos/paypal.svg',
    '/assets/logos/wise.svg',
    '/assets/logos/stripe.svg',
    '/assets/logos/payoneer.svg',
  ]

  return (
    <>
      <Navbar />
      <Hero />
      <Images images={images}/>
      <Partners partners={partners}/>
      <WhoWeAre />
      <Features />
      <Benefits />
      <Faq />
      <Testimonials />
      <Footer />
    </>
  )
}

export default App
