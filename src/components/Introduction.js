import React from "react"

import '../styles/Introduction.css'
import Typist from 'react-typist'
import 'react-typist/dist/Typist.css'
import FadeSection from './FadeSection'
import logo from '../logo.svg'
import TranslateText from '../translations/TranslateText'

class Introduction extends React.Component {
  constructor() {
    super()
    this.state = {
      expanded: true,
      activeKey: "1",
      visible: true
    }
    this.handleSelect = this.handleSelect.bind(this)
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    })
  }
  
  render() {
    const logoSize = {
      width: window.innerWidth > 500 ? '50rem' : '20rem'
    }

    return (
      <div id="introduction">
        <img src={logo} style={logoSize} alt="moonLight" />
        <Typist avgTypingDelay={80}>
            <span className="introduction-title">
              {'Oi, sou a Isa :) '}
            </span>
        </Typist>
        <FadeSection>
          <div className="introduction-description">
            <p><TranslateText id="introduction.softwareDeveloper.text" /></p>  
            <p><TranslateText id="introduction.description.text" /></p>
          </div>
        </FadeSection>
      </div>
    )
  }
}

export default Introduction
