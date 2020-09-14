import { ArrowLeft32, ArrowRight32 } from "@carbon/icons-react";
import { Button } from "carbon-components-react";
import React from "react";
import GoogleLogin from "react-google-login";
import { useHistory } from "react-router-dom";
import { G_CLIENT_ID } from "../../config";
import { setLogin } from "../../utils";
// const listItems: Array<{
//   name: string;
//   id: string;
//   icon: React.ReactNode;
// }> = [
//   {
//     name: "Log in with Email",
//     id: "",
//     icon: ArrowRight32,
//   },
//   {
//     id: "google",
//     icon: ArrowRight32,
//     component:props=><GoogleLogin
//     clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
//     render={renderProps => (
//     )}
//     buttonText="Login"
//     onSuccess={responseGoogle}
//     onFailure={responseGoogle}
//     cookiePolicy={'single_host_origin'}
//   />
//   },
// ];
interface LoginListProps {
  organization: string;
  onBackToOrganizationInput: Function;
}
const LoginList = (props: LoginListProps) => {
  const { organization, onBackToOrganizationInput } = props;

  const handleGoogleLoginFailure = () => {
    alert("Login failed, please retry!");
  };
  const handleGoogleLoginSuccess = (response: any) => {
    setLogin({
      provider: "google",
      accessToken: response.accessToken,
    });
    history.push("/home");
    return;
  };
  const history = useHistory();
  return (
    <div
      style={{
        marginTop: "40px",
      }}
    >
      {organization && (
        <div style={{ display: "flex", alignItems: "center" }}>
          <Button
            renderIcon={ArrowLeft32}
            hasIconOnly
            onClick={onBackToOrganizationInput}
            kind="ghost"
          />
          <h5>{organization || null}</h5>
        </div>
      )}
      {/* {listItems &&
        listItems.map(({ name, id, icon }) => ( */}
      <div style={{ paddingTop: "5px" }}>
        <Button
          onClick={() => history.push(`/login/email`)}
          kind="tertiary"
          renderIcon={ArrowRight32}
          style={{ width: "100%" }}
        >
          Email
        </Button>
      </div>
      <div style={{ paddingTop: "5px" }}>
        <GoogleLogin
          clientId={G_CLIENT_ID}
          render={(renderProps) => (
            <Button
              onClick={renderProps.onClick}
              kind="tertiary"
              renderIcon={ArrowRight32}
              style={{ width: "100%" }}
            >
              Google
            </Button>
          )}
          onSuccess={handleGoogleLoginSuccess}
          onFailure={handleGoogleLoginFailure}
          cookiePolicy={"single_host_origin"}
        />
      </div>
      {/* ))} */}
    </div>
  );
};
export default LoginList;
