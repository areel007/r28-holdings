import heroImg from "../../../assets/images/ledco_hero.jpg"
// import { ArrowRight } from "../../../components/Arrow.Right"
import { Link } from "react-router-dom"
import { useEffect } from "react"
import { Strip } from "../../../components/Strip"
import LedcoInnerImg from "../../../assets/images/ledco_inner.jpg"

export const Ledco = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return <>
        <section className="h-[70vh] 2xl:h-[50vh] w-full hero">
            <img src={heroImg} alt="r28 holding" className="w-full h-full object-cover" />
            <div className="absolute inset-0">
                <div className="w-[90%] max-w-[1248px] mx-auto h-full relative z-[2]">
                    <div className="h-full pt-[100px] pb-[20px] lg:pb-[100px] text-white flex flex-col justify-center">
                        {/* <p className="uppercase text-[12px] md:text-[14px] tracking-[1px] mb-[10px]">Telecommunication & Technology Solutions</p> */}
                        <h1 className="text-[30px] xsm:text-[40px] lg:text-[50px] 3xl:text-[50px] leading-[1] font-[300]">Powering Progress through <br className="hidden xl:block" /> Sustainable Lighting Solutions</h1>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="w-[90%] max-w-[1248px] mx-auto py-[40px] md:py-[100px]">
                <div className="border-b pb-[20px] md:pb-[40px]">
                    <div className="mb-[10px] md:mb-[40px]">
                        <p><Link to="/our-investments" className="hover:underline font-[200]">Our Investments</Link> &gt; <span className="text-[#381313] font-[200] text-[14px] md:text-[16px]">Ledco</span></p>
                    </div>
                    <p className="title-w__underline uppercase">ledco</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] lg:gap-[100px] mt-[20px] md:mt-[40px]">
                    <div className="w-full lg:w-[90%]">
                        <img src={LedcoInnerImg} className="w-full" alt="r28" />
                    </div>

                    <div className="">
                        <div className="">

                            <p className="text-[14px] md:text-[16px] leading-[1.4] font-[200]">
                                <span className="text-[18px] md:text-[24px] text-[#381313]">
                                    LEDCo is an infrastructure service provider dedicated to enhancing lives and environmental sustainability through reliable, efficient, secure, and sustainable public lighting and power management solutions. Specializing in SMART energy solutions, LEDCo provides cutting-edge LED lighting products known for their technological sophistication and energy efficiency.
                                </span>
                                <br /><br />
                                As a turnkey service provider, LEDCo offers bespoke indoor and outdoor lighting solutions designed to meet clients' specific facility needs. From design to manufacturing and precise delivery, LEDCo offers intelligent LED lighting systems to address a variety of project requirements.
                                <br /><br /><br />

                            </p>
                            <p className="text-[12px] md:text-[14px]">To learn more... visit <b><a className="hover:underline" href="https://www.ledco.ng" target="_blank">www.ledco.ng</a></b></p>

                        </div>

                    </div>
                </div>


            </div>
        </section>

        <Strip />
    </>
}