import SideBar from "../../components/sidebar";

import styles from "./index.module.scss"

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <SideBar />
      {children}
    </div>
  );
}
