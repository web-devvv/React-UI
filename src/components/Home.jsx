import React from 'react'
import './Home.css'
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


function Home() {
  return (
    <div className='home'>
        <div className="landing">
            <h1>CONNECT FROM ANYWHERE</h1>
            <br />
            <h3 style={{color: '#4169E1'}}>The First Decentralized VPN!</h3>
            <br />
            <br />
            <br />
            <br />
            <div>
                <Button variant='contained' theme={color} style={{minWidth: '5em'}}>Chose your plan!</Button>
            </div>
        </div>
        <div className="why">
            <h1 style={{fontSize: '2.4rem'}}>Why DEFI-VPN?</h1>
            <div className="whys">
                <div className="square">
                    <h2 style={{color: '#4191E1', marginTop: '13px'}}>No Logs</h2>
                    <p style={{color: 'black', width: '18ch'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. vel, iure nulla! Optio soluta nostrum architecto error iure sapiente quaerat. Iusto!</p>
                </div>
                <div className="square">
                    <h2 style={{color: '#4191E1', marginTop: '13px'}}>High Speed</h2>
                    <p style={{color: 'black', width: '18ch'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. iure nulla! Optio soluta nostrum architecto error iure sapiente quaerat. Iusto!</p>
                </div>
                <div className="square">
                    <h2 style={{color: '#4191E1', marginTop: '13px'}}>Affordable</h2>
                    <p style={{color: 'black', width: '18ch'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. vel, iure nulla! Optio soluta nostrum architecto error iure sapiente quaerat. Iusto!</p>
                </div>
            </div>
        </div>
        <div className="protect">
            <h1 style={{fontSize: '2.2rem'}}>Protect all your devices!</h1>
            <p style={{width: '70ch', lineHeight: '40px', textAlign: 'center', color: '#4191E1'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, iste perspiciatis eveniet itaque ex vero animi sit, voluptas tenetur labore exercitationem quis consectetur. Beatae quaerat cumque quae sit, a deleniti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis accusantium eaque illo in quisquam voluptatum distinctio quibusdam odit, pariatur beatae voluptatibus temporibus esse nam itaque unde architecto adipisci nihil sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. veritatis.</p>
        </div>
        <div className="plan">
            <h1>Get the plan that works for you!</h1>
            <div className="plan-con">
                <div className="n-plan">
                <h2 style={{color: '#4191E1', paddingTop: '15px'}}>1 Month</h2>
                    <br />
                    <h1 style={{color: 'black'}}>$10.00</h1>
                    <p style={{color: '#E70E6B', fontWeight: 'bold', fontSize: '0.7em'}}>Per Month</p>
                    <br />
                    <p style={{color: '#4191E1', fontWeight: 'bold', fontSize: '0.7em', paddingTop: '8px'}}>Billed every month</p>
                    <p style={{color: '#4191E1', fontWeight: 'bold', fontSize: '0.7em', paddingTop: '8px'}}>30 day money back garanty</p>
                </div>
                <div className="s-plan">
                    <h3 style={{color: '#E70E6B'}}>RECOMMENDED</h3>
                    <hr style={{backgroundColor: '#E70E6B', width: '80%', marginLeft: '9.5%' }}/>
                    <br />
                    <h2 style={{color: '#4191E1'}}>12 Months</h2>
                    <br />
                    <h1 style={{color: 'black'}}>$6.99</h1>
                    <p style={{color: '#E70E6B', fontWeight: 'bold', fontSize: '0.7em'}}>Per Month</p>
                    <br />
                    <p style={{color: '#4191E1', fontWeight: 'bold', fontSize: '0.8em', paddingTop: '8px'}}>Billed every month</p>
                    <p style={{color: '#4191E1', fontWeight: 'bold', fontSize: '0.8em', paddingTop: '8px'}}>30 day money back garanty</p>
                </div>
                <div className="n-plan">
                <h2 style={{color: '#4191E1', paddingTop: '15px'}}>6 Months</h2>
                    <br />
                    <h1 style={{color: 'black'}}>$8.45</h1>
                    <p style={{color: '#E70E6B', fontWeight: 'bold', fontSize: '0.7em'}}>Per Month</p>
                    <br />
                    <p style={{color: '#4191E1', fontWeight: 'bold', fontSize: '0.7em', paddingTop: '8px'}}>Billed every month</p>
                    <p style={{color: '#4191E1', fontWeight: 'bold', fontSize: '0.7em', paddingTop: '8px'}}>30 day money back garanty</p>
                </div>
            </div>
        </div>
        <div className="whyvpn">
            <h1>Why use VPN?</h1>
            <br />
            <br />
            <br />
            <div className="con">
                <div className="t1">
                    <h2 style={{color: '#4191E1', paddingTop: '20px'}}>SECURITY</h2>
                    <p style={{color: 'black', width: '22ch', paddingTop: '30px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, culpa? Vel hic deserunt, recusandae sapiente eius error tempora, voluptates iure vero possimus quasi </p>
                </div>
                <hr className='vr'/>
                <div className="t2">
                <h2 style={{color: '#4191E1', paddingTop: '20px'}}>FREEDOM</h2>
                    <p style={{color: 'black', width: '22ch', paddingTop: '30px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, culpa? Vel hic deserunt, recusandae sapiente eius error tempora, voluptates iure vero possimus quasi </p>
                </div>
                <hr className='vr'/>
                <div className="t3">
                <h2 style={{color: '#4191E1', paddingTop: '20px'}}>PRIVACY</h2>
                    <p style={{color: 'black', width: '22ch', paddingTop: '30px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, culpa? Vel hic deserunt, recusandae sapiente eius error tempora, voluptates iure vero possimus quasi </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home