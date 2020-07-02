import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signIn } from "./SignInActions";

const SignIn = (props) => {
  const { signIn } = props;

  const submitHandler = (e) => {
    e.preventDefault();

    signIn({ email: "cleber@gmail.com", password: "12348" });
  };

  return (
    <div className="container h-100 pt5">
      <h1>Sign In</h1>
      <div className="d-flex flex-column h-100">
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label> E-mail</label>
            <input type="text" className="form-control" name="email" />
          </div>
          <div className="form-group">
            <label> Password</label>
            <input type="password" className="form-control" name="password" />
          </div>
          <div>
            <button className="btn btn-primary btn-round">Submit</button>
          </div>
        </form>
        <div className="container text-center fixed-bottom pb-5">
          <div className="text-muted">Create an Account</div>
          <Link to="/sign-up">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { account: state.signIn.account };
};
export default connect(mapStateToProps, { signIn })(SignIn);
