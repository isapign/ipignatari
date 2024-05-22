import React from "react"
import "../styles/Experience.css"
import FadeSection from "./FadeSection"
import TranslateText from "../translations/TranslateText"

class Projects extends React.Component {
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
    return (
      <div id="projects">
        <FadeSection>
          <div className="section-header">
            <span className="section-title">
              {'< '} <TranslateText id="projects.title" /> {' />'} 
            </span>
          </div>
          <div className="projects-content">
            <div className="projects-description">
                {'in development'}
            </div>
          </div>
        </FadeSection>
      </div>
    )
  }
}

export default Projects
