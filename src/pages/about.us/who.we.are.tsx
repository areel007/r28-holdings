import R28Logo from "../../assets/images/about-smallx.jpg"
import { Strip } from "../../components/Strip"
import { useState, useEffect } from "react"
import axios from "axios"

export const WhoWeAre = () => {

    const [whoWeAre, setWhoWeAre] = useState({
        highlight: "",
        content: ""
    })

    const [banner, setBanner] = useState("")

    const getWhoWeAre = async () => {

        const response = await axios.get("https://r28-backend.onrender.com/api/about/who-we-are/66bde252d05dbfe164810a6c")

        setWhoWeAre({
            ...whoWeAre,
            highlight: response.data.whoWeAre.highlight,
            content: response.data.whoWeAre.content
        })

    }

    const getBanner = async () => {
        const response = await axios.get("https://r28-backend.onrender.com/api/about/who-we-are/banner-image/66c74e07ad69f5b45fa7c6b8")
        setBanner(response.data.whoWeAreBanner.bannerImgString)

    }

    useEffect(() => {
        getWhoWeAre()
        getBanner()
    }, []);

    return <>
        <section className="h-[70vh] 2xl:h-[50vh] w-full hero">
            <img src={banner} alt="r28 holding" className="w-full h-full object-cover" />
            <div className="absolute inset-0">
                <div className="w-[90%] max-w-[1248px] mx-auto h-full relative z-[2]">
                    <div className="h-full pt-[100px] pb-[20px] lg:pb-[100px] text-white flex flex-col justify-center">
                        {/* <p className="pl-0 lg:pl-[10px] uppercase text-[12px] md:text-[14px] tracking-[1px]">About us</p> */}
                        <h1 className="text-[30px] xsm:text-[40px] lg:text-[50px] 3xl:text-[50px] leading-[1] font-[300]">Who we are</h1>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="w-[90%] max-w-[1248px] mx-auto py-[40px] md:py-[100px] grid grid-cols-1 lg:grid-cols-2 gap-[40px] lg:gap-[100px]">
                <div className="flex flex-col gap-[20px] md:gap-[40px]">
                    <h1 className="text-[22px] md:text-[30px] 2xl:text-[30px] font-[200] text-[#381313] leading-[1.2]">{whoWeAre.content ? whoWeAre.highlight : "Established in 2007, R28 is a consolidated and diversified private investment holding company with strategic business interests in various sectors of the Nigerian economy."}</h1>

                    <img src={R28Logo} alt="logo" className="w-full" />
                </div>

                <div>
                    <div className="pb-[40px]">
                        <p className="text-[16px] md:text-[18px] leading-[1.6] font-[200]" dangerouslySetInnerHTML={{
                            __html: whoWeAre.content ? whoWeAre.content : <span>
                                The company is continuously identifying and developing profitable investment opportunities to transform communities through job creation and capacity development. We invest in businesses that can deliver strong earnings and capital growth over the long term. Our investments are made directly or through subsidiaries and related companies that cut across a broad range of industries such as construction, real estate, oil & gas, aviation, telecommunication, and manufacturing.
                                <br /><br />

                                <span className="text-[16px] md:text-[18px] leading-[1.6] font-[200]">
                                    The leadership team is made up of professionals and astute entrepreneurs with several years of investment and management experience in multiple industries.
                                    <br /><br />
                                    Our investment philosophy is anchored on the long-term fundamentals, preferring to grow organically as well as through acquisitions in areas where we are able to leverage our significant experience and capabilities to create value. The Company predominantly uses its equity capital for investment which promotes favourable financing flexibility and swift decisions at the early stages of investment.
                                    <br /><br />
                                    R28 focuses on the Nigerian market and welcomes international opportunities with reputable partners. Furthermore, the company maintains strategic alliances with several international brands/operators and seeks to add value to its investment portfolio.
                                </span>
                            </span>
                        }} />

                    </div>

                </div>


            </div>
        </section>

        <Strip />
    </>
}