import { Link } from "react-router-dom";

type TMenu = {
    name: string;
    to: string;
    submenu?: TMenu[]
}

type TMenuProps = {
    menu: TMenu[],
    scrolled: boolean,
}

export const Menu = ({ menu, scrolled }: TMenuProps) => {

    return <nav className="hidden md:block h-full">
        <ul className="h-full flex items-center gap-[30px]">
            {
                menu.map((_menu, index) => {
                    return <li key={index} className="h-full flex items-center border-b-[2px] border-transparent hover:border-white hover:hover-red-400 cursor-pointer group">
                        {
                            _menu.submenu ? <div className="relative">
                                <span className={`capitalize h-full ${scrolled ? 'text-black' : 'text-white'}`}>{_menu.name}</span>
                                <ul className="absolute left-[50%] translate-x-[-50%] top-full p-[20px] bg-white min-w-[350px] transition ease-in-out translate-y-[100px] invisible group-hover:visible group-hover:translate-y-[44px] shadow">
                                    {
                                        _menu.submenu.map((_submenu, i) => {
                                            return <li key={i} className="p-[10px] hover:bg-black hover:text-white capitalize">
                                                <a href={_submenu.to}>{_submenu.name}</a>
                                            </li>
                                        })
                                    }
                                </ul>
                            </div> : <Link className={`capitalize ${scrolled ? 'text-black' : 'text-white'}`} to={_menu.to}>{_menu.name}</Link>
                        }
                    </li>
                })
            }
        </ul>
    </nav>
}