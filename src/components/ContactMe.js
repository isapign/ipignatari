import React from 'react'
import { ListItemIcon, MenuItem, MenuList } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import EmailRoundedIcon from '@mui/icons-material/EmailRounded'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import '../styles/ContactMe.css'

const ContactMe = () => {
    const iconColor = "#ccd6f6"

    return <div className="contact-list">
        <MenuList>
            <MenuItem>
                <a href="mailto:isabellypignatari7@gmail.com">
                    <ListItemIcon>
                        <EmailRoundedIcon htmlColor={iconColor} />
                    </ListItemIcon>
                </a>
            </MenuItem>
            <MenuItem>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/isapign/">
                    <ListItemIcon>
                        <GitHubIcon htmlColor={iconColor} />
                    </ListItemIcon>
                </a>
            </MenuItem>
            <MenuItem>
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/isapign/">
                    <ListItemIcon>
                        <InstagramIcon htmlColor={iconColor} />
                    </ListItemIcon>
                </a>
            </MenuItem>
            <MenuItem>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/isabelly-pignatari/">
                    <ListItemIcon>
                        <LinkedInIcon htmlColor={iconColor} />
                    </ListItemIcon>
                </a>
            </MenuItem>
        </MenuList>
    </div>
}

export default ContactMe
