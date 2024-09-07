import { Strip } from "../components/Strip"
import { useEffect, useState } from "react"
import axios from "axios"



export const StrategicAlliances = () => {
    const [strategicAlliances, setStrategicAlliances] = useState({
        highlight: "",
        content: ""
    })

    const getStrategicAlliances = async () => {
        const response = await axios.get("https://r28-backend.onrender.com/api/strategic-alliances/66bde4e5d05dbfe164810aad")

        setStrategicAlliances({
            ...strategicAlliances,
            highlight: response.data.strategicAlliances.highlight,
            content: response.data.strategicAlliances.content
        })

    }

    // banner
    const [banner, setBanner] = useState("")

    const getBanner = async () => {
        const response = await axios.get("https://r28-backend.onrender.com/api/strategic-alliances/banner-image/66c7751898c061c9e0f3b40a")

        setBanner(response.data.strategicAlliancesBanner.bannerImgString)

    }

    useEffect(() => {
        window.scrollTo(0, 0)
        getStrategicAlliances()
        getBanner()
    }, [])
    return <>
        <section className="h-[70vh] 2xl:h-[50vh] w-full hero">
            <img src={banner} alt="r28 holding" className="w-full h-full object-cover" />
            <div className="absolute inset-0">
                <div className="w-[90%] max-w-[1248px] mx-auto h-full relative z-[2]">
                    <div className="h-full pt-[100px] pb-[20px] lg:pb-[100px] text-white flex flex-col justify-center">
                        {/* <p className="pl-0 lg:pl-[10px] uppercase text-[12px] md:text-[14px] tracking-[1px]">Strategic Alliances</p> */}
                        <h1 className="text-[30px] xsm:text-[40px] lg:text-[60px] 3xl:text-[60px] leading-[1] font-[300]">Creating Growth Opportunities</h1>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="w-[90%] max-w-[1248px] mx-auto py-[40px] md:py-[100px] grid grid-cols-1 lg:grid-cols-2 gap-[20px] md:gap-[40px] lg:gap-[100px]">
                <h1 className="text-[22px] md:text-[30px] 2xl:text-[30px] font-[200] text-[#381313] leading-[1.2]">
                    {strategicAlliances.highlight ? strategicAlliances.highlight : "As local industry experts, R28 possess in-depth knowledge of the local business environment and understand the challenges our customers face in today's rapidly evolving economy."}
                </h1>

                <div>
                    <div className="">
                        {/* <p className="text-[20px] md:text-[24px] leading-[1.6] font-[200]">
                            As local industry experts, we possess in-depth knowledge of the local business environment and understand the challenges our customers face. In today's rapidly evolving economy, few companies have all the necessary capabilities to maintain competitiveness. <br /><br />
                        </p> */}
                        <p className="text-[16px] md:text-[18px] leading-[1.6] font-[200]" dangerouslySetInnerHTML={{
                            __html: strategicAlliances.content ? strategicAlliances.content : <span>
                                Aligned with global best practices and a collaborative mindset, R28 and its affiliates cultivate strategic partnerships with leading global brands across various sectors. These enduring alliances focus on proactively tackling local industry challenges with tailored global solutions. By harnessing our partners' innovative technologies and services, we optimize our offerings for enhanced customer outcomes. <br /><br />

                                Our diverse expertise, coupled with the insights gained from these alliances, propels R28 towards our strategic objectives, fostering accelerated business growth.

                                {/* These alliances are enduring relationships focused on proactively addressing identified business challenges within the local industry using globally tailored solutions. We strategically leverage our partners' innovative technology platforms, business processes, and services to enhance the outcomes of our products and services for customers. <br /><br />

                            Our diverse expertise, combined with the wealth of experience from these alliances, brings R28 one step closer to achieving its strategic business objectives and ultimately accelerating business growth. */}
                            </span>
                        }} />
                    </div>

                </div>
            </div>
        </section>

        {/* <section className="strategic__alliances">
            <div className="w-[90%] max-w-[1248px] mx-auto h-full flex items-center justify-between relative z-[1]">
                <h3 className="text-white text-[24px] md:text-[30px] font-[200]">R28 Insights: The AI Revolution</h3>
                <a href="/" className="w-[40px] h-[40px] rounded-full border-[3px] border-white flex justify-center items-center">
                    <ArrowRight />
                </a>
            </div>
        </section> */}

        <Strip />
    </>
}