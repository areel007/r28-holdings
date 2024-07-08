import AboutImg from "../../assets/images/about-hero.jpg"
import { useEffect } from "react"

export const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return <>
        <section className="h-[70vh] 2xl:h-[50vh] w-full hero">
            <img src={AboutImg} alt="r28 holding" className="w-full h-full object-cover" />
            <div className="absolute inset-0">
                <div className="w-[90%] max-w-[1248px] mx-auto h-full relative z-[2]">
                    <div className="h-full pt-[100px] pb-[20px] lg:pb-[100px] text-white flex flex-col justify-center">
                        {/* <p className="pl-0 lg:pl-[10px]">About us</p> */}
                        <h1 className="text-[30px] xsm:text-[40px] lg:text-[50px] 3xl:text-[50px] leading-[1] font-[300]">About us</h1>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="w-[90%] max-w-[1248px] mx-auto py-[40px] md:py-[100px] grid grid-cols-1 lg:grid-cols-2 gap-[20px] md:gap-[40px] lg:gap-[100px]">
                <h1 className="text-[22px] md:text-[30px] 2xl:text-[30px] font-[200] text-[#381313] leading-[1.2]">Established in 2007, R28 is a consolidated and diversified private investment holding company with strategic business interest in various sectors of the Nigerian economy.</h1>

                <div>
                    <div className="pb-[40px]">
                        <p className="text-[16px] md:text-[18px] leading-[1.6] font-[200]">
                            The company is continuously identifying and developing profitable investment opportunities to transform communities through job creation and capacity development. We invest in businesses that can deliver strong earnings and capital growth over the long term. Our investments are made directly or through subsidiaries and related companies that cut across a broad range of industries such as construction, real estate, oil & gas, aviation, telecommunication, and manufacturing.
                            <br /><br />

                        </p>
                        <p className="text-[16px] md:text-[18px] leading-[1.6] font-[200]">
                            The leadership team is made up of professionals and astute entrepreneurs with several years of investment and management experience in multiple industries.
                            <br /><br />
                            Our investment philosophy is anchored on the long-term fundamentals, preferring to grow organically as well as through acquisitions in areas where we are able to leverage our significant experience and capabilities to create value. The Company predominantly uses its equity capital for investment which promotes favourable financing flexibility and swift decisions at the early stages of investment.
                            <br /><br />
                            R28 focuses on the Nigerian market and welcomes international opportunities with reputable partners. Furthermore, the company maintains strategic alliances with several international brands/operators and seeks to add value to its investment portfolio.
                        </p>
                    </div>

                </div>


            </div>
        </section>
    </>
}