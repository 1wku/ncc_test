import Navbar from "../../components/navbar";
import Footer from "../components/footer";

import styles from "./index.module.scss";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
