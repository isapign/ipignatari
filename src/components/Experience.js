import React, { useState } from "react"
import Box from '@mui/material/Box';
import { Grid, Tab, Tabs } from "@mui/material"
import { makeStyles } from "@mui/styles"

import TranslateText from "../translations/TranslateText"
import "../styles/Experience.css"
import FadeSection from "./FadeSection"

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    height: 350
  },
  tabs: {
    borderRight: '1px solid #8892b0 !important'
  }
})

const Experience = (props) => {
  const [tab, setTab] = useState(0)

  const handleChange = (event, newValue) => {
    setTab(newValue)
  }

  const TabPanel = (props) => {
    return (
      <div
        role="tabpanel"
        hidden={tab !== props.index}
        id={`vertical-tabpanel-${props.index}`}
        aria-labelledby={`vertical-tab-${props.index}`}
        {...props.other}
      >
        {tab === props.index && (
          <Box sx={{ padding: '10px 30px' }} className="experience-description">
            <span className="experience-item-company">
              {props.node.company + " | "}
            </span>
            <span className="experience-item-title">
              <TranslateText id={`experience.${props.node.code}.title`} {...props} />
            </span>
            <div className="experience-item-duration">
              <span>
                {props.node.period}
                <TranslateText id={`experience.type.${props.node.type}.title`} {...props} />
              </span>
            </div>
            <div className="experience-item-description">
              <p>
                <TranslateText id={`experience.${props.node.code}.description`} {...props} />
              </p>
              <ul>
                {props.node.stacks.map((s, index) => {
                  return (
                    <FadeSection delay={`${index + 1}00ms`} key={index}>
                      <li key={index}>{s}</li>
                    </FadeSection>
                  )
                })}
              </ul>
            </div>
          </Box>
        )}
      </div>
    )
  }

  const experiences = [
    {
      "code": "fullstackSoftwareDeveloper",
      "company": "E-Deploy",
      "period": "Jan/2022 - Present",
      "place": "São Paulo, Brazil",
      "type": "fullTime",
      "stacks": ["Python", "ReactJs", "AWS", "Docker", "PostgreSQL", "NoSQL", "Cypress"]
    },
    {
      "code": "frontEndSoftwareDeveloper",
      "company": "DataOps House",
      "period": "Set/2023 - Nov/2023",
      "place": "Amsterdam, Neatherlands",
      "type": "freelance",
      "stacks": ["ReactJs", "NodeJs", "AWS", "Docker", "MongoDb"]
    },
    {
      "code": "qualityAssuranceIntern",
      "company": "E-Deploy",
      "period": "Feb/2020 - Aug/2020",
      "place": "São Paulo, Brazil",
      "type": "intern",
      "stacks": ["Ruby", "Selenium Webdriver", "Cucumber"]
    }
  ]

  const classes = useStyles()

  return (
    <div id="experience" style={{display: props.isMobile ? 'inline-block' : 'flex'}}>
      <FadeSection>
        <Grid container justifyContent="center" display="block">
          <div className="section-header">
            <span className="section-title">
              {'< '} <TranslateText id="experience.title" {...props} /> {' />'} 
            </span>
          </div>
          <div className="experience-content">
            <div className={classes.root}>
              <Tabs
                orientation="vertical"
                variant="fullWidth"
                value={tab}
                onChange={handleChange}
                className={classes.tabs}
              >
                {experiences.map((exp, index) => (
                  <Tab
                    className={classes.tab}
                    label={<TranslateText id={`experience.${exp.code}.title`} {...props} />}
                    {...a11yProps(index)}
                  />
                ))}
              </Tabs>
              {experiences.map((exp, index) => (<TabPanel
                node={exp}
                index={index}
                {...props}
              />))}
            </div>
          </div>
          <div className="experience-stacks">
            <div>
              <span>Tecnologias que trabalho:</span>
            </div>
            <div>
              <span>Python | Java | C# (Unity) | Javascript | Typescript | ReactJs | AngularJs | NodeJs</span>
            </div>
          </div>
        </Grid>
      </FadeSection>
    </div>
  )
}

export default Experience
