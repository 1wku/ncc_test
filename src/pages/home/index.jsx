import cls from "classnames";
import Card from "../../components/common/card";

import styles from "./index.module.scss";

const cards = [
  {
    title: "Lorem ipsum dolor sit amet",
    img: "/images/img1.png",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    img: "/images/img2.png",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    img: "/images/img3.png",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.",
  },
];

export default function Home() {
  return (
    <div className={cls(styles.home, "container")}>
      <img className={styles.home__img} src="/images/logo.png" alt="" />
      <div className={styles.lorem}>
        <p className={cls(styles.lorem__qs, "body-1")}>
          Lorem ipsum dolor sit asmet?
        </p>
        <p className={cls(styles.lorem__as, "body-1")}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique
          consequat placerat. Vestibulum auctor pellentesque sem, eu posuere
          erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis,
          ligula in mattis sodales, augue justo tristique nulla, sed lacinia
          ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh
          auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque
          suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet
          luctus augue tristique eu. Donec vulputate odio neque, sed semper
          turpis pellentesque a.
        </p>
      </div>
      <div className={styles.cardGroup}>
        {cards.map((card) => (
          <Card {...card} />
        ))}
      </div>
    </div>
  );
}
