import React, { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import EmailLoginForm from "./components/email-login-form";
import LoginList from "./components/list";
import OrganizationForm from "./components/organization-form";
interface LoginProps {}
const Login = (props: LoginProps) => {
  const history = useHistory();
  const { type } = useParams() as any;
  const [organization, setOrganization] = useState<string>("");

  const _renderLoginBody = () => {
    if (type) {
      // one of the login action is chosen hence avoid organization details
      switch (type) {
        case "email":
          return (
            <EmailLoginForm
              forgotPasswordPath={"/login"}
              alternativeLoginPath={"/login"}
              onSubmit={(data) => history.push("/home")}
            />
          );
        case "google":
          return "Development in progress";
        default:
          return null;
      }
    }
    if (organization) {
      // organization chosen, list the login options
      return (
        <LoginList
          organization={organization}
          onBackToOrganizationInput={() => setOrganization("")}
        />
      );
    }
    // none chosen hence request the organization name/details
    return <OrganizationForm onOrganizationInput={setOrganization} />;
  };

  return (
    <div style={{ width: "350px" }}>
      <div style={{ paddingBottom: "40px" }}>
        <h1>Login</h1>
        <p>
          Don’t have an account? <Link to="/register">Register Here</Link>
        </p>
      </div>
      {_renderLoginBody()}
    </div>
  );
};
export default Login;
