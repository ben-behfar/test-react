import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

class Timer extends React.Component{
render(){
  return(
      <h2>
         the time is {new Date().toLocaleTimeString()}
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
      <div>
        <Polite/>
        <Timer/>
      </div>
    )
  }
}

const prog = () =>{

  createRoot(document.getElementById('root')).render(<Appx/>);
}
  setInterval(() => {prog()} ,1000)
