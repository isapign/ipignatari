import React from 'react'
import { Grid } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import EmailRoundedIcon from '@mui/icons-material/EmailRounded'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TranslateText from '../translations/TranslateText'
import "../styles/Toolbar.css"

const PageToolbar = (props) => {
    const pages = ['introduction', 'aboutMe', 'experience', 'projects']
    const iconColor = "#ccd6f6"
    const linkedinHref = navigator.language === 'pt-BR' ?
        'https://www.linkedin.com/in/isabelly-pignatari/' :
        'https://www.linkedin.com/in/isabelly-pignatari/?locale=en_US'

    return <nav className="toolbar">
        <Grid item xs={12}>
            <Grid container justifyContent="center" alignItems="center" spacing={props.isMobile ? 0 : 1}>
                <Grid item>
                    <div className="toolbar-logo">{'< ipignatari />' }</div>
                </Grid>
                {!props.isMobile ? pages.map((page) => <Grid item key={page}>
                    <li className="toolbar-menu-item" key={page}>
                        <a href={`#${page}`}>
                            <TranslateText id={`${page}.title`} />
                        </a>
                    </li>
                    </Grid>) : <>
                    <Grid item className="toolbar-contact">
                        <a href="mailto:ipignatari.contato@gmail.com">
                            <EmailRoundedIcon htmlColor={iconColor} />
                        </a>
                    </Grid>
                    <Grid item className="toolbar-contact">
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/isapign/">
                            <GitHubIcon htmlColor={iconColor} fontSize="small"/>
                        </a>
                    </Grid>
                    <Grid item className="toolbar-contact">
                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/isapign/">
                            <InstagramIcon htmlColor={iconColor} />
                        </a>
                    </Grid>
                    <Grid item className="toolbar-contact">
                        <a target="_blank" rel="noopener noreferrer" href={linkedinHref}>
                            <LinkedInIcon htmlColor={iconColor} />
                        </a>
                    </Grid>
                </>}
            </Grid>
        </Grid>
    </nav>
}

export default PageToolbar
