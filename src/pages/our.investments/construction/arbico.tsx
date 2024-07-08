import { Link } from "react-router-dom"
import heroImg from "../../../assets/images/arbico_hero.jpg"
// import { ArrowRight } from "../../../components/Arrow.Right"
import { useEffect } from "react"
import { Strip } from "../../../components/Strip"
import ArbicoInnerImg from "../../../assets/images/arbico_inner.jpg"

export const Arbico = () => {
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
                        {/* <p className="pl-0 lg:pl-[10px] uppercase text-[12px] md:text-[14px] tracking-[1px]">Construction & engineering solutions</p> */}
                        <h1 className="text-[30px] xsm:text-[40px] lg:text-[50px] 3xl:text-[50px] leading-[1] font-[300]">Time-tested construction solutions</h1>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="w-[90%] max-w-[1248px] mx-auto py-[40px] md:py-[100px]">
                <div className="border-b pb-[20px] md:pb-[40px]">
                    <div className="mb-[10px] md:mb-[40px]">
                        <p><Link to="/our-investments" className="hover:underline font-[200]">Our Investments</Link> &gt; <span className="text-[#381313] font-[200] text-[14px] md:text-[16px]">Arbico</span></p>
                    </div>
                    <p className="title-w__underline">Arbico Plc</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] lg:gap-[100px] mt-[20px] md:mt-[40px]">
                    <div className="w-full lg:w-[90%]">
                        <img src={ArbicoInnerImg} className="w-full" alt="r28" />
                    </div>

                    <div className="">
                        <div className="">
                            <p className="text-[18px] md:text-[24px] font-[200] text-[#381313] leading-[1.4] mt-[0] md:mt-[40px]">
                                R28 operates in the construction sector through her subsidiary,
                                Arbico Plc, a full-service, building, and civil engineering
                                contracting company.
                                <br /><br />
                            </p>
                            <p className="text-[16px] md:text-[18px] leading-[1.6] font-[200]">
                                Established in 1958 and publicly listed on the Nigerian Stock Exchange since 1978, Arbico has solidified its position as a leading construction firm in Nigeria.
                                <br /><br />
                                With substantial experience in building and civil engineering projects for government institutions, multinational companies, multilateral agencies, industrial groups, as well as high-net-worth individuals, Arbico's comprehensive services encompass pre-construction, general contracting, design-build, construction management, project management, and construction services.
                                <br /><br />
                                The company's experienced construction management team has delivered a wide array of projects ranging from private residences and commercial buildings to factories, plants, and infrastructure projects. The company has a proven track record of delivering construction projects on schedule and within budget.
                                <br /><br /><br />

                            </p>
                            <p className="text-[12px] md:text-[14px]">To learn more... visit <b><a className="hover:underline" href="https://www.arbico.ng" target="_blank">www.arbico.ng</a></b></p>

                        </div>

                    </div>
                </div>


            </div>
        </section>

        <Strip />
    </>
}