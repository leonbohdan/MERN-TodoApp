import React from 'react';
import "../AuthPage/AuthPage.sass";

const Authpage = () => {
  return (
    <>
      <div className="container">
        <div className="auth-page">
          <h3 className="has-text-centered is-size-1-tablet">Log in Page</h3>

          {/* <h3 className="has-text-centered is-size-1-tablet">Sign up Page</h3> */}

          <form>
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

            <div className="field">
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
                <button className="button is-success">Login</button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Authpage;
