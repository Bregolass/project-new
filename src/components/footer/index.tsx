import React from "react";
import { observer } from "mobx-react-lite";
import { IkasNavigationLink, Link } from "@ikas/storefront";
import style from "./style.module.css";


type Props = {
  links: IkasNavigationLink[];
  socialMediaLinks: IkasNavigationLink[];
  footerText:string;
};

function Footer(props: Props) {
  const { links,footerText,socialMediaLinks } = props;

  const linksRender = links.map((link, linkIndex) => (
    <div key={linkIndex} >
      <div className={style.linkItem}>
        {link.label}
        <div className={style.subLinkList}>
          {link.subLinks.map((subLink, subLinkIndex) => (
            <div className="subLinkItem" key={`subLink-${subLinkIndex}`}>
              <Link passHref href={subLink.href}>
                <a>{subLink.label}</a>
              </Link>
            </div>
          ))}
        </div>
  
      </div>
     
    </div>
  ));
  return (
    <footer className={style.footer}>
      
      <div className={style.footerInner}>
      <div className={style.linkList}>{linksRender}
      <div className={style.socialMediaContainer} >
        {socialMediaLinks.map((i,index)=>(
         <Link passHref href={i.href}>
         <a>{i.label}</a>
       </Link>
      ))}
      </div>
      </div>
      <div>{footerText}</div>
    
      </div>
    </footer>
  );
}
export default observer(Footer);
