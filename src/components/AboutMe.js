import React from 'react'
import { Grid } from '@mui/material'
import FadeSection from './FadeSection'
import TranslateText from '../translations/TranslateText'
import '../styles/AboutMe.css'

const AboutMe = (props) => {
  const tech = [
    "Javascript",
    "Python",
    "C#",
    "ReactJs",
    "Java",
    "Unity"
  ]

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
                <TranslateText id="aboutMe.description.text" />
              </p>
              <p>
                <TranslateText id="aboutMe.curiosities.text" />
              </p>
              <p>
                <TranslateText id="aboutMe.recentTechnologies.text" />
              </p>
              <ul>
                {tech.map(function (t, i) {
                  return (
                    <FadeSection key={i} delay={`${i + 1}00ms`}>
                      <li>{t}</li>
                    </FadeSection>
                  )
                })}
              </ul>
            </div>
            {!props.isMobile && <div className="about-image">
              <img src={"/assets/me&odin.jpeg"} />
            </div>}
          </div>
          </Grid>
        </Grid>
      </FadeSection>
    </div>
  )
}

export default AboutMe
