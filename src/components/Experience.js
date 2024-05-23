import React from "react"
import TranslateText from "../translations/TranslateText"
import "../styles/Experience.css"
import FadeSection from "./FadeSection"
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";

const Experience = (props) => {
  return (
    <div id="experience" style={{display: props.isMobile ? 'inline-block' : 'flex'}}>
      <FadeSection>
        <Grid container justifyContent="center" display="block">
          <div className="section-header">
            <span className="section-title">
              {'< '} <TranslateText id="experience.title" /> {' />'} 
            </span>
          </div>
          <Grid item xs={12}>
            <div className="experience-content">
              <div className="experience-description">

              </div>
            </div>
          </Grid>
        </Grid>
      </FadeSection>
    </div>
  )
}

export default Experience
