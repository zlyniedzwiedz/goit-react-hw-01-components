import css from "./FriendsList.module.css";
import PropTypes from "prop-types";

export const FriendsListElement = ({ data }) => {
  return (
    <li className={css.element}>
      {data.isOnline === true ? (
        <span className={css.online}></span>
      ) : (
        <span className={css.offline}></span>
      )}

      <img className={css.img} src={data.avatar} alt={data.name} width="60" />
      <p className={css.name}>{data.name}</p>
    </li>
  );
};

FriendsListElement.propTypes = {
  friends: PropTypes.shape({
    isOnline: PropTypes.bool,
    avatar: PropTypes.string,
    name: PropTypes.string,
  }),
};
