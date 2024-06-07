import React, { useState } from "react"
import TranslateText from "../translations/TranslateText"
import "../styles/Experience.css"
import FadeSection from "./FadeSection"
import Box from '@mui/material/Box';
import { Grid, Tab, Tabs } from "@mui/material"
import { makeStyles } from "@mui/styles"

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
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
          <Box sx={{ p: 3 }} className="experience-description">
            <span className="experience-item-company">
              {props.node.company + " | "}
            </span>
            <span className="experience-item-title">
              <TranslateText id={`experience.${props.node.code}.title`} />
            </span>
            <div className="experience-item-duration">
              <span>
                {props.node.period}
                <TranslateText id={`experience.type.${props.node.type}.title`} />
              </span>
            </div>
            <div className="experience-item-description">
              <span>
                <TranslateText id={`experience.${props.node.code}.description`} />
              </span>
              <ul>
                {props.node.stacks.map((s, index) => {
                  return (
                    <FadeSection delay={`${index + 1}00ms`}>
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
      "index": 0,
      "code": "fullstackSoftwareDeveloper",
      "company": "E-Deploy",
      "period": "Jan/2022 - Present",
      "place": "São Paulo, Brazil",
      "type": "fullTime",
      "stacks": ["Python", "ReactJs", "AWS", "Docker", "PostgreSQL", "NoSQL", "Cypress"]
    },
    {
      "index": 1,
      "code": "frontEndSoftwareDeveloper",
      "company": "DataOps House",
      "period": "Set/2023 - Nov/2023",
      "place": "Amsterdam, Neatherlands",
      "type": "freelance",
      "stacks": ["ReactJs", "NodeJs", "AWS", "Docker", "MongoDb"]
    },
    {
      "index": 2,
      "code": "developmentIntern",
      "company": "E-Deploy",
      "period": "Set/2020 - Dez/2021",
      "place": "São Paulo, Brazil",
      "type": "intern",
      "stacks": ["Python", "ReactJs", "AWS", "Docker", "PostgreSQL"]
    },
    {
      "index": 3,
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
              {'< '} <TranslateText id="experience.title" /> {' />'} 
            </span>
          </div>
          <Grid item xs={12}>
            <div className="experience-content">
              <div className={classes.root}>
                <Tabs
                  orientation={!props.isMobile ? "vertical" : null}
                  variant={!props.isMobile ? "fullWidth" : "scrollable"}
                  value={tab}
                  onChange={handleChange}
                  className={classes.tabs}
                >
                  {experiences.map(exp => (
                    <Tab
                      className={classes.tab}
                      label={<TranslateText id={`experience.${exp.code}.title`} />}
                      {...a11yProps(exp.index)}
                    />
                  ))}
                </Tabs>
                {experiences.map(exp => (<TabPanel
                  node={exp}
                  index={exp.index}
                />))}
              </div>
            </div>
          </Grid>
        </Grid>
      </FadeSection>
    </div>
  )
}

export default Experience
