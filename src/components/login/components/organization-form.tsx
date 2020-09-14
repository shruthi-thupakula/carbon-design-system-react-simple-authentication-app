import { ArrowRight32 } from "@carbon/icons-react";
import { Button, TextInput } from "carbon-components-react";
import React, { useRef } from "react";

const OrganizationForm = ({
  onOrganizationInput,
}: {
  onOrganizationInput: Function;
}) => {
  const formRef = useRef<React.MutableRefObject<HTMLFormElement>>(null);

  const handleSubmit = (e: React.SyntheticEvent) => {
    if (e.preventDefault) {
      e.preventDefault();
    }
    if (e.stopPropagation) {
      e.stopPropagation();
    }
    onOrganizationInput((formRef.current as any).organizationName.value);
  };
  return (
    // Carbon components form not accepting ref, item ref is not working
    <form onSubmit={handleSubmit} ref={formRef as any}>
      <TextInput
        id="organization-input"
        labelText="Enter your organization name"
        placeholder="Organization Name"
        name="organizationName"
        style={{ width: "320px" }}
        required
      />
      <Button type="submit" style={{ width: "100%" }} renderIcon={ArrowRight32}>
        Continue
      </Button>
    </form>
  );
};

export default OrganizationForm;
