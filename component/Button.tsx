import { NextPage } from "next";
import { CSSProperties, HTMLAttributes } from "react";

interface Props {
  text?: string;
  onClick?: () => void;
  style?: HTMLAttributes<HTMLButtonElement> | CSSProperties | undefined;
}

const Button: NextPage<Props> = ({ text, onClick, style }) => {
  return (
    <button
      style={style}
      onClick={onClick}
      className="custom-button bg-purple "
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: "Click Me",
  onClick: () => null,
};

export default Button;
