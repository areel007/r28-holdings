import heroImg from "../../../assets/images/osc_hero.jpg"
// import { ArrowRight } from "../../../components/Arrow.Right"
import { Link } from "react-router-dom"
import { useEffect } from "react"
import { Strip } from "../../../components/Strip"
import OSCInnerImg from "../../../assets/images/osc_inner.jpg"

export const OSC = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return <>
        <section className="h-[70vh] 2xl:h-[50vh] w-full hero">
            <img src={heroImg} alt="r28 holding" className="w-full h-full object-cover" />
            <div className="absolute inset-0">
                <div className="w-[90%] max-w-[1248px] mx-auto h-full relative z-[2]">
                    <div className="h-full pt-[100px] pb-[20px] lg:pb-[100px] text-white flex flex-col justify-center">
                        {/* <p className="mb-[10px] uppercase text-[12px] md:text-[14px] tracking-[1px]">Manufacturing</p> */}
                        <h1 className="text-[30px] xsm:text-[40px] lg:text-[50px] 3xl:text-[50px] leading-[1] font-[300]">From Threads to Trends</h1>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="w-[90%] max-w-[1248px] mx-auto py-[40px] md:py-[100px]">
                <div className="border-b pb-[20px] md:pb-[40px]">
                    <div className="mb-[10px] md:mb-[40px]">
                        <p><Link to="/our-investments" className="hover:underline font-[200]">Our Investments</Link> &gt; <span className="text-[#381313] font-[200] text-[14px] md:text-[16px]">OSC Garments</span></p>
                    </div>
                    <p className="title-w__underline uppercase">OSC Garments</p>
                </div>


                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] lg:gap-[100px] mt-[20px] md:mt-[40px]">
                    <div className="w-full lg:w-[90%]">
                        <img src={OSCInnerImg} className="w-full" alt="r28" />
                    </div>

                    <div className="">
                        <div className="">

                            <p className="text-[16px] md:text-[18px] leading-[1.6] font-[200]">
                                <span className="text-[18px] md:text-[22px]">OSC Garments (OSC) is a certified garment manufacturer offering diverse services including large-scale production, consultancy, fashion training and ready-to-wear clothing line.</span>
                                <br /><br />
                                Established over a decade ago, the company was born from a profound passion for fostering skills and upholding the core values of educating, empowering, and employing the African creative community.
                                <br /><br />
                                Committed to nurturing talent, OSC provides comprehensive training programs from sewing machine operations to pattern making. These skills not only empower trainees but also pave the way for career advancement, offering diverse opportunities within the industry.
                                <br /><br /><br />
                            </p>
                            {/* <p className="text-[12px] md:text-[14px]">To learn more... visit <b><a className="hover:underline" href="https://www.arbico.ng" target="_blank">www.biswal.ng</a></b></p> */}

                        </div>

                    </div>
                </div>


            </div>
        </section>

        <Strip />
    </>
}