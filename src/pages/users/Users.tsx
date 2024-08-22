import { useContext, useEffect, useRef, useState } from "react";
import PrimaryButton from "../../components/button/PrimaryButton";
import { ThemeContext } from "../../components/portal/themeContext";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { fetchUserbyId } from "../../features/userSlice";
import {
  createUser,
  fetchUsers,
  removeUserbyId,
  updateUserNameById,
} from "../../features/usersSlice";

export const Users = function () {
  const users = useSelector((state: RootState) => state.users.entities);
  const activeUser = useSelector((state: RootState) => state.user);
  const [inputValue, setInputValue] = useState("");
  const [nameInputValue, setNameInputValue] = useState("");

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const { isDark, setIsDark } = useContext(ThemeContext);

  useEffect(() => {
    setIsDark(false);
  });

  return (
    <main className="users">
      <h3>Users</h3>
      <div>
        {users.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))}
      </div>
      <input
        type="text"
        placeholder="id"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        value={inputValue}
      />
      <PrimaryButton
        onClick={() => {
          dispatch(fetchUserbyId(+inputValue));
          setInputValue("");
        }}
      >
        Get user by id
      </PrimaryButton>
      <PrimaryButton
        onClick={() => {
          dispatch(removeUserbyId(+inputValue));
          setInputValue("");
        }}
      >
        Delete user by id
      </PrimaryButton>
      <PrimaryButton
        onClick={() => {
          dispatch(createUser(inputValue));
          setInputValue("");
        }}
      >
        Create user by name
      </PrimaryButton>

      <input
        type="text"
        placeholder="newName"
        onChange={(e) => {
          setNameInputValue(e.target.value);
        }}
        value={nameInputValue}
      />
      <PrimaryButton
        onClick={() => {
          dispatch(updateUserNameById([+inputValue, nameInputValue]));
          setInputValue("");
          setNameInputValue("");
        }}
      >
        Update user name
      </PrimaryButton>
      <div>{activeUser.name}</div>
    </main>
  );
};
