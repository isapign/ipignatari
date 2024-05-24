import { useState } from 'react'
import { Grid } from '@mui/material'
import PageToolbar from './components/PageToolbar'
import ContactMe from './components/ContactMe'
import AboutMe from './components/AboutMe'
import Experience from './components/Experience'
import Introduction from './components/Introduction'
import Projects from './components/Projects'
import './styles/GlobalColors.css'
import './App.css'


function App() {
  const isMobile = window.innerWidth < 800

  return (
      <Grid item xs={12} className="App">
        <Grid container id="content">
            <PageToolbar isMobile={isMobile} />
            {!isMobile && <ContactMe />}
            <Introduction isMobile={isMobile} />
            <AboutMe isMobile={isMobile} />
            <Experience isMobile={isMobile} />
            <Projects />
        </Grid>
      </Grid>
  )
}

export default App
