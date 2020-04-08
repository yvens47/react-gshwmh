import React, { Component } from "react";
class Login extends React.Component {
  state ={
    account: {email:'', password:''}
  }


  handleSubmit = (e)=>{
    e.preventDefault();
    console.log(this.state.account);

  }

handleChange = ({target})=>{
  // clone state and set property value
  const account = {...this.state.account};
  account[target.name] = target.value;
 
  //update state
  this.setState({account});


}
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 pt-5 m-auto">
            <div className="form-wrap mt-5 p-5">
             <h1>Login</h1>
              <form onSubmit ={this.handleSubmit}>
                <div className="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    name='email'
                    value = {this.state.email}
                    onChange = {this.handleChange}
                    
                    placeholder="Enter email"
                  />
                 
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    name='password'
                    value={this.state.password}
                    onChange = {this.handleChange}
                  />
                </div>
                
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
