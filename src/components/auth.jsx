import React, { useState } from "react"
import axios from "axios"

const Auth = (props) => {

  let [authMode, setAuthMode] = useState("signin")

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  const onSubmit = (recipeObject) => {
    const url = `http://localhost:4000/recipes/update-recipe/${props.match.params.id}`
    axios
    .put(url, recipeObject)
    .then((res) => {
        if (res.status === 200) {
        alert("Recipe successfully updated");
        props.history.push("/recipe-list");
        } else Promise.reject();
    })
    .catch((err) => alert("Something went wrong"));
};

  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>Sign Up</span>
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input type="email" className="form-control mt-1" placeholder="Enter email"/>
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input type="password" className="form-control mt-1" placeholder="Enter password"/>
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
            <p className="text-center mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
      </div>
    )
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>Sign In</span>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input type="text" className="form-control mt-1" placeholder="e.g Jane Doe"/>
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input type="email" className="form-control mt-1" placeholder="Email Address"/>
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input type="password" className="form-control mt-1" placeholder="Password"/>
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
          <p className="text-center mt-2">
            Forgot <a href="/api/auth/signin">password?</a>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Auth;