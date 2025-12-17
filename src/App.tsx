import CallToAction from './components/Contact/CallToAction'
import ProgramsSection from './components/Features/ProgramsSection'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import SuccessStories from './components/Testimonials/SuccessStories'
import PageLayout from './components/layout/PageLayout'

const App = () => (
  <PageLayout>
    <Header />
    <main>
      <Hero />
      <ProgramsSection />
      <SuccessStories />
      <CallToAction />
    </main>
    <Footer />
  </PageLayout>
)

export default App
