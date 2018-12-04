import React, { Component } from "react";
import "./stylesheets/leaderboard.css";

export default class LeaderBoard extends Component {

    renderPlayer(player){
        return (
            <div
                key={player.id}
                className="playerScore">
                <div>Name:{player.name}</div>
                <div>Wins:{player.wins}</div>
                <div>Loses:{player.loses}</div>
            </div>
        )
    }

    render(){

      return(
          <header className = "leaderboard">
          <div id="bg"></div>
          <div className="leaderboard-container">
            <div className="row-header">
              <div className="row">
                <div className="col">
                  <p>User Name</p>
                </div>
                <div className="col">
                  <p>Winstreak</p>
                </div>
              </div>

            </div>
            <div className="row">
              <div className="col">
                <p>Kahoot.json</p>
              </div>
              <div className="col">
                <p>9999</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p>Secondplace.json</p>
              </div>
              <div className="col">
                <p>8888</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p>Thirdplace.json</p>
              </div>
              <div className="col">
                <p>7777</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p>HELLO</p>
              </div>
              <div className="col">
                <p>HELLO</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p>HELLO</p>
              </div>
              <div className="col">
                <p>HELLO</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p>HELLO</p>
              </div>
              <div className="col">
                <p>HELLO</p>
              </div>
            </div>
          </div>
        </header>

        )
    }
}