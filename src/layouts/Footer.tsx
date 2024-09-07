import { Link } from "react-router-dom"
import Logo from "../assets/images/R28_LOGO.png"
import { useEffect, useState } from "react"
import axios from "axios"

// type TMenu = {
//     name: string;
//     to: string;
//     submenu?: TMenu[]
// }

// type TMenuProps = {
//     menu: TMenu[],
// }

export const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()

    // footer
    const [footer, setFooter] = useState({
        about: "",
        address: "",
        telephones: "",
        email: "",
    })

    const [phones, setPhones] = useState<string[] | null>(null)

    const getFooter = async () => {
        const response = await axios.get("https://r28-backend.onrender.com/api/home/footer/66bdceaf9be8fa17916b0aa8")
        setFooter(response.data.footer)

        setPhones(response.data.footer.telephones.split(","))

    }

    useEffect(() => {
        getFooter()
    }, []);

    return <footer className="p-[10px_0_10px_0] md:p-[30px_0_30px_0] bg-[#1E1E1E]">
        <div className="max-w-[1248px] w-[90%] mx-auto">
            <div className="border-b border-gray-400 py-[30px]">
                <Link to="/">
                    <img src={Logo} width={70} alt="R28 holdings" className="w-[50px] md:w-[70px]" />
                </Link>
            </div>

            <div className="w-full mt-[30px] text-gray-300">
                <div className="grid grid-cols-1 md:grid-cols-[40%_1fr_1fr] gap-[20px] md:gap-[50px] mb-[30px]">
                    <div>
                        <span className="uppercase text-[14px] mb-[10px] block font-[600]">About</span>
                        <p className="font-[300] text-[14px] leading-[1.6]">
                            {footer.about ? footer.about : "Established in 2007, R28 is a consolidated and diversified private investment holding company with strategic business interest in various sectors of the Nigerian economy."}
                        </p>
                    </div>
                    <div>
                        <span className="uppercase text-[14px] mb-[10px] block font-[600]">Corporate HQ</span>
                        <p className="font-[300] text-[14px] leading-[1.6]" dangerouslySetInnerHTML={{
                            __html: footer.address ? footer.address : <span>
                                54A Adeola Odeku Street, <br />
                                Victoria Island,<br />
                                Lagos, Nigeria
                            </span>
                        }} />
                    </div>

                    <div>
                        <p className="font-[300] text-[14px] leading-[1.6]"><b className="font-[700]">T:</b> <span>{phones ? phones[0] : "+234 906 245 7050"}</span>, <br /> <span className="block ml-[17px]">{phones ? phones[1] : "+234 906 245 7051"}</span></p>

                        <p className="font-[300] text-[14px] leading-[1.6]"><b className="font-[700]">E:</b> <span>{footer.email ? footer.email : "info@r28.ng"}</span></p>
                    </div>
                </div>

                <p className="font-[200] text-[14px]">&copy; {year} R28 holdings. All rights reserved.</p>
            </div>
        </div>
    </footer>
}