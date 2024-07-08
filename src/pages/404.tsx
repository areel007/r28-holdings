import { Link } from "react-router-dom"

export const NotFound = () => {
    return <>
        <div className="">
            <div className="h-[128px] bg-[#381313]"></div>
            <div className="h-[450px] md:h-[calc(100vh_-_128px)] four__0__4 relative">
                <div className="absolute top-[40px] w-full">
                    <h1 className="text-center text-[30px] md:text-[60px] font-[600]">404</h1>
                </div>
                <div className="absolute bottom-[40px] md:bottom-[50px] w-full flex flex-col items-center">
                    <h2 className="text-center text-[20px] md:text-[30px]">Look like you're lost</h2>
                    <p className="text-center text-[14px] md:text-[16px]">the page you are looking for is not available!</p>
                    <div className="mt-[20px]">
                        <Link to="/" className="bg-[#381313] p-[10px_20px] text-white">Go to home</Link>
                    </div>
                </div>
            </div>

        </div>
    </>
}