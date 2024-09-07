import { Handshake, News, Logout, Compass, Settings, House } from "../../components/Icon"
import R28Logo from "../../assets/images/LOGO.png"
import { Link, Outlet } from "react-router-dom"

const CMSMenu = [
    {
        name: "Home",
        path: "/admin/dashboard",
        icon: <House />
    },
    {
        name: "News",
        path: "/admin/dashboard/news",
        icon: <News />
    },
    {
        name: "About",
        path: "/admin/dashboard/about",
        icon: <Handshake />
    },
    {
        name: "Approach",
        path: "/admin/dashboard/approach",
        icon: <Compass />
    },
    {
        name: "Strategic Alliances",
        path: "/admin/dashboard/strategic-alliances",
        icon: <Compass />
    },
    {
        name: "Settings",
        path: "/admin/dashboard/settings",
        icon: <Settings />
    }
]

export const Dashboard = () => {
    const handleLogout = () => {
        window.sessionStorage.removeItem("isLoggedIn")
        window.sessionStorage.removeItem("token")
        window.sessionStorage.removeItem("role")
        window.location.href = "/admin/login"
    }

    return <main className="w-full h-screen">
        <div className="h-full grid grid-cols-[100px_1fr]">
            <div></div>
            <div className="h-full w-[100px] shadow-lg flex flex-col justify-between items-center py-[20px] fixed left-0">
                <div className="flex flex-col items-center">
                    <img src={R28Logo} alt="r28 logo" className="w-[60px]" />
                    <div className="mt-[40px] grid gap-[20px]">
                        {CMSMenu.map((_menu, i) => <Link key={i} to={_menu.path} className="flex flex-col items-center text-center">
                            {_menu.icon}
                            <span>{_menu.name}</span>
                        </Link>)}

                    </div>
                </div>
                <div className="cursor-pointer" onClick={handleLogout}>
                    <Logout />
                </div>
            </div>

            <Outlet />
        </div>
    </main>
}