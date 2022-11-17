import cls from "classnames";
import { useState } from "react";
import styles from "./index.module.scss";

export default function SideBar() {
  const [active, setActive] = useState(0);
  const navs = ["Home", "Services", "News", "Blog", "Contact"];

  return (
    <nav className={styles["nav"]}>
      {navs.map((nav,index) => (
        <a href="#" className={cls("label", styles["nav__item"], { [styles.isActive]:  index === active})}>
          {nav}
        </a>
      ))}
    </nav>
  );
}
