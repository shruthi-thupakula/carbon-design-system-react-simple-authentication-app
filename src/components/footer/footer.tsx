import React from "react";
interface FooterProps {
  text?: string;
}

const Footer = (props: FooterProps) => {
  const content =
    props.text || `© Copyright Strobes 2020. All Rights Reserved.  `;
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontSize: 12,
        }}
      >
        {content}
      </p>
    </div>
  );
};
export default Footer;
