import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import MainPage from "./pages/MainPage";
import MainPageForAll from "./pages/MainPageForAll";
import AuthPage from "./pages/AuthPage";

export const useRouter = (isLogined) => {
  if (isLogined) {
    return (
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/" exact component={MainPageForAll} />
      <Route path="/login" exact component={AuthPage} />
      <Route path="/registration" exact component={AuthPage} />
    </Switch>
  );
};
