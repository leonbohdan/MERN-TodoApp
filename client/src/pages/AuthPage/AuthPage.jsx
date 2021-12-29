import React from 'react';
import "../AuthPage/AuthPage.sass";

const Authpage = () => {
  return (
    <>
      <div className="container">
        <div className="auth-page flex f-column f-center">
          <h3 className="has-text-centered is-size-1-tablet">Log in Page</h3>

          {/* <h3 className="has-text-centered is-size-1-tablet">Sign up Page</h3> */}

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
                <button className="button is-success is-rounded boxed bold-500">
                  Log in
                </button>

                {/* <button className="button is-success is-rounded boxed bold-500">Sign up</button> */}
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Authpage;
