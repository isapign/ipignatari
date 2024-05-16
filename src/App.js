import { useState } from 'react'
import './App.css'
import AboutMe from './components/AboutMe'
import Experience from './components/Experience'
import Introduction from './components/Introduction'
import PageToolbar from './components/PageToolbar'
import Projects from './components/Projects'
import "./styles/GlobalColors.css"

function App() {
  const [lightMode, setLightMode] = useState(false)
    return (
      <div className="App">
        <div id="content">
            <PageToolbar lightMode={lightMode} setLightMode={setLightMode}/>
            <Introduction />
            <AboutMe />
            <Experience />
            <Projects />
        </div>
      </div>
  )
}

export default App
