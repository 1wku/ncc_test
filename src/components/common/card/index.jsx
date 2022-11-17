import cls from "classnames"

import styles from "./index.module.scss";

export default function Card({ title, img, content }) {
  return (
    <div className={styles.card}>
      <h4 className={cls(styles.card__title)}>{title}</h4>
      <p className={styles.card__content} >
        <img className={styles.card__img} src={img} alt="" />
        {content}
      </p>
    </div>
  );
}
