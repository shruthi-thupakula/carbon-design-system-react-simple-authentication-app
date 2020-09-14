import { ArrowRight32 } from "@carbon/icons-react";
import { Button } from "carbon-components-react";
import React from "react";
import { GoogleLogout } from "react-google-login";
import { useHistory } from "react-router-dom";
import { G_CLIENT_ID } from "../config";
import { getLogin, logout } from "../utils";
interface HomeProps {}
const Home = (props: HomeProps) => {
  const history = useHistory();
  const user = getLogin();
  if (!user || !user.accessToken) {
    history.push("/");
  }

  const handleGoogleLogoutFailure = () => {
    alert("Logout failed, please retry!");
  };

  const handleLogout = () => {
    logout();
    history.push("/");
    return;
  };
  const _renderLogoutButton = () => {
    if (!user) {
      return;
    }
    switch (user.provider) {
      case "google":
        return (
          <GoogleLogout
            clientId={G_CLIENT_ID}
            onLogoutSuccess={handleLogout}
            onFailure={handleGoogleLogoutFailure}
            render={(renderProps) => (
              <Button
                onClick={renderProps.onClick}
                kind="tertiary"
                renderIcon={ArrowRight32}
                style={{ width: "100%" }}
              >
                Logout
              </Button>
            )}
          ></GoogleLogout>
        );
      default:
        return (
          <Button
            onClick={handleLogout}
            kind="tertiary"
            renderIcon={ArrowRight32}
            style={{ width: "100%" }}
          >
            Logout
          </Button>
        );
    }
  };
  return (
    <div>
      <h4 className="Home">Welcome</h4>
      {_renderLogoutButton()}
    </div>
  );
};
export default Home;
