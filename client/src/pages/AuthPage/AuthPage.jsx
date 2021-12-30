import React from "react";
import "../AuthPage/AuthPage.sass";

const Authpage = () => {
  return (
    <>
      <div className="container">
        <div className="auth-page flex f-column f-center mt-6">
          <h3 className="has-text-centered is-size-1-tablet mb-5">
            Log in Page
          </h3>

          {/* <h3 className="has-text-centered is-size-1-tablet mb-6">Sign up Page</h3> */}

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

                <a className="has-text-dark boxed" href="/">
                  No account?
                </a>
              </p>
            </div>
          </form>

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

                <a className="has-text-dark boxed" href="/">
                  Do you have an account?
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Authpage;
