import { ArrowLeft32, ArrowRight32 } from "@carbon/icons-react";
import { Button, Checkbox, TextInput } from "carbon-components-react";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { setLogin } from "../../utils";

interface EmailLoginFormProps {
  onAlternativeLogin?: Function;
  onForgotPassword?: Function;
  forgotPasswordPath: string;
  alternativeLoginPath: string;
  onSubmit: (data: any) => void;
}

const EmailLoginForm = (props: EmailLoginFormProps) => {
  const { forgotPasswordPath, alternativeLoginPath, onSubmit } = props;
  const formRef = useRef<React.MutableRefObject<HTMLFormElement> | any>(null);
  const [email, setEmail] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const handleSubmit = (e: React.SyntheticEvent) => {
    if (e.preventDefault) {
      e.preventDefault();
    }
    if (e.stopPropagation) {
      e.stopPropagation();
    }
    if (email) {
      // if email is given next form submission would be for password
      setLogin({
        email,
        accessToken: "test-access-token",
        provider: "manual",
      });
      onSubmit({
        email,
        password: formRef.current.password.value || null,
      });
    } else {
      setEmail(formRef.current.email.value || null);
    }
  };

  const handleBackToEmailInput = () => {
    setEmail("");
  };
  return (
    <>
      {email && (
        <div style={{ display: "flex", alignItems: "center" }}>
          <Button
            renderIcon={ArrowLeft32}
            hasIconOnly
            onClick={handleBackToEmailInput}
            kind="ghost"
          />
          <h5>{email}</h5>
        </div>
      )}
      {/* // Carbon components form not accepting ref, item ref is not working */}
      <form onSubmit={handleSubmit} ref={formRef}>
        {!email ? (
          <TextInput
            id="email-input"
            labelText="Enter your Strobe Id"
            placeholder="Email"
            type="email"
            name="email"
            style={{ width: "320px" }}
            required
          />
        ) : (
          <TextInput.PasswordInput
            id="password-input"
            labelText="Password"
            placeholder="Password"
            type="password"
            name="password"
            style={{ width: "320px" }}
            required
          />
        )}

        <Button
          type="submit"
          style={{ width: "100%" }}
          renderIcon={ArrowRight32}
        >
          Continue
        </Button>
      </form>
      <div
        className="flexRow width320"
        style={{
          paddingTop: "10px",
        }}
      >
        <Checkbox
          id="checked"
          labelText="Remember Me"
          name="rememberMe"
          checked={rememberMe}
          onChange={(value) => setRememberMe(value)}
        />
        <Link to={forgotPasswordPath}> Forgot Password</Link>
      </div>
      <div
        style={{
          paddingTop: "20px",
        }}
      >
        <Link to={alternativeLoginPath}>Alternative Login</Link>
      </div>
    </>
  );
};

export default EmailLoginForm;
