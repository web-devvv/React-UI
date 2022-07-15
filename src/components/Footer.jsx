import React from 'react'
import './Footer.css'
import cards from '../images/credit-cards.svg'

function Footer() {
  return (
    <footer>
        <p style={{fontWeight: 'bold', fontSize: '0.8rem', paddingTop: '25px', paddingLeft: '40px'}}>&copy; 2022 DEFI. All Rights Resereved </p>
        <p style={{fontWeight: 'bold', fontSize: '0.8rem', paddingTop: '24px', paddingLeft: '40px', opacity: '0.9'}}>support@defi.com</p>
        <img src={cards} alt="" style={{marginLeft: '40%'}}/>
    </footer>
  )
}

export default Footer