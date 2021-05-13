import React from "react";

import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { getStrapiMedia } from "../utils/media";

const Image = ({ media, className, style, placeholder }) => {
  const image = getImage(media.urlSharp);

  const alt = "An image uploaded to Strapi";

  // fallback for svg
  if (!image) {
    const imageUrl = getStrapiMedia(url);
    return <img src={imageUrl} alt={alt} className={className} />;
  }

  return (
    <GatsbyImage
      className={className}
      placeholder="none"
      style={style}
      image={image}
      alt={alt}
    />
  );
};

export default Image;
