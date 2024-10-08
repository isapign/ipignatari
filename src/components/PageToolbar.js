import React from 'react'
import { Grid } from '@mui/material'
import TranslateText from '../translations/TranslateText'
import "../styles/Toolbar.css"

const PageToolbar = (props) => {
    const pages = ['home', 'experience', 'aboutMe', 'contact']

    return <nav className="toolbar">
        <Grid item xs={12}>
            <Grid container justifyContent="center" alignItems="center" spacing={props.isMobile ? 0 : 1}>
                <Grid item>
                    <div className="toolbar-logo">
                        {'< ipignatari />' }
                    </div>
                </Grid>
                {!props.isMobile && pages.map((page) => <Grid item key={page}>
                    <li className="toolbar-menu-item" key={page}>
                        <a href={`#${page}`}>
                            <TranslateText id={`${page}.title`} />
                        </a>
                    </li>
                </Grid>)}
                <Grid item className="toolbar-language">
                    <select
                        value={props.language}
                        onChange={(e) => props.setLanguage(e.target.value)}
                    >
                        <option value={'pt-BR'}>PT-BR</option>
                        <option value={'en-US'}>EN-US</option>
                    </select>
                </Grid>
            </Grid>
        </Grid>
    </nav>
}

export default PageToolbar
