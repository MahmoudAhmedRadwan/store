import React from 'react';

class LogIn extends React.Component{

    state ={
        email : '',
        password : ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handelSubmit = (e) => {
        e.preventDefault()
        console.log(this.state);

        if(this.state.email != "" && this.state.password != ""){
            this.props.history.push("/Store");
        }
    }

    render(){
        console.log(this.props);
        return(
            <div className="kol">
                <div className="container">
                    <div className="row">
                        <div className="col-4 offset-4 mt-5">
                            <div className="background text-left">
                                <h2 className="logIn-headLine text-center">Log In</h2>
                                <form onSubmit={this.handelSubmit}>
                                <span className="descipe ml-2">email : </span>
                                <input className="inp outLine" placeholder="Email" name="email" type="email" onChange={this.handleChange}/>
                                <span className="descipe">password : </span>
                                <input className="inp outLine" placeholder="password" name="password" type="password" onChange={this.handleChange}/>
                                <button className="log outLine" onClick={this.handelSubmit}>Log In</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LogIn;