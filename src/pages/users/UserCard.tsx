import React from "react";
import { Link } from "react-router-dom";
import { User } from "../../store/types";
import "./styles.scss";

interface Props {
  user: User;
  setUserId: React.Dispatch<React.SetStateAction<number | null>>;
}

const UserCard = ({ user, setUserId }: Props) => {
  const initials = user.name.split(" ");
  const handleClick = () => {
    setUserId(user.id);
  };
  return (
    <div className="userCard">
      <div className="userCard-avatarContainer">
        <div className="userCard-avatarContainer-avatar">
          {initials[0][0]}
          {initials[1][0]}
        </div>
        {user.name}
      </div>
      <div className="userCard-infoItem">
        <strong>Email:</strong> {user.email}
      </div>
      <div className="userCard-infoItem">
        <strong>Nickname:</strong> {user.username}
      </div>
      <div className="userCard-infoItem">
        <strong>Phone:</strong> {user.phone}
      </div>
      <div className="userCard-buttonsContainer">
        <Link
          className="userCard-buttonsContainer-button"
          to={`/posts?userId=${user.id}`}
        >
          Posts
        </Link>
        <button
          className="userCard-buttonsContainer-button"
          onClick={handleClick}
        >
          Albums
        </button>
      </div>
    </div>
  );
};

export default UserCard;
