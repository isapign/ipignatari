import React from "react"
import Typist from 'react-typist'
import 'react-typist/dist/Typist.css'
import { Grid } from "@mui/material"

import FadeSection from './FadeSection'
import logo from '../logo.svg'
import TranslateText from '../translations/TranslateText'
import '../styles/Introduction.css'

const Introduction = (props) => {

  const logoSize = {
    width: window.innerWidth > 500 ? '50rem' : '20rem'
  }

  return (
    <div id="introduction">
      <FadeSection>
        <Grid container justifyContent="center" display={props.isMobile ? 'flex' : 'block'}> 
          <img src={logo} style={logoSize} alt="moonLight" />
          <Typist avgTypingDelay={80}>
              <span className="introduction-title">
                {navigator.language === "pt-BR" ? "Oi, sou a Isa :)" : "Hi, I'm Isa"}
              </span>
          </Typist>
          <Grid item xs={12}>
            <div className="introduction-content">
              <div className="introduction-description">
                <p><TranslateText id="introduction.softwareDeveloper.text" /></p>  
                <p><TranslateText id="introduction.description.text" /></p>
              </div>
            </div>
          </Grid>
        </Grid>
      </FadeSection>
    </div>
  )
}

export default Introduction
