import React, { Component } from "react";
class Login extends React.Component {
  state ={
    account: {email:'', password:''}
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 pt-5 m-auto">
            <div className="form-wrap mt-5 p-5">
             <h1>Login</h1>
              <form>
                <div className="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
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
