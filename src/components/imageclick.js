import React from 'react';
import { Component } from 'react';
import Underthebloodmoon from "../images/UndertheBloodmoon .jpg";
import imageclick from "./imageclick.css";
//Need and image and an on click that increments a counter by ++x.

class Click extends Component {
    state = {
        score: 0,
        wins: 0
    };

    handleIncrement = () => {
        if(this.state.score < 10) {
            this.setState({ score: this.state.score + 1 });
        }else{
            this.setState({wins: this.state.wins + 1});
            this.setState({score: this.state.score = 0});
        }
      };

render() {
    return (
        <div>
        <p className="score">Score: {this.state.score}</p>
        <p className="wins">wins: {this.state.wins}</p>
        <img src={Underthebloodmoon} alt="Bloodmoon" className="image" onClick={this.handleIncrement}></img>
        </div>
    );
  }
}
export default Click;