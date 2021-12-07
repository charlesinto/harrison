import { NextPage } from "next";
import Link from "next/link";
import { CSSProperties, HTMLAttributes } from "react";

interface Props {
  text?: string;
  onClick?: () => void;
  style?: HTMLAttributes<HTMLButtonElement> | CSSProperties | undefined;
  href?: string;
}

const ButtonLink: NextPage<Props> = ({ text, href, style }) => {
  return (
    <Link href={href ? href : ""}>
      <a href={href} style={style} className="custom-button mb-0 bg-purple ">
        {text}
      </a>
    </Link>
  );
};

ButtonLink.defaultProps = {
  text: "Click Me",
  href: "/",
  onClick: () => null,
};

export default ButtonLink;
