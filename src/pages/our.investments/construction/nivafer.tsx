import heroImg from "../../../assets/images/nivafer_hero.jpg"
// import { ArrowRight } from "../../../components/Arrow.Right"
import { Link } from "react-router-dom"
import { useEffect } from "react"
import { Strip } from "../../../components/Strip"
import NivaferInnerImg from "../../../assets/images/nivafer_inner.jpg"

export const Nivafer = () => {

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
                        {/* <p className="uppercase text-[12px] md:text-[14px] tracking-[1px] mb-[10px]">Construction & Engineering Solutions</p> */}
                        <h1 className="text-[30px] xsm:text-[40px] lg:text-[50px] 3xl:text-[50px] leading-[1] font-[300]">Creative Technology in <br className="hidden xl:block" /> Steel Construction</h1>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="w-[90%] max-w-[1248px] mx-auto py-[40px] md:py-[100px] ">
                <div className="border-b pb-[20px] md:pb-[40px]">
                    <div className="mb-[10px] md:mb-[40px]">
                        <p><Link to="/our-investments" className="hover:underline font-[200]">Our Investments</Link> &gt; <span className="text-[#381313] font-[200] text-[14px] md:text-[16px]">Nifaver</span></p>
                    </div>
                    <p className="title-w__underline uppercase">Nivafer Engineering <br className="hidden lg:block" /> & Construction Limited</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] lg:gap-[100px] mt-[20px] md:mt-[40px]">
                    <div className="w-full lg:w-[90%]">
                        <img src={NivaferInnerImg} className="w-full" alt="r28" />
                    </div>

                    <div className="">
                        <div className="">

                            <p className="text-[16px] md:text-[18px] leading-[1.6] font-[200]">
                                Nivafer Engineering and Construction Limited is a leading structural steel, engineering, fabrication, and erection outfit offering unparalleled engineering and construction services to the oil and gas sector and allied industries.
                                <br /><br />
                                Renowned for its peerless experience and technical expertise, Nivafer specialises in crafting heavy steel structures, subsea equipment, pressure vessels, industrial piping, and storage tanks of diverse sizes and specifications.
                                <br /><br />
                                The company's ranking as a major player in high-precision structural steel fabrication & erection is a direct consequence of its established track record of competence and reliability in the delivery of quality products and services.
                                <br /><br /><br />

                            </p>
                            <p className="text-[12px] md:text-[14px]">To learn more... visit <b><a className="hover:underline" href="https://nivafer.com" target="_blank">www.nivafer.com</a></b></p>

                        </div>

                    </div>
                </div>


            </div>
        </section>

        <Strip />
    </>
}