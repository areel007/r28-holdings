import { useEffect, useState } from "react"
import { Strip } from "../components/Strip"
import axios from "axios"

export const Approach = () => {

    const [approach, setApproach] = useState({
        highlight: '',
        content: ''
    })

    const getApproach = async () => {
        const response = await axios.get("https://r28-backend.onrender.com/api/approach/66bde43cd05dbfe164810a94")

        setApproach({
            ...approach,
            highlight: response.data.approach.highlight,
            content: response.data.approach.content
        })

    }

    const [banner, setBanner] = useState("")

    const getApproachBanner = async () => {
        const response = await axios.get("https://r28-backend.onrender.com/api/approach/banner-image/66c75a312fc76fb25cf2ca50")

        setBanner(response.data.approachBanner.bannerImgString)


    }

    useEffect(() => {
        window.scrollTo(0, 0)
        getApproach()
        getApproachBanner()
    }, [])

    return <>
        <section className="h-[70vh] 2xl:h-[50vh] w-full hero">
            <img src={banner} alt="r28 holding" className="w-full h-full object-cover" />
            <div className="absolute inset-0">
                <div className="w-[90%] max-w-[1248px] mx-auto h-full relative z-[2]">
                    <div className="h-full pt-[100px] pb-[20px] lg:pb-[100px] text-white flex flex-col justify-center">
                        {/* <p className="pl-0 lg:pl-[10px] uppercase text-[12px] md:text-[14px] tracking-[1px]">Our Approach</p> */}
                        <h1 className="text-[30px] xsm:text-[40px] lg:text-[60px] 3xl:text-[60px] leading-[1] font-[300]">Investing on a Value Basis</h1>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="w-[90%] max-w-[1248px] mx-auto py-[40px] md:py-[100px] grid grid-cols-1 lg:grid-cols-2 gap-[20px] md:gap-[40px] lg:gap-[100px]">
                <h1 className="text-[22px] md:text-[30px] 2xl:text-[30px] font-[200] text-[#381313] leading-[1.2]">
                    {approach.highlight ? approach.highlight : "R28's investment initiatives are driven by a discerning and innovative approach to opportunities, marked by swift assessments and decisive investment choices."}
                </h1>

                <div>
                    <div className="">

                        <p className="text-[16px] md:text-[18px] leading-[1.6] font-[200]" dangerouslySetInnerHTML={{
                            __html: approach.content ? approach.content : <span>
                                At R28, while our primary focus lies within the Nigerian market, we remain open to exploring opportunities across Sub-Saharan Africa.
                                <br /><br />
                                Our preference leans towards positive cash flow business models led by committed management. However, we are also receptive to acquiring businesses through leveraged buyouts and distressed situations. R28 actively pursues new prospects and is adaptable to intricate financial structures when necessary.
                                <br /><br />
                                Guided by a conservative, long-term, and globally diversified investment approach, R28 leverages its expertise, local knowledge, market insight, and agility to stand out in the marketplace.
                                <br /><br />
                                Emphasizing the importance of skilled and motivated leadership, we consistently add value by providing comprehensive support and guidance to our teams throughout all stages of business development.
                            </span>
                        }} />
                    </div>



                </div>


            </div>
        </section>

        <Strip />
    </>
}