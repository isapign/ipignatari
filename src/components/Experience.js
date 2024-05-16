import React from "react"
import "../styles/Experience.css"
import FadeSection from "./FadeSection"

class Experience extends React.Component {
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
      <div id="experience">
        <FadeSection>
          <div className="section-header">
            <span className="section-title">{'< experiência />'}</span>
          </div>
        </FadeSection>
      </div>
    )
  }
}

export default Experience
