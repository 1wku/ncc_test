import SideBar from "../../components/sidebar";
import Footer from "../components/footer";

import styles from "./index.module.scss";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <SideBar />
      {children}
      <Footer />
    </div>
  );
}
