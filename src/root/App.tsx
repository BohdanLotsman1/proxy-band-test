import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../hooks/reduxHooks";
import { getUsers } from "../store/reducers/ActonCreators";
import { usersSelector } from "../store/selectors";
import "./App.css";

function App() {
  const dispatch = useAppDispatch();
  const {userList, error} = useSelector(usersSelector);
  useEffect(() => {
    dispatch(getUsers());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return  <div className="App">{error}{JSON.stringify(userList)}</div>;
}

export default App;
