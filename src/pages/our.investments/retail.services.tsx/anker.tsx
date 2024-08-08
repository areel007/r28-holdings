import heroImg from "../../../assets/images/anker_hero.jpg"
// import { ArrowRight } from "../../../components/Arrow.Right"
import { Link } from "react-router-dom"
import { useEffect } from "react"
import { Strip } from "../../../components/Strip"
import AnkerInnerImg from "../../../assets/images/anker_inner.jpg"

export const Anker = () => {

    useEffect(() => { window.scrollTo(0, 0) }, [])

    return <>
        <section className="h-[70vh] 2xl:h-[50vh] w-full hero">
            <img src={heroImg} alt="r28 holding" className="w-full h-full object-cover" />
            <div className="absolute inset-0">
                <div className="w-[90%] max-w-[1248px] mx-auto h-full relative z-[2]">
                    <div className="h-full pt-[100px] pb-[20px] lg:pb-[100px] text-white flex flex-col justify-center">
                        {/* <p className="mb-[10px] uppercase text-[12px] md:text-[14px] tracking-[1px]">Retail Services</p> */}
                        <h1 className="text-[30px] xsm:text-[40px] lg:text-[50px] 3xl:text-[50px] leading-[1] font-[300]">Superior Brands that Outperform</h1>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="w-[90%] max-w-[1248px] mx-auto py-[40px] md:py-[100px]">

                <div className="border-b pb-[20px] md:pb-[40px]">
                    <div className="mb-[10px] md:mb-[40px]">
                        <p><Link to="/our-investments" className="hover:underline font-[200]">Our Investments</Link> &gt; <span className="text-[#381313] font-[200] text-[14px] md:text-[16px]">Anker</span></p>
                    </div>
                    <p className="title-w__underline uppercase">anker support services</p>
                </div>



                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] lg:gap-[100px] mt-[20px] md:mt-[40px]">
                    <div className="w-full lg:w-[90%]">
                        <img src={AnkerInnerImg} className="w-full" alt="r28" />
                    </div>

                    <div className="">
                        <div className="">

                            <p className="text-[16px] md:text-[18px] leading-[1.6] font-[200]">
                                Anker, Nigeria's exclusive distributor of Hilti Power tools, consumables, and services since 2017, boasts a seasoned team of sales and after-sales experts committed to upholding Hilti's standards of excellence. The company's dedication ensures adherence to Hilti best practices, including the comprehensive Global warranty policy, covering lifetime service, free repair within 2 years, and cost-limited repair beyond that period.
                                <br /><br /><br /><br /><br className="hidden lg:block" /><br className="hidden lg:block" /><br className="hidden lg:block" /><br className="hidden lg:block" /><br className="hidden lg:block" />

                            </p>
                            <p className="text-[12px] md:text-[14px]">Visit <b><a className="hover:underline" href="https://www.hilti.com.ng/" target="_blank">www.anker.ng</a></b> to learn more</p>

                        </div>

                    </div>
                </div>


            </div>
        </section>

        <Strip />
    </>
}