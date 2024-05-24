import React from 'react'
import { Grid } from '@mui/material'
import TranslateText from '../translations/TranslateText'
import FadeSection from './FadeSection'
import '../styles/Footer.css'

const Footer = (props) => {
    return <div id="footer">
    <FadeSection>
        <Grid container justifyContent="center" display="block">
            <Grid item xs={12}>
                <div className="footer-content">
                    <div className="footer-description">
                        <p>
                            <TranslateText id="footer.developedBy.text" />
                        </p>
                        <span>
                            ipignatari.contato@gmail.com
                        </span>
                    </div>
                </div>
            </Grid>
        </Grid>
      </FadeSection>
    </div>
}

export default Footer
