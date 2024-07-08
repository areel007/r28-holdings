import { Link, useLocation } from "react-router-dom";

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
    const location = useLocation()

    return <nav className="hidden lg:block h-full">
        <ul className="h-[60px] flex items-center gap-[30px] font-[300]">
            {
                menu.map((_menu, index) => {
                    return <li key={index} className={`h-full flex items-center border-b-[2px] border-transparent hover:border-white hover:hover-red-400 cursor-pointer group ${location.pathname === _menu.to ? 'border-b-[2px] border-white' : ''}`}>
                        {
                            _menu.submenu ? <div className="relative">
                                {_menu.name === 'our investments' || _menu.name === 'about us' ? <span className={`capitalize h-full ${scrolled ? 'text-black' : 'text-white'}`}>{_menu.name}</span> : <span className={`capitalize h-full ${scrolled ? 'text-black' : 'text-white'}`}>{_menu.name}</span>}
                                <ul className="absolute left-[50%] translate-x-[-50%] top-full p-[20px] bg-white min-w-[350px] transition ease-in-out translate-y-[80px] invisible group-hover:visible group-hover:translate-y-[20px] shadow">
                                    {
                                        _menu.submenu.map((_submenu, i) => {
                                            return <li key={i} className="p-[10px] hover:bg-[#381313] hover:text-white capitalize">
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