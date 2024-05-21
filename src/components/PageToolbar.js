import React from 'react'
import { AppBar, Grid } from '@mui/material'
import TranslateText from '../translations/TranslateText'
import "../styles/Toolbar.css"

const PageToolbar = (props) => {
    const pages = [ 'introduction', 'aboutMe', 'experience', 'projects']

    return <nav className="toolbar">
            <Grid item xs={12}>
                <Grid container justifyContent="center" alignItems="center" spacing={1}>
                    <Grid item>
                        <div className="toolbar-logo">{'< ipignatari />' }</div>
                    </Grid>
                    {window.innerWidth >= 850 && pages.map((page) => <Grid item key={page}>
                        <li className="toolbar-menu-item" key={page}>
                            <a href={`#${page}`}>
                                <TranslateText id={`${page}.title`} />
                            </a>
                        </li>
                    </Grid>)}
                    <div className="toolbar-language">
                        {props.defaultLanguage}
                    </div>
                </Grid>
            </Grid>
        </nav>
}

export default PageToolbar
