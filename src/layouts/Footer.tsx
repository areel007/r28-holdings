import { Link } from "react-router-dom"
import Logo from "../assets/images/R28_LOGO.png"

type TMenu = {
    name: string;
    to: string;
    submenu?: TMenu[]
}

type TMenuProps = {
    menu: TMenu[],
}

export const Footer = ({ menu }: TMenuProps) => {
    return <footer className="p-[40px_0_10px_0] md:p-[50px_0_20px_0] bg-[#1E1E1E]">
        <div className="max-w-[1248px] w-[90%] mx-auto">
            <div className="border-b border-gray-400 py-[30px]">
                <Link to="/">
                    <img src={Logo} width={70} alt="R28 holdings" />
                </Link>
            </div>

            <div className="w-full mt-[50px] text-gray-300">
                <div className="grid grid-cols-1 md:grid-cols-4 mb-[30px]">
                    {
                        menu.map((_menu, i) => {
                            return <div key={i}>
                                <span className="capitalize font-[200] block mb-[20px] text-[18px]">{_menu.name}</span>
                                <ul className="font-[200] capitalize flex flex-col">
                                    {_menu.submenu?.map((_submenu, i) => {
                                        return <li key={i} className="mb-[10px] last:mb-[10px]">
                                            <Link to={_submenu.to}>{_submenu.name}</Link>
                                        </li>
                                    })}
                                </ul>
                            </div>
                        })
                    }
                </div>

                <p>&copy; 2024 R28 holdings</p>
            </div>
        </div>
    </footer>
}