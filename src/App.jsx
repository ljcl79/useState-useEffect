import './App.css'
import Footer from './components/Footer/Footer'
import Gallery from './components/Gallery/Gallery'
import Hero from './components/Hero/Hero'
import Nav from './components/Nav/Nav'

function App() {
  
  return (
    <div style={{display:'flex', width:'100vw', flexDirection:'column'}}>
      <Nav></Nav>      
      <Hero></Hero>
      <Gallery></Gallery>
      <Footer></Footer>
    </div>
  )
}

export default App
