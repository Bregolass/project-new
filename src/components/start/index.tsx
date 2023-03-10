import { observer } from "mobx-react-lite";
import Head from "next/head";
import styles from "./style.module.css";

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
    </div>
  );
};

export default observer(Home);
