import css from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.profile}>
      <div>
        <img src={image} alt={name} className={css.avatar} width="120" />
        <p className={css.name}>{name}</p> <p className={css.tag}>@{tag}</p>{" "}
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.li}>
          <span className={css.label}>Followers: </span>
          <span className={css.quantity}>{stats.followers}</span>
        </li>

        <li className={css.li}>
          <span className={css.label}>Views: </span>
          <span className={css.quantity}>{stats.views}</span>
        </li>

        <li className={css.li}>
          <span className={css.label}>Likes: </span>
          <span className={css.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
