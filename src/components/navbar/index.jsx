import cls from "classnames";
import { useState } from "react";
import styles from "./index.module.scss";

export default function Navbar() {
  const [active, setActive] = useState(0);
  const [showNav, setShowNav] = useState(false);
  const navs = ["Home", "Services", "News", "Blog", "Contact"];

  return (
    <>
      <nav className={styles["nav"]}>
        {navs.map((nav, index) => (
          <a
            href="#"
            className={cls("label", styles["nav__item"], {
              [styles.isActive]: index === active,
            })}
          >
            {nav}
          </a>
        ))}
      </nav>
      <div className={styles["container-mobile"]}>
        <span className={styles["container__title"]}>{navs[active]}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="32"
          width="32"
          onClick={() => setShowNav((prev) => !prev)}
        >
          <path d="M6 36v-3h36v3Zm0-10.5v-3h36v3ZM6 15v-3h36v3Z" />
        </svg>
        <nav
          className={cls(styles["nav"], { [styles["show-navbar"]]: showNav })}
        >
          {navs.map((nav, index) => (
            <a
              href="#"
              className={cls("label", styles["nav__item"], {
                [styles.isActive]: index === active,
              })}
            >
              {nav}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
