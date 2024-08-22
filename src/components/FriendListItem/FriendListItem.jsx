import clsx from "clsx";
import css from "./FriendListItem.module.css";

export default function FriendListItem({
  friends: { avatar, name, isOnline },
}) {
  const containerClsx = clsx(
    css.container,
    isOnline ? css.isOnline : css.isOffline
  );
  return (
    <div className={containerClsx}>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p> {isOnline ? "online" : "offline"}</p>
    </div>
  );
}
