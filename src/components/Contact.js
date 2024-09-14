import React, { useState } from 'react'
import FadeSection from './FadeSection'
import { Grid } from '@mui/material'
import { makeStyles } from "@mui/styles"
import '../styles/Contact.css'

const useStyles = makeStyles({
  selectedBtn: {
    border: '1px solid #64FFDA',
    color: '#64FFDA'
  },
  normalBtn: {
    border: '1px solid #CDCDCD',
    color: '#CDCDCD'
  }
})

const Contact = (props) => {
  const [params, setParams] = useState({
    type: null,
    name: null,
    email: null,
    message: null
  })

  const handleChangeType = (value) => {
    setParams({ ...params, type: value })
  }

  const classes = useStyles()

  return (<div id="contact" style={{display: props.isMobile ? 'inline-block' : 'flex'}}>
    <FadeSection>
      <Grid container justifyContent="center" display="block">
        <Grid item xs={12}>
          <div className="contact-content">
            <Grid container>
              <Grid item xs={12} md={7}>
                <Grid container height={"100%"}>
                  <Grid item xs={12}>
                    <div className="contact-title">
                      <span>Quer trabalhar comigo?<br/></span>
                      <span>Vamos conversar!</span>
                    </div>
                  </Grid>
                  <Grid item xs={12} justifyContent="flex-end">
                    <div className="contact-infos">
                      <span>Isabelly Pignatari</span>
                      <span>ipignatari.contato@gmail.com</span>
                      <span>isabellypignatari7@gmail.com</span>
                      <span>+55 (11) 99838-7091</span>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={5}>
                <Grid container justifyContent={"flex-end"}>
                  <Grid item xs={12}>
                    <div className="contact-email">
                      <p>Interessado em:</p>
                      <div className="contact-email-btn">
                        <div onClick={() => handleChangeType('freelance')} className={params.type === 'freelance' ? classes.selectedBtn : classes.normalBtn}>Freelance</div>
                        <div onClick={() => handleChangeType('job')} className={params.type === 'job' ? classes.selectedBtn : classes.normalBtn}>Propostas</div>
                      </div>
                      <Grid container>
                        <input
                          placeholder={"Seu nome"}
                          value={params.name}
                          onChange={(e) => setParams({ ...params, name: e.target.value })}
                        />
                        <input
                          placeholder={"Seu email"}
                          value={params.email}
                          onChange={(e) => setParams({ ...params, email: e.target.value })}
                        />
                        <input
                          placeholder={"Mensagem..."}
                          value={params.message}
                          onChange={(e) => setParams({ ...params, message: e.target.value })}
                        />
                        <div className="contact-email-send">
                          <a href="mailto:ipignatari.contato@gmail.com">
                            Enviar
                          </a>
                        </div>
                      </Grid>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </FadeSection>
  </div>)
}

export default Contact
