import React from 'react';

const PlayerSingle = (props) =>{
    return(
        <div className="row">
            <div className="col s12">
                <div className="card">
                    <div className="card-image">
                        <img src="../../public/sunset.jpg" alt="sunset.jpg"></img>
                        <span className="card-title">{props.player.firstName}{props.player.lastName}</span>
                    </div>
                    <div className="card-content">
                        <p>Phone: { props.player.phone
                            ? props.player.phone
                            : "-"
                            }
                        </p>
                        <p>Email: {props.player.email}</p>
                        <p>Strength: {props.player.strength
                            ? props.player.strength
                            : "-"
                            }
                        </p>
                        <p>Endurance:{props.player.endurance
                            ? props.player.endurance
                            : "-"
                            }
                        </p>
                    </div>
                    <div className="card-action">
                            <a href="#!">{props.player.team}</a>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default PlayerSingle;