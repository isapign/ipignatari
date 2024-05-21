import React from 'react'
import { Grid } from '@mui/material'
import FadeSection from './FadeSection'
import TranslateText from '../translations/TranslateText'
import '../styles/AboutMe.css'

class AboutMe extends React.Component {
  constructor() {
    super()
    this.state = {
      expanded: true,
      activeKey: "1"
    }
    this.handleSelect = this.handleSelect.bind(this)
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    })
  }
  render() {
    const techStack = [
      "Javascript",
      "Python",
      "ReactJs",
      "HTML/CSS",
      "C#",
      "Unity"
    ]

    return (
      <div id="aboutMe" style={{display: this.props.isMobile ? 'inline-block' : 'flex'}}>
        <FadeSection>
          <Grid container justifyContent="center" display="block">
            <div className="section-header">
              <span className="section-title">
                {'< sobre mim />'}
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
                  {techStack.map(function (t, i) {
                    return (
                      <FadeSection key={i} delay={`${i + 1}00ms`}>
                        <li>{t}</li>
                      </FadeSection>
                    )
                  })}
                </ul>
              </div>
              {!this.props.isMobile && <div className="about-image">
                <img src={"/assets/me&odin.jpeg"} />
              </div>}
            </div>
            </Grid>
          </Grid>
        </FadeSection>
      </div>
    )
  }
}

export default AboutMe
