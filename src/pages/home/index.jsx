import React from "react";
import SideBar from "../../components/sidebar";
import styles from "./index.module.scss"

export default function Home() {
  return (
    <div className={styles.home}>
      <SideBar />
      <div>Mai</div>
    </div>
  );
}
