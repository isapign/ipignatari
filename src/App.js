import { useState } from 'react'
import { Grid } from '@mui/material'
import PageToolbar from './components/PageToolbar'
import ContactMe from './components/ContactMe'
import AboutMe from './components/AboutMe'
import Experience from './components/Experience'
import Introduction from './components/Introduction'
import MyPhotography from './components/MyPhotography'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './styles/GlobalColors.css'
import './styles/App.css'

function App() {
  const isMobile = window.innerWidth < 1000
  const [language, setLanguage] = useState(navigator.language === 'pt-BR' ? 'pt-BR' : 'en-US')

  return (
      <Grid item xs={12} className="App">
        <Grid container id="content">
            <PageToolbar isMobile={isMobile} language={language} setLanguage={setLanguage} />
            <Introduction isMobile={isMobile} language={language} />
            <Experience isMobile={isMobile} language={language} />
            <AboutMe isMobile={isMobile} language={language} />
            <MyPhotography isMobile={isMobile} language={language} />
            <Contact isMobile={isMobile} language={language} />
            <Footer />
        </Grid>
      </Grid>
  )
}

export default App
