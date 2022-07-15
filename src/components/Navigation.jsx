import React from 'react'
import './Navigation.css'
import Button from '@mui/material/Button'
import { createTheme } from '@mui/material/styles'


const color = createTheme({
    palette: {
        primary: {
            main: '#E70E6B',
            contrastText: '#FFFFFF' 
        }
    },
    shape: {
        borderRadius: 12    
    }
})


function Navigation() {
    return (
        <div className='nav'>
            <h2 className='logo'>DEFI-VPN</h2>
            <nav>
                
            </nav>
            <div className="btn">
                <Button variant='contained' theme={color} style={{minWidth: '5em'}}>GET DEFI-VPN</Button>
            </div>
        </div>
    )
}

export default Navigation