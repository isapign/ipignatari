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
  
  const images = [
    {
      alt: 'Isabelly holding white dog and smiling',
      imgPath: '/assets/aboutMeBoard/me&odin.jpeg'
    },
    {
      alt: 'Pink flowers with blue sky',
      imgPath: '/assets/aboutMeBoard/flowers.jpeg'
    },
    {
      alt: 'Isabelly with a black dress posing at a party',
      imgPath: '/assets/aboutMeBoard/me1.jpeg'
    },
    {
      alt: 'Analog camera with 35mm films',
      imgPath: '/assets/aboutMeBoard/analog.jpeg'
    },
    {
      alt: 'A green cat sitted looking at the camera',
      imgPath: '/assets/aboutMeBoard/yule.jpeg'
    },
    {
      alt: 'Isabelly posing with a running medal',
      imgPath: '/assets/aboutMeBoard/me3.jpeg'
    },
    {
      alt: 'Isabelly posing at a park with a coconut',
      imgPath: '/assets/aboutMeBoard/me4.jpeg'
    },
    {
      alt: 'Isabelly hugging a white dog',
      imgPath: '/assets/aboutMeBoard/me&odin2.jpeg'
    },
    {
      alt: 'A tricolored cat eating a dog birthday cake with a white dog',
      imgPath: '/assets/aboutMeBoard/mitski&odin.jpeg'
    }
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
                <TranslateText id="aboutMe.formation.text" />
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
              <p>
                <TranslateText id="aboutMe.background.text" />
              </p>
              <p>
                <TranslateText id="aboutMe.curiosities.text" />
              </p>
            </div>
            {!props.isMobile && <div className="about-image-board">
              {images.map((img, index) => (
                <div className="about-image" key={index}>
                  <img src={img.imgPath} alt={img.alt} />
                </div>
              ))}
            </div>}
          </div>
          </Grid>
        </Grid>
      </FadeSection>
    </div>
  )
}

export default AboutMe
