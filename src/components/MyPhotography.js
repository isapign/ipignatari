import React from 'react'
import FadeSection from './FadeSection'
import { Grid } from '@mui/material'
import TranslateText from '../translations/TranslateText'
import '../styles/MyPhotography.css'

const MyPhotography = (props) => {
    return (<div id="myPhotography" style={{display: props.isMobile ? 'inline-block' : 'flex'}}>
      <FadeSection>
        <Grid container justifyContent="center" display="block">
          <div className="section-header">
            <div className="photography-title">
              <span>Eu </span>
              <span>amo </span>
              <span>fotografia 35mm 📷, algumas fotos que eu tirei:</span>
            </div>
          </div>
          <Grid item xs={12}>
            <div className="photography-content">
              fotos aqui
            </div>
          </Grid>
        </Grid>
      </FadeSection>
    </div>)
}

export default MyPhotography
