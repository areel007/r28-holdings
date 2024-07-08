import { Link } from "react-router-dom";
import Logo from "../assets/images/R28_LOGO.png";
import Logo1 from "../assets/images/LOGO.png";
import { Menu } from "./Menu";
import { Hamburger } from "../components/Hamburger";
import { useEffect, useState } from "react";
import { Cancel } from "../components/Cancel";

type TMenu = {
    name: string;
    to: string;
    submenu?: TMenu[];
};

type TMenuProps = {
    menu: TMenu[];
    handleOpenMobileMenu: () => void;
    isMobileMenuOut: boolean;
    handleCloseMobileMenu: () => void;
};

export const Header = ({ menu, handleOpenMobileMenu, isMobileMenuOut, handleCloseMobileMenu }: TMenuProps) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrolled]);

    return (
        <header
            className={`h-[128px] w-full fixed left-0 top-0 z-[3] transition-all ${scrolled ? "bg-white shadow" : "bg-transparent"
                }`}
        >
            <div className="h-full max-w-[1248px] w-[90%] mx-auto flex justify-between items-center">
                <Link to="/">
                    <img
                        src={scrolled ? Logo1 : Logo}
                        alt="r28 logo"
                        width={70}
                        height={90}
                        className="w-[50px] md:w-[60px] h-auto"
                    />
                </Link>

                <div className="flex items-center">
                    <Menu menu={menu} scrolled={scrolled} />

                    {
                        isMobileMenuOut ? <div className="h-full flex items-center" onClick={handleCloseMobileMenu}><Cancel scrolled={scrolled} /></div> : <div className="h-full flex items-center" onClick={handleOpenMobileMenu}>
                            <Hamburger scrolled={scrolled} />
                        </div>
                    }
                </div>
            </div>
        </header>
    );
};
