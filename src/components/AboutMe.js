import React from "react"
import "../styles/AboutMe.css"
import FadeSection from "./FadeSection"

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
      <div id="about">
        <FadeSection>
          <div className="section-header">
            <span className="section-title">
              {'< sobre mim />'}
            </span>
          </div>
          <div className="about-content">
            <div className="about-description">
              <p>
                Atuo há 4 anos como <b>Desenvolvedora Full Stack</b> no
                projeto Backoffice da 3SCheckout. É um sistema que faz 
                gerenciamento de franquias e lojas com integração para PDV,
                Totem e Delivery. Sou um dos 5 membros desse projeto
                da <a href="https://e-deploy.com.br/"> E-Deploy</a>.
                Além disso, estou cursando Ciência da Computação na 
                <a href="https://www.usjt.br/"> USJT</a>.
              </p>
              <p>
                Curiosidades: amo jogos, fotografia analógica, livros, corrida de rua, animais e culinária.
              </p>
              <p>Recentemente tenho trabalhado com essas tecnologias:</p>
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
            <div className="about-image">
              <img src={"/assets/me&odin.jpeg"} />
            </div>
          </div>
        </FadeSection>
      </div>
    )
  }
}

export default AboutMe
