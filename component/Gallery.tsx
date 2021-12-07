import { useState } from "react";
import GalleryPhoto from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import ItemCard from "./ItemCard";

const IMAGES = [
  {
    src: "/gallery/bg1.jpg",
  },
  {
    src: "/gallery/bg2.jpg",
  },
  {
    src: "/gallery/bg3.jpg",
  },
  {
    src: "/gallery/bg4.jpg",
  },
  {
    src: "/gallery/bg5.jpg",
  },
  {
    src: "/gallery/bg6.jpg",
  },

  {
    src: "/gallery/bg8.jpg",
  },
];

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [url, setUrl] = useState("");
  const handleImageClick = (url: string) => {
    setIsOpen(true);
    setUrl(url);
  };
  return (
    <>
      {IMAGES.map((item, i) => (
        <ItemCard key={i} url={item.src} onImageClick={handleImageClick} />
      ))}
      {isOpen && (
        <Lightbox
          mainSrc={url}
          nextSrc={url}
          prevSrc={url}
          onCloseRequest={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Gallery;
