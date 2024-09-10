import React from 'react'
import { Grid } from '@mui/material'
import FadeSection from './FadeSection'
import TranslateText from '../translations/TranslateText'
import '../styles/AboutMe.css'

const AboutMe = (props) => {
  return (
    <div id="aboutMe" style={{display: props.isMobile ? 'inline-block' : 'flex'}}>
      <FadeSection>
        <Grid container justifyContent="center" display="block">
          <div className="section-header">
            <span className="section-title">
              {'< '} <TranslateText id="aboutMe.title" /> {' />'} 
            </span>
          </div>
          <Grid item xs={12}>
            <div className="about-content">
              <div className="about-description">
                <p>
                  Me chamo Isabelly, tenho 22 anos e iniciei minha carreira em tecnologia aos 17 como estagiária de Quality Assurance. Como cresci com tecnologia, sempre gostei de programação e comecei a programar em Java e HTML aos 14 anos. Então, 3 meses depois de iniciar meu estágio em QA migrei para a área de desenvolvimento e tenho trabalhado desde então no projeto 3SCheckout de gerenciamento de franquias e lojas.
                  Sou formada no técnico de Informática e no curso superior de Análise e Desenvolvimento de Sistemas. Meu próximo objetivo é finalizar uma pós-graduação na área de Machine Learning e IA, além de começar a desenvolver jogos indie.
                  Além do meu trabalho de tempo integral, eu assumo alguns freelances esporadicamente como desenvolvedora.
                </p>
                <p>
                  Além do trabalho, sou uma pessoa apaixonada por natureza. Amo corrida, fotografia analógica, culinária, cachorros e claro, video-games. 
                </p>
              </div>
            </div>
          </Grid>
        </Grid>
      </FadeSection>
    </div>
  )
}

export default AboutMe
