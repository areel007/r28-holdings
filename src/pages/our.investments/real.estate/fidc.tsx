import heroImg from "../../../assets/images/fidc_hero.jpg"
// import { ArrowRight } from "../../../components/Arrow.Right"
import { Link } from "react-router-dom"
import { useEffect } from "react"
import { Strip } from "../../../components/Strip"
import FIDCInnerImg from "../../../assets/images/fidc_inner.jpg"

export const FIDC = () => {

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
                        {/* <p className="uppercase text-[12px] md:text-[14px] tracking-[1px] mb-[10px]">Real Estate</p> */}
                        <h1 className="text-[30px] xsm:text-[40px] lg:text-[50px] 3xl:text-[50px] leading-[1] font-[300]">Shaping Tomorrow’s Communities</h1>
                        <p className="text-[13px] md:text-[24px] mt-[5px]">DEVELOPING SUSTAINABLE, VIBRANT & INCLUSIVE NEIGHBOURHOODS</p>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="w-[90%] max-w-[1248px] mx-auto py-[40px] md:py-[100px] ">
                <div className="border-b pb-[20px] md:pb-[40px]">
                    <div className="mb-[10px] md:mb-[40px]">
                        <p><Link to="/our-investments" className="hover:underline font-[200]">Our Investments</Link> &gt; <span className="text-[#381313] font-[200] text-[14px] md:text-[16px]">FIDC</span></p>
                    </div>
                    <p className="title-w__underline uppercase">First Investment <br className="hidden xl:block" /> Development Company</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] lg:gap-[100px] mt-[20px] md:mt-[40px]">
                    <div className="w-full lg:w-[90%]">
                        <img src={FIDCInnerImg} className="w-full" alt="r28" />
                    </div>

                    <div className="">
                        <div className="">

                            <p className="w-full xl:w-[80%] text-[22px] md:text-[30px] 2xl:text-[30px] font-[200] text-[#381313] leading-[1.4]">
                                Creating Inspiring Communities through Vision, Responsibility and Passion
                                <br /><br />
                            </p>

                            <p className="text-[16px] md:text-[18px] leading-[1.6] font-[200]">
                                First Investment Development Company (FIDC) is a significant and innovative real estate development and investment group. Established in 2008, it is focused on substantial regeneration projects across the whole spectrum of residential, commercial and leisure sectors.
                                <br /><br />
                                Its full range of integrated solutions is delivered through an experienced team of finance, development, design, construction and marketing professionals and advisors. A team that is proudly transforming the skyline one development at a time.
                                <br /><br /><br />

                            </p>
                            <p className="text-[12px] md:text-[14px]">Visit <b><a className="hover:underline" href="https://www.fidc.ng" target="_blank">www.fidc.ng</a></b> to learn more</p>

                        </div>

                    </div>
                </div>


            </div>
        </section>

        <Strip />
    </>
}