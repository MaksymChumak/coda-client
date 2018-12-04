import React from 'react';
import "./stylesheets/welcome.css"


const containerDivStyle = {
  padding: '50px 80px',
  color: '#727272',
  lineHeight: '1.6',
  maxWidth: '650px',
  margin: '40px auto',
  background: "#ffffff"
}

const h1Style = {
  margin: '0 0 30px',
  fontSize: '42px',
  lineHeight: '1',
  color: '#252427',
  fontWeight: '550',
}

const pStyle = {
  fontSize: '15px',
  margin: '1em 0 1em',
  letterSpacing: '0.06em',
}

class WelcomePage extends React.Component {

  render() {
    return (
      <div>
        <div id="bg"></div>
        <div className="container-welcome">
          <div style={containerDivStyle}>
          <h1 style={h1Style}>Welcome to Coda game!</h1>
          <p style={pStyle}>This website contains JavaScript implementation of Coda board game</p>
          <p style={pStyle}>Please Register and Login before accessing the game. For instructions on how to play game please visit our Manual page</p>
        </div>
      </div>

      </div>
    )
  }
}

export default WelcomePage