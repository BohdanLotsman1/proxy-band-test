import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { getUsers } from "../../store/reducers/ActonCreators";
import { usersSelector } from "../../store/selectors";
import UserCard from "./UserCard";
import "./styles.scss";
import AlbumsModal from "./AlbumsMidal";

const Users = () => {
  const dispatch = useAppDispatch();
  const { userList, error, isLoading } = useSelector(usersSelector);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  useEffect(() => {
    if (userList.length) return;
    dispatch(getUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="users">
      <div className="users-title">Welcome to the test task!</div>
      {error}
      {isLoading ? (
        <>Loading...</>
      ) : (
        <div className="users-usersContainer">
          {userList.map((user) => (
            <UserCard key={user.id} setUserId={setSelectedUserId} user={user} />
          ))}
        </div>
      )}
      <AlbumsModal setUserId={setSelectedUserId} userId={selectedUserId} />
    </div>
  );
};

export default Users;
