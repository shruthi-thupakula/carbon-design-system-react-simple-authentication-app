import { Content } from "carbon-components-react";
import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Footer from "../footer";
import Home from "../home";
import Login from "../login";
import Register from "../register";
import Title from "../title";

interface MainContentProps {}
const MainContent = (props: MainContentProps) => {
  return (
    <Content
      style={{ display: "flex", justifyContent: "center", height: "100vh" }}
    >
      <div className="verticalSpaceBetween">
        <Title />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/login" />} />
            <Route path="/login/:type?">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    </Content>
  );
};
export default MainContent;
