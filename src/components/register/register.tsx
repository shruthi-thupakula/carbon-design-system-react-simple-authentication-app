import React from "react";
import { Link, useHistory } from "react-router-dom";
import RegistrationForm from "./components/registration-form";
interface RegisterProps {}

const Register = (props: RegisterProps) => {
  const history = useHistory();

  const _renderRegisterBody = () => {
    return <RegistrationForm onSubmit={() => history.push("/home")} />;
  };

  return (
    <div>
      <div style={{ paddingBottom: "40px" }}>
        <h1>Register</h1>
        <p>
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
      {_renderRegisterBody()}
    </div>
  );
};
export default Register;
