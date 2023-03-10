import {
	IkasNavigationLink,
	IkasImage,
} from "@ikas/storefront"

export type FooterProps = {
	links: IkasNavigationLink[];
	footerText?: string;
	socialMediaLinks: IkasNavigationLink[];
};

export type HeaderProps = {
	logo: IkasImage;
	link: IkasNavigationLink[];
};

