import React, { useState } from "react"
import Typist from 'react-typist'
import 'react-typist/dist/Typist.css'
import { Grid } from "@mui/material"

import FadeSection from './FadeSection'
import logo from '../logo.svg'
import TranslateText from '../translations/TranslateText'
import '../styles/Introduction.css'

const Introduction = (props) => {
  const words = ["jogos", "sistemas", "códigos", "bugs"]
  const [textCounter, setTextCounter] = useState(0)

  const handleSetTextCounter = () => {
    setTextCounter(textCounter + 1)
    if (textCounter >= 3) {
      setTextCounter(0)
    }
  }

  const DynamicTypist = () => {
    return <div>
      <span>eu gosto de criar </span>
      <Typist key={textCounter} onTypingDone={handleSetTextCounter}>
        {words[textCounter]}
        <Typist.Delay ms={1500}/>
        <Typist.Backspace ms={200} count={words[textCounter].length} />
      </Typist>
    </div>
  }

  return (
    <div id="introduction">
      <FadeSection>
        <Grid container justifyContent="center" display={'inline-flex'}>
          <Grid item xs={12}>
            <div className="introduction-content">
              <div className="introduction-description">
                <span>oi, sou a Isa</span>
                <DynamicTypist/>
              </div>
              <div className="introduction-fade">
                  <div class="introduction-fade-circle"></div>
              </div>
            </div>
          </Grid>
        </Grid>
      </FadeSection>
    </div>
  )
}

export default Introduction
