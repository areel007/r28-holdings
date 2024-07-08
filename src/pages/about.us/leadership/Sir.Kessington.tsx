import LeadershipImg from "../../../assets/images/leadership (1).jpg"
import { useEffect } from "react"
import SirKessingtonImg from "../../../assets/images/chief.webp"
import { Link } from "react-router-dom"
import { Strip } from "../../../components/Strip"

export const SirKessington = () => {
    useEffect(() => window.scrollTo(0, 0), [])

    return <>
        <section className="h-[50vh] 2xl:h-[30vh] w-full hero">
            <img src={LeadershipImg} alt="r28 holding" className="w-full h-full object-cover" />
            <div className="absolute inset-0">
                <div className="w-[90%] max-w-[1248px] mx-auto h-full relative z-[2]">
                    <div className="h-full pt-[100px] pb-[20px] lg:pb-[100px] text-white flex flex-col justify-center">
                        {/* <p className="pl-0 lg:pl-[10px] uppercase text-[12px] md:text-[14px] tracking-[1px]">About us</p> */}
                        <h1 className="text-[30px] xsm:text-[40px] lg:text-[50px] 3xl:text-[50px] leading-[1] font-[300]">Leadership</h1>
                    </div>
                    <p className="mb-[20px] md:mb-[40px] font-[300] text-[13px] mt-[5px]"><Link to="/about-us/leadership" className="hover:underline">Leadership</Link> &gt; Board of Directors &gt; Sir Kesington</p>
                </div>

            </div>
        </section>



        <section>
            <div className="w-[90%] max-w-[900px] mx-auto py-[40px] md:py-[100px]">

                <div className="grid grid-cols-1 sm:grid-cols-[200px_1fr] xl:grid-cols-[250px_1fr] gap-[40px]">
                    <img src={SirKessingtonImg} alt="r28" className="w-full" />
                    <div>
                        <h3 className="text-[20px] md:text-[28px] mb-[10px]">Sir Kesington Adebukunola Adebutu</h3>
                        <p className="text-[14px] md:text-[16px] leading-[1.6] font-[300]">
                            Sir Kesington is the Founder/ Chairman of Premier Lotto popularly
                            known as ‘Baba Ijebu’. Nigeria’s leading games and entertainment
                            company. <br />
                            <br />
                            An astute entrepreneur, a business icon and a philanthropist of
                            great repute. Armed with a rare conviction to transform society,
                            he has become one of the most reliable social- economic forces of
                            our time; helping to move Nigeria forward towards national
                            integration, economic growth and development. Sir Kesington’s
                            philanthropic gestures stand him out as a man of rare humanitarian
                            pedigree. <br />
                            <br />
                            Through the Kesington Adebukunola Adebutu Foundation (KAAF) he
                            continues to change the lives of many.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <Strip />
    </>
}