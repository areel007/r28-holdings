import heroImg from "../../../assets/images/afl_hero.jpg"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import { Strip } from "../../../components/Strip"
import AFLInnerImg from "../../../assets/images/afl_inner.jpg"

export const AFL = () => {

    // logic to load the page from the top of the page
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return <>
        <section className="h-[70vh] 2xl:h-[50vh] w-full hero">
            <img src={heroImg} alt="r28 holding" className="w-full h-full object-cover" />
            <div className="absolute inset-0">
                <div className="w-[90%] max-w-[1248px] mx-auto h-full relative z-[2]">
                    <div className="h-full pt-[100px] pb-[20px] lg:pb-[100px] text-white flex flex-col justify-center">
                        {/* <p className="mb-[10px] uppercase text-[12px] md:text-[14px] tracking-[1px]">Telecommunication & Technology Solutions</p> */}
                        <h1 className="text-[30px] xsm:text-[40px] lg:text-[50px] 3xl:text-[50px] leading-[1] font-[300]">Deepening Metro Broadband Penetration</h1>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="w-[90%] max-w-[1248px] mx-auto py-[40px] md:py-[100px]">
                <div className="border-b pb-[20px] md:pb-[40px]">
                    <div className="mb-[10px] md:mb-[40px]">
                        <p><Link to="/our-investments" className="hover:underline font-[200]">Our Investments</Link> &gt; <span className="text-[#381313] font-[200] text-[14px] md:text-[16px]">AFL Networks</span></p>
                    </div>
                    <p className="title-w__underline uppercase">AFL Networks</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] lg:gap-[100px] mt-[20px] md:mt-[40px]">
                    <div className="w-full lg:w-[90%]">
                        <img src={AFLInnerImg} className="w-full" alt="r28" />
                    </div>

                    <div className="">
                        <div className="">
                            <p className="text-[18px] md:text-[24px] font-[200] text-[#381313] leading-[1.4]">
                                Aldreda Fields Limited (AFL Networks) is a leading provider of Open Access Metropolitan Fiber Optics infrastructure in Lagos, Nigeria.
                                <br /><br />
                            </p>

                            <p className="text-[16px] md:text-[18px] leading-[1.6] font-[200]">
                                Operating under a license granted by the Nigerian Communications Commission (NCC). AFL actively constructs DWDM core rings and FTTx distribution networks across the expansive EKO Electricity Distribution Company (EKEDC) footprint, interconnecting major data centers and ensuring fiber proximity to all coverage endpoints. The company's mission is to bridge the digital divide within the EKEDC Lagos metropolitan footprint through comprehensive fiber infrastructure. AFL offers long-term capacity sales on core DWDM network infrastructure and FTTH infrastructure-as-a-service, extending up to the Optical Network Unit (ONU) at terminating premises.
                                <br /><br /><br />
                            </p>
                            <p className="text-[12px] md:text-[14px]">To learn more... visit <b><a className="hover:underline" href="https://www.afl.ng" target="_blank">www.afl.ng</a></b></p>

                        </div>

                    </div>
                </div>


            </div>
        </section>

        <Strip />
    </>
}