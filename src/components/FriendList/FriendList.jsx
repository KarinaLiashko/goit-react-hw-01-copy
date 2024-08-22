import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";

export default function FriendList({ friends }) {
  return (
    <div>
      <ul className={css.list}>
        {friends.map(item => (
          <li key={item.id}>
            <FriendListItem friends={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
