import cls from "classnames";
import styles from "./index.module.scss";

export default function SideBar() {
  const navs = ["Home", "Services", "News", "Blog", "Contact"];

  return (
    <nav className={styles["nav"]}>
      {navs.map((nav) => (
        <a href="#" className={cls("label", styles["nav__item"])}>
          {nav}
        </a>
      ))}
    </nav>
  );
}
