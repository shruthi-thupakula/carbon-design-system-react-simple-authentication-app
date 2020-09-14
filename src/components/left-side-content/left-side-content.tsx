import { EdtLoop24, OverflowMenuHorizontal32 } from "@carbon/icons-react";
import { SideNav, SideNavDetails, SideNavProps } from "carbon-components-react";
import React from "react";

const LeftSideContent = (props: SideNavProps) => {
  return (
    <SideNav
      isFixedNav
      expanded={true}
      isChildOfHeader={false}
      aria-label="Side navigation"
      className="sideNav"
      {...props}
    >
      <SideNavDetails className="sideNavDetails" title="">
        <h4>Risk-centered</h4>
        <h5 className="semiBold200">Vulnerability Management</h5>
      </SideNavDetails>
      <div className="sideNavDetails">
        <EdtLoop24 />
        <h5 className="semiBold400">Security Workflows</h5>
        <h6 className="semiBold200">
          Create and run playbooks to integrate security into your CI/CD
          pipeline.
        </h6>
        <OverflowMenuHorizontal32 />
      </div>
    </SideNav>
  );
};
export default LeftSideContent;
