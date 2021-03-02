import React, { Component } from 'react';
import axios from 'axios';
import '../css/App.css';
import PlayerSingle from './PlayerSingle';
import PlayerList from './PlayerList';
import PlayerForm from './PlayerForm';

class App extends Component{

    constructor (){
        super ();
        this.state = {
            players: [],
            currentPlayer:{}
        }
        this.updateCurrentPlayer = this.updateCurrentPlayer.bind(this);
    }

    componentDidMount(){
        const url = "http://localhost:4000/players";
        axios.get(url)
        .then(response => {
            this.setState({
                players: response.data
            })
        })
        .catch(error => console.error(error));
    }

    updateCurrentPlayer = (item) =>{
        this.setState({
            currentPlayer: item,
        })
    }

    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    {/* row with 12 spaces */}
                    <nav>
                        <div className="nav-wrapper blue darken-1">
                            <a href="/" className="brand-logo">
                                <b><h3>Soccer Club Management</h3></b>
                            </a>
                        </div>
                    </nav>
                </div>
                <div className="row">
                    <div className = "col s3">
                        <PlayerList 
                            players = {this.state.players}
                            updateCurrentPlayer={this.updateCurrentPlayer}
                        />
                    </div> 
                   <div className="col s9">
                    <PlayerSingle player={this.state.currentPlayer}/>
                </div>
                </div>

                <div className="row">
                    <div className="col s12">
                        <PlayerForm player={this.state.currentPlayer}/>
                    </div>
                </div>
            </div>
           
        )
    }
}

export default App;