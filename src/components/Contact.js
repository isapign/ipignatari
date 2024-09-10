import React from 'react'
import FadeSection from './FadeSection'
import { Grid } from '@mui/material'
import TranslateText from '../translations/TranslateText'
import '../styles/Contact.css'

const Contact = (props) => {
    return (<div id="contact" style={{display: props.isMobile ? 'inline-block' : 'flex'}}>
      <FadeSection>
        <Grid container justifyContent="center" display="block">
          <Grid item xs={12}>
            <div className="contact-content">
              contato
            </div>
          </Grid>
        </Grid>
      </FadeSection>
    </div>)
}

export default Contact
