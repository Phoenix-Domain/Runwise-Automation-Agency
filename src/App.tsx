import './App.css'
import Nav from './sections/Nav'
import Hero from './sections/Hero'
import Services from './sections/Services'

function App() {

  return (
    <main className='flex flex-col gap-20 md:gap-40 mx-6 md:mx-[60px] lg:mx-[120px]'>
     <Nav />
     <Hero />
     <Services />
    </main>
  )
}

export default App
