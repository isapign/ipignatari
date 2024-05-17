import React from 'react'
import { AppBar, Grid, IconButton, MenuItem, Toolbar } from '@mui/material'
import EmailRoundedIcon from "@mui/icons-material/EmailRounded"
import NightlightIcon from '@mui/icons-material/Nightlight'
import Brightness5Icon from '@mui/icons-material/Brightness5'
import "../styles/Toolbar.css"


const PageToolbar = (props) => {
    const pages = [ 'introdução', 'sobre mim', 'experiência', 'projetos']

    return <AppBar className="toolbar">
        <Toolbar className="toolbar">
            <Grid container justifyContent="center" alignItems="center" spacing={1}>
                <Grid item>
                    <div className="toolbar-logo">{'< ipignatari />' }</div>
                </Grid>
                {window.innerWidth >= 850 && pages.map((page) => <Grid item>
                    <MenuItem className="toolbar-menu-item" key={page}>
                        {page}
                    </MenuItem>
                </Grid>)}
                {!props.isMobile && <>
                    <Grid item>
                    <IconButton onClick={() => props.setLightMode(!props.lightMode)}>
                        {props.lightMode ? <Brightness5Icon/> : <NightlightIcon/>}
                    </IconButton>
                </Grid>
                <Grid item>
                    <MenuItem>
                    <a
                        href="mailto:isabellypignatari7@gmail.com"
                        className="toolbar-contact"
                    >
                        <EmailRoundedIcon></EmailRoundedIcon>
                        {"fale comigo!"}
                    </a>
                    </MenuItem>
                </Grid>
                </>}
            </Grid>
        </Toolbar>
    </AppBar>
}

export default PageToolbar
