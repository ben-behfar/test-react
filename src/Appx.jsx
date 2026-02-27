import React, { StrictMode } from 'react'
import './index.css'
import './assets/style.css'
import Polite from './Polite'
import Timer from './Timer'

class Appx extends React.Component {
  render(){
    return(
      <div className='main'>
        <Polite/>
        <Timer/>
      </div>
    )
  }
}

export default Appx;