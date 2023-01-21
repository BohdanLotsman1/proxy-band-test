import React from "react";
import { capitalize } from "../../libs/helpers";
import { Post } from "../../store/types";
import "./styles.scss";
interface Props {
  post: Post;
}

const PostCard = ({ post }: Props) => {
  return (
    <div className="postCard">
      <div className="postCard-title">
        <strong>{capitalize(post.title)}</strong>
      </div>
      <div>{capitalize(post.body)}</div>
    </div>
  );
};

export default PostCard;
