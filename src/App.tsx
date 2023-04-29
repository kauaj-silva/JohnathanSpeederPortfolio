import Header from './assets/components/header'
import './assets/styles/App.css'
import Articles from './assets/components/articles'
import About from './assets/components/about'
import Contact from './assets/components/contact'
import Footer from './assets/components/footer'


function App() {
  return (
    <>
      <Header/>
      <main>
        <Articles/>
        <About/>
        <Contact/>
      </main>
      <Footer/>    
    </>
  )
}

export default App
