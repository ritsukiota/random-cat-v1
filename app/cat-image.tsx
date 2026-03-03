"use client";

import { useState } from "react";
import { fetchImage } from "./fetch-image";

type CatImageProps = {
  url: string;
};

export function CatImage({ url }: CatImageProps) {
  const [imageUrl, setImageUrl] = useState(url);

  const refreshImage = async () => {
    const image = await fetchImage();
    setImageUrl(image.url);
  };

  return (
    <div>
      <button onClick={refreshImage}>
        他のにゃんこも見る
      </button>

      <div>
        <img src={imageUrl} alt="cat" width="300" />
      </div>
    </div>
  );
}