import React from 'react';
import axios from 'axios'
export class PlayerForm extends Component{
   
    constructor(props){
        super();
    }

    submitPlayer = (event) =>{
        event.preventDefault();

        axios.post('http://localhost:4000/players',
        {
            firstName: this.refs.firstName.value,
            lastName: this.refs.lastName.value,
            phone: this.refs.phone.value,
            email: this.refs.email.value,
        })
        .then( (response) => console.log(response))
        .catch( (error)   => console.error(error));
    }

    deletePlayer = (event) => {
        event.preventDefault();
        axios.delete(`http://localhost:4000/player/${this.props.player._id}`,{})
        .then( (response) => console.log(response))
        .catch( (error)   => console.error(error));
        window.location.reload(false);
    }

    updatePlayer = (event) => {
        event.preventDefault();
    }
    
    render(){
        return (
            <div className="row">
                <h1 className="center">Add a new Player</h1>
                <form className="col s12" onSubmit={this.submitPlayer.bind(this)}>
                <div className="row">
                    <div className="input-field col s6">
                            <input placeholder="First Name" id="firstName" ref="firstName" type="text" className="validate"/>
                            <label htmlFor="firstname">First Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input placeholder="Last Name" id="lastName" ref="lastName" type="text" className="validate"/>
                            <label htmlFor="lastname">Last Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input placeholder="Phone" id="phone" ref="phone" type="text" className="validate"/>
                            <label htmlFor="phone">Phone</label>
                        </div>
                        <div className="input-field col s6">
                            <input placeholder="Email" id="email" ref="email" type="text" className="validate"/>
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <button className="btn waves-effect waves-light" type="submit" name="action">Add Player</button>
                    <button className="btn waves-effect waves-light" onClick={this.deletePlayer.bind(this)}>Delete</button>
                    <button className="btn waves-effect waves-light" onClick={this.updatePlayer.bind(this)}>Update</button>
                </form>
            </div>
        );
    }
}

export default PlayerForm;