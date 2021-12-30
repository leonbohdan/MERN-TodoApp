import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./AuthPage.sass";

function Authpage() {
  return (
    <Switch>
      <>
        <div className="container">
          <div className="auth-page flex f-column f-center mt-6">
            <Route path="/login">
              <h3 className="has-text-centered is-size-1-tablet mb-5">
                Log in Page
              </h3>

              <form className="has-text-centered w400">
                <div className="field">
                  <p className="control has-icons-left has-icons-right">
                    <input
                      className="input is-rounded"
                      type="email"
                      placeholder="Email"
                    />

                    <span className="icon is-small is-left">
                      <span className="mdi mdi-email"></span>
                    </span>

                    <span className="icon is-small is-right">
                      <span className="mdi mdi-check-bold"></span>
                    </span>
                  </p>
                </div>

                <div className="field mb-5">
                  <p className="control has-icons-left">
                    <input
                      className="input is-rounded"
                      type="password"
                      placeholder="Password"
                    />

                    <span className="icon is-small is-left">
                      <span className="mdi mdi-lock"></span>
                    </span>
                  </p>
                </div>

                <div className="field">
                  <p className="control">
                    <button className="button is-success is-rounded boxed bold-500 mb-2">
                      Log in
                    </button>

                    <Link className="has-text-dark boxed" to="/registration">
                      No account?
                    </Link>
                  </p>
                </div>
              </form>
            </Route>

            <Route path="/registration">
              <h3 className="has-text-centered is-size-1-tablet mb-5">
                Sign up Page
              </h3>

              <form className="has-text-centered w400">
                <div className="field">
                  <p className="control has-icons-left has-icons-right">
                    <input
                      className="input is-rounded"
                      type="email"
                      placeholder="Email"
                    />

                    <span className="icon is-small is-left">
                      <span className="mdi mdi-email"></span>
                    </span>

                    <span className="icon is-small is-right">
                      <span className="mdi mdi-check-bold"></span>
                    </span>
                  </p>
                </div>

                <div className="field mb-5">
                  <p className="control has-icons-left">
                    <input
                      className="input is-rounded"
                      type="password"
                      placeholder="Password"
                    />

                    <span className="icon is-small is-left">
                      <span className="mdi mdi-lock"></span>
                    </span>
                  </p>
                </div>

                <div className="field">
                  <p className="control">
                    <button className="button is-success is-rounded boxed bold-500 mb-2">
                      Sign up
                    </button>

                    <Link className="has-text-dark boxed" to="/login">
                      Do you have an account?
                    </Link>
                  </p>
                </div>
              </form>
            </Route>
          </div>
        </div>
      </>
    </Switch>
  );
};

export default Authpage;
