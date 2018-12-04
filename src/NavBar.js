import React from 'react';
import {Link} from 'react-router-dom';
import "./stylesheets/header.css";
import { connect } from 'react-redux';
import { logout } from './actions/user';

class NavBar extends React.Component {

  render() {
    return (
      <div>
        {console.log(this.props)}
        <header className="header-fixed">
          <div className="header-limiter">
            <div className = "logo">CODA</div>
            <nav>

              <Link to="/">Welcome</Link>
              <Link to="/manual">Manual</Link>
              <Link to="/leaderboard">Leaderboard </Link>
              {this.props.user ? (
              <Link to="/game">Game</Link>
              ) : (
              <Link to="/registration">Register</Link>
              )}
              {this.props.user ? (
              <Link to="/" onClick={() => this.props.dispatch(logout())}>Log Out</Link>
              ) : (
              <Link to="/login">Login</Link>
              )}
            </nav>
          </div>
        </header>
        <div className="header-fixed-placeholder"></div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  const { user } = state.login;
  return {
    user,
  };
}

export default connect(mapStateToProps)(NavBar);
