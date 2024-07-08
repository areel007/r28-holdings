import { Logout } from "../../components/Icon"
import R28Logo from "../../assets/images/LOGO.png"
import { News } from "../../components/Icon"
import { Link, Outlet } from "react-router-dom"

export const Dashboard = () => {
    const handleLogout = () => {
        window.localStorage.removeItem("isLoggedIn")
        window.location.href = "/admin/login"
    }

    return <main className="w-full h-screen">
        <div className="h-full grid grid-cols-[100px_1fr]">
            <div className="w-full h-full shadow-lg flex flex-col justify-between items-center py-[20px]">
                <div>
                    <img src={R28Logo} alt="r28 logo" className="w-[60px]" />
                    <div className="mt-[40px]">
                        <Link to="/admin/dashboard" className="flex flex-col items-center">
                            <News />
                            <span>News</span>
                        </Link>
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