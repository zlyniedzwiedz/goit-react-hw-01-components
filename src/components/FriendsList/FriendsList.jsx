import css from "./FriendsList.module.css";
import { FriendsListElement } from "./FriendsListElement.jsx";
import PropTypes from "prop-types";

export const FriendsList = ({ friends }) => {
  return (
    <ul className={css.friends}>
      {friends.map((friend) => (
        <FriendsListElement key={friend.id} data={friend} />
      ))}
    </ul>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.array.isRequired,
};
