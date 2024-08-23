import { useContext, useEffect, useRef, useState } from "react";
import PrimaryButton from "../../components/button/PrimaryButton";
import { ThemeContext } from "../../components/portal/themeContext";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import {
  createUser,
  fetchUserbyId,
  fetchUsers,
  removeUserbyId,
  updateUserNameById,
} from "../../features/usersSlice";
import { PopUpUsersAction } from "../../components/popup/PopUpUsersAction";

export const Users = function () {
  const users = useSelector((state: RootState) => state.users.entities);
  const activeUser = useSelector((state: RootState) => state.users.activeUser);
  const responseStatus = useSelector(
    (state: RootState) => state.users.actionStatus
  );
  const [nameButtonDisabled, setNameButtonDisabled] = useState(true);
  const [idButtonDisabled, setIdButtonDisabled] = useState(true);

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
          <div key={user.id}>
            {user.id} {user.name}
          </div>
        ))}
      </div>
      <input
        type="text"
        placeholder="id"
        onChange={(e) => {
          if (e.target.value) {
            setIdButtonDisabled(() => false);
          } else {
            setIdButtonDisabled(() => true);
          }
          setInputValue(e.target.value);
        }}
        value={inputValue}
      />
      <PrimaryButton
        onClick={() => {
          dispatch(fetchUserbyId(+inputValue));
          setInputValue("");
        }}
        disabled={idButtonDisabled}
      >
        Get user by id
      </PrimaryButton>
      <PrimaryButton
        onClick={() => {
          dispatch(removeUserbyId(+inputValue));
          setInputValue("");
        }}
        disabled={idButtonDisabled}
      >
        Delete user by id
      </PrimaryButton>
      <input
        type="text"
        placeholder="newName"
        onChange={(e) => {
          if (e.target.value) {
            setNameButtonDisabled(() => false);
          } else {
            setNameButtonDisabled(() => true);
          }
          setNameInputValue(e.target.value);
        }}
        value={nameInputValue}
      />
      <PrimaryButton
        onClick={() => {
          dispatch(createUser(nameInputValue));
          setInputValue("");
        }}
        disabled={nameButtonDisabled}
      >
        Create user by name
      </PrimaryButton>

      <PrimaryButton
        onClick={() => {
          dispatch(updateUserNameById([+inputValue, nameInputValue]));
          setInputValue("");
          setNameInputValue("");
        }}
        disabled={!(!nameButtonDisabled && !idButtonDisabled)}
      >
        Update user name
      </PrimaryButton>
      <div>{activeUser.name}</div>
      <PopUpUsersAction status={responseStatus} />
    </main>
  );
};
