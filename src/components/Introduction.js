import React, { useEffect } from "react"
import Typist from 'react-typist'
import "react-typist/dist/Typist.css";

import FadeSection from './FadeSection'
import '../styles/Introduction.css'

const Introduction = () => {
  return (
    <div id="home">
      <FadeSection>
        <div className="introduction-content">
          <div className="intro-image">
            <img src={'/assets/me.jpeg'} alt={'girl with bangs'} />
          </div>
          <Typist avgTypingDelay={100}>
            <span className="intro-title">
              Hey, eu sou a Isa
            </span>
          </Typist>
          <div className="intro-subtitle">
            Fullstack software developer
          </div>
          <div className="intro-description">
            Desenvolvedora de software com 4 anos de experiência.
          </div>
          <div className="intro-button">
            <div className="intro-contact-btn">
              <a href="mailto:ipignatari.contato@gmail.com">
                Fale comigo
              </a>
            </div>
            <div className="intro-resume-btn">
              <a href="/assets/Isabelly_Pignatari.pdf" download="Isabelly_Pignatari">
                baixar currículo
              </a>
            </div>
          </div>
        </div>
      </FadeSection>
    </div>
  )
}

export default Introduction
