import { observer } from "mobx-react-lite";
import styles from "./style.module.css";
import { IkasImage, IkasNavigationLink, Image } from "@ikas/storefront";
import { HeaderProps } from "../__generated__/types";
const Header: React.FC<HeaderProps> = ({ logo, link }) => {
  return (
    <div className={styles.header}>
      <div className={styles.headerTop}>
        <div className={styles.logo}>
        </div>
      </div>
      <div className={styles.headerMenu}>
        <ul className={styles.linkList}>
          {link?.map((l) => {
            console.log(l);
            return (
              <li>
                <a href={l.href}>{l.label}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default observer(Header);