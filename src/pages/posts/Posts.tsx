import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { getPosts, getSelectedUser } from "../../store/reducers/ActonCreators";
import {
  postsSelector,
  selectedUserSelector,
  usersSelector,
} from "../../store/selectors";
import PostCard from "./PostCard";
import "./styles.scss";

const Posts = () => {
  const location = useLocation();
  const param = new URLSearchParams(location.search).get("userId");
  const userId = parseInt(param ?? "");
  const dispatch = useAppDispatch();
  const { postList, isLoading, error } = useSelector(postsSelector);
  const { selectedUser } = useSelector(usersSelector);
  const user = useSelector(selectedUserSelector(userId));

  const currentUser = user ?? selectedUser;

  useEffect(() => {
    if (userId) {
      dispatch(getPosts(userId));
      if (!user) {
        dispatch(getSelectedUser(userId));
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(currentUser);

  return (
    <div className="posts">
      <Link className="posts-backBtn" to={"/"}>
        {"<- Back"}
      </Link>
      {currentUser?.name && (
        <div className="posts-title">{currentUser?.name}'s posts</div>
      )}
      {error}
      {isLoading ? (
        <>Loading...</>
      ) : (
        <div className="posts-postsContainer">
          {postList.map((item) => (
            <PostCard key={item.id} post={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Posts;
