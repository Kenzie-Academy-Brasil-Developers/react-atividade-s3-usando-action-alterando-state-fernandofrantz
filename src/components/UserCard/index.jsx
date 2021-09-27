import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeName } from "../../store/modules/user/action";

const UserCard = () => {
  const [newName, setNewName] = useState("");
  const dispatch = useDispatch();
  const names = useSelector((state) => state.user.name);

  const handleClick = () => {
    dispatch(changeName(newName));
  };

  return (
    <div>
      <h3>User name: {names}</h3>
      <input onChange={(e) => setNewName(e.target.value)} type="text" />
      <button onClick={handleClick}>Change</button>
    </div>
  );
};
export default UserCard;
