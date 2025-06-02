import './App.css'
import './index.css';
import Header from './components/Header'
import Hero from './components/Hero';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {

  return (
    <div>
       <Header></Header>
       <Hero></Hero>
       <Contact></Contact>
       <Footer></Footer>
      
      {/* <h1 className="text-3xl font-bold underline">
      Hello world!
      </h1> */}
    </div>
  )
}

export default App
