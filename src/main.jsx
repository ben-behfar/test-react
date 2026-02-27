import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

class Timer extends React.Component{
constructor(){
  super();
  this.state = {
    time : new Date().toLocaleTimeString()
  }
}

render(){
setInterval(()=>{
  this.setState({
    time:new Date().toLocaleTimeString()
  })
}, 1000)

  return(
      <h2 className='timer'>
         the time is {this.state.time}
      </h2>
    )
  }
}

class Polite extends React.Component{
  render(){
    return(
        <div>
          <h1>hello there</h1>
        </div>
    )
  }
}

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

  createRoot(document.getElementById('root')).render(<Appx/>);

