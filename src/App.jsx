import Hero3D from './components/Hero3D'
import Particles from './components/Particles'
import FeatureGrid from './components/FeatureGrid'
import HowItWorks from './components/HowItWorks'
import Demos from './components/Demos'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import ThemeToggle from './components/ThemeToggle'

function App() {
  return (
    <div className="min-h-screen w-full bg-[#f7f9fc] text-slate-900 dark:bg-[#0b0f1a] dark:text-white selection:bg-cyan-300/30 selection:text-current">
      <div className="fixed top-5 right-5 z-50">
        <ThemeToggle />
      </div>
      <div className="relative">
        <Hero3D />
        <Particles />
      </div>
      <FeatureGrid />
      <HowItWorks />
      <Demos />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
