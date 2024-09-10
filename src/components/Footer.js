import React from 'react'
import { Grid } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

import FadeSection from './FadeSection'
import '../styles/Footer.css'

const Footer = (props) => {
    const linkedinHref = navigator.language === 'pt-BR' ?
        'https://www.linkedin.com/in/isabelly-pignatari/' :
        'https://www.linkedin.com/in/isabelly-pignatari/?locale=en_US'

    return <div id="footer">
    <FadeSection>
        <Grid container justifyContent="center" display="block">
            <Grid item xs={12}>
                <div className="footer-content">
                    <Grid item xs={12}>
                        <Grid container justifyContent="center" alignItems="center" spacing={1}>
                            <Grid item>
                                <a target="_blank" rel="noopener noreferrer" href="https://github.com/isapign/">
                                    <GitHubIcon />
                                </a>
                            </Grid>
                            <Grid item>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/isapign/">
                                    <InstagramIcon />
                                </a>
                            </Grid>
                            <Grid item>
                                <a target="_blank" rel="noopener noreferrer" href={linkedinHref}>
                                    <LinkedInIcon />
                                </a>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <div className="footer-description">
                                <p>
                                    Desenvolvido por Isabelly Pignatari.
                                </p>
                                <p>
                                    Todos os direitos reservados. ©
                                </p>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Grid>
        </Grid>
      </FadeSection>
    </div>
}

export default Footer
