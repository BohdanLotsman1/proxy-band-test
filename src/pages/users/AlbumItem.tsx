import React from "react";
import { Album } from "../../store/types";
import "./styles.scss";

interface Props {
  album: Album;
}

const AlbumItem = ({ album }: Props) => {
  return (
    <div className="albumItem">
      <div className="albumItem-dot" /> {album.title}
    </div>
  );
};

export default AlbumItem;
