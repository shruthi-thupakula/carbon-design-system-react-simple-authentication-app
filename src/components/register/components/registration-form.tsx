import { ArrowRight32 } from "@carbon/icons-react";
import { Button, Select, SelectItem, TextInput } from "carbon-components-react";
import React, { useRef } from "react";

/**
 * @method formToJSON
 * Retrieves input data from a form and returns it as a JSON object.
 * @param  {{HTMLFormControlsCollection} elements  the form elements
 * @return {Object} form data as an object literal
 */
const formToJSON = (elements: HTMLFormControlsCollection) =>
  [].reduce.call(
    elements,
    (data: any, element: Element | any) => {
      data[element.name] = element.value;
      return data;
    },
    {}
  );

const formRows = [
  {
    firstName: (
      <TextInput
        id="firstName-input"
        labelText="First Name"
        placeholder="First Name"
        type="text"
        name="firstName"
        className="fieldWidth320"
        required
      />
    ),
    lastName: (
      <TextInput
        id="lastName-input"
        labelText="Last Name"
        placeholder="Last Name"
        type="text"
        name="lastName"
        className="fieldWidth320"
        required
      />
    ),
  },
  {
    company: (
      <TextInput
        id="company-input"
        labelText="Company"
        placeholder="Company"
        type="text"
        name="company"
        className="fieldWidth320"
        required
      />
    ),
    iAmA: (
      <Select
        id="iAma-input"
        className="fieldWidth320"
        style={{ width: "320px" }}
        required
        defaultValue=""
      >
        <SelectItem disabled hidden value="" text="Choose an option" />
        <SelectItem value="developer" text="Developer" />
        <SelectItem value="designer" text="Designer" />
        <SelectItem value="contentWriter" text="Content Writer" />
        <SelectItem value="manager" text="Manager" />
      </Select>
    ),
  },
  {
    email: (
      <TextInput
        id="email-input"
        labelText="Email"
        placeholder="Email"
        type="email"
        name="email"
        className="fieldWidth320"
        required
      />
    ),
    password: (
      <TextInput.PasswordInput
        id="password-input"
        labelText="Password"
        placeholder="Password"
        type="password"
        name="password"
        className="fieldWidth320"
        required
      />
    ),
  },
];
interface RegistrationFormProps {
  onSubmit: (data: any) => void;
}

const RegistrationForm = ({ onSubmit }: RegistrationFormProps) => {
  const formRef = useRef<React.MutableRefObject<HTMLFormElement>>(null);

  const handleSubmit = (e: React.SyntheticEvent) => {
    if (e.preventDefault) {
      e.preventDefault();
    }
    if (e.stopPropagation) {
      e.stopPropagation();
    }
    console.log(formToJSON((formRef as any).current.elements));
    onSubmit(formToJSON((formRef as any).current.elements));
  };

  return (
    <>
      {/* // Carbon components form not accepting ref, item ref is not working */}
      <form onSubmit={handleSubmit} ref={formRef as any}>
        {/* <Grid>
          <Row>
            <Column>Example content</Column>
            <Column>Example content</Column>
            <Column>Example content</Column>
            <Column>Example content</Column>
          </Row>
        </Grid> */}
        {/* Grid components are not working falling back to native css classes given by carbon components */}
        <div className="bx--grid bx--grid--narrow">
          {formRows &&
            formRows.map((row) => (
              <div className="bx--row">
                {row &&
                  Object.values(row).map((field) => (
                    <div className="bx--col ">
                      <div className="outside">
                        <div className="inside">{field}</div>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          <div
            className="bx--row"
            style={{
              padding: "20px 0px ",
            }}
          >
            <Button
              type="submit"
              renderIcon={ArrowRight32}
              style={{
                width: "100%",
              }}
            >
              Continue
            </Button>
          </div>
        </div>
      </form>

      <div>
        <p
          style={{
            fontSize: 14,
            opacity: 0.5,
          }}
        >
          By creating a Strobes account, you consent to and fully accept our
          Privacy Policy. Terms of Service apply.
        </p>
      </div>
    </>
  );
};

export default RegistrationForm;
