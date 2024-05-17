import { ListItemIcon, ListItemText, MenuItem, MenuList } from '@mui/material'
import React from 'react'
import "../styles/ContactMe.css"
import GitHubIcon from '@mui/icons-material/GitHub'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'


const ContactMe = () => {
    return <div className='contact-list'>
        <MenuList>
            <MenuItem>
                <ListItemIcon>
                  <GitHubIcon fontSize="small" htmlColor='#7971fe'/>
                </ListItemIcon>
                <ListItemText>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/isapign/">
                        Github
                    </a>
                </ListItemText>
            </MenuItem>
            <MenuItem>
                <ListItemIcon>
                  <InstagramIcon fontSize="small" htmlColor='#7971fe'/>
                </ListItemIcon>
                <ListItemText>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/isapign/">
                        Instagram
                    </a>
                </ListItemText>
            </MenuItem>
            <MenuItem>
                <ListItemIcon>
                  <LinkedInIcon fontSize="small" htmlColor='#7971fe'/>
                </ListItemIcon>
                <ListItemText>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/isabelly-pignatari/">
                        LinkedIn
                    </a>
                </ListItemText>
            </MenuItem>
        </MenuList>
    </div>
}

export default ContactMe
