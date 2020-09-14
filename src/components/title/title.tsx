import React from "react";
import "./styles.css";
interface TitleProps {
  text?: string;
}
const Title = (props: TitleProps) => {
  return (
    <div>
      <h4 className="title">{props.text || "strobes"}</h4>
    </div>
  );
};
export default Title;
