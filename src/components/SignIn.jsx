import React, { Component } from 'react';
import { firebaseApp } from '../firebase';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            error: {
                message: ""
            }
        }
    }

    signIn() {
        console.log('this.state', this.state);
        const { email, password } = this.state;
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
            .catch(error => {
                this.setState({error})
            })
    }

    render() {
        return (
            <div
                className="form-inline"
                style={{margin: '5%', width: '20%'}}>
                <h2>SignIn</h2>
                <div className="form-group">
                    <input
                        className="form-control"
                        type="text"
                        style={{marginRight: '5px', marginTop: '1%'}}
                        placeholder="email"
                        onChange={event => this.setState({email: event.target.value})}
                    />
                    <input
                        className="form-control"
                        type="password"
                        style={{marginRight: '5px', marginTop: '1%'}}
                        placeholder="password"
                        onChange={event => this.setState({password: event.target.value})}
                    />
                    <button
                        className="btn btn-primary"
                        type="button"
                        style={{marginTop: '1%'}}
                        onClick={() => this.signIn()}
                    >
                        Sing In
                    </button>
                </div>
            </div>
        )
    }
}

export default SignIn;