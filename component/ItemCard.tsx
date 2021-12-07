import { NextPage } from "next";
import image from "next/image";
import React, { useEffect, useMemo, useRef, useState } from "react";

interface Props {
  url: string;
  description?: string;
  onImageClick?: (url: string) => void;
}

const ItemCard: NextPage<Props> = ({ url, description, onImageClick }) => {
  const itemRef = React.createRef<any>();

  const [state, setState] = useState<any>({
    span: 0,
    imageLoaded: false,
    liked: false,
  });
  useEffect(() => {
    if (itemRef.current.complete) {
      setSpan();
    }

    return () => {
      if (itemRef.current) itemRef.current.removeEventListener("load", setSpan);
    };
  }, []);

  const setSpan = () => {
    const height = itemRef.current.clientHeight;
    const span = Math.ceil(height / 10);
    setState({ span, imageLoaded: true });
  };

  return (
    <div
      onClick={() => (onImageClick ? onImageClick(url) : null)}
      className="img-card"
      style={{ gridRowEnd: `span ${state.span}` }}
    >
      <img
        ref={itemRef}
        alt={description}
        style={{ objectFit: "cover", height: "100%", width: "100%" }}
        src={url}
      />
    </div>
  );
};

ItemCard.defaultProps = {
  description: "shshsnssu",
};

export default ItemCard;
