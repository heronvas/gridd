import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'

// Home sections
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import UseCases from './components/UseCases'
import Dashboard from './components/Dashboard'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Footer from './components/Footer'

// Pages
import About from './pages/About'
import Blog from './pages/Blog'
import Careers from './pages/Careers'
import Legal from './pages/Legal'
import Privacy from './pages/Privacy'
import Documentation from './pages/Documentation'
import Community from './pages/Community'
import Platform from './pages/Platform'
import Agents from './pages/Agents'
import Integrations from './pages/Integrations'
import ApiDocs from './pages/ApiDocs'
import BlogPost from './pages/BlogPost'

function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <HowItWorks />
        <UseCases />
        <Dashboard />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/docs" element={<Documentation />} />
        <Route path="/community" element={<Community />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/integrations" element={<Integrations />} />
        <Route path="/api-docs" element={<ApiDocs />} />
      </Routes>
    </BrowserRouter>
  )
}
