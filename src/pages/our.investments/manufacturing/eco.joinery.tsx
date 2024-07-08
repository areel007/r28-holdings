import heroImg from "../../../assets/images/ecojoinery_hero.jpg"
// import { ArrowRight } from "../../../components/Arrow.Right"
import { Link } from "react-router-dom"
import { useEffect } from "react"
import { Strip } from "../../../components/Strip"
import EcoJoineryInnerImg from "../../../assets/images/ecojoinery_inner.jpg"

export const EcoJoinery = () => {

    useEffect(() => { window.scrollTo(0, 0) }, [])

    return <>
        <section className="h-[70vh] 2xl:h-[50vh] w-full hero">
            <img src={heroImg} alt="r28 holding" className="w-full h-full object-cover" />
            <div className="absolute inset-0">
                <div className="w-[90%] max-w-[1248px] mx-auto h-full relative z-[2]">
                    <div className="h-full pt-[100px] pb-[20px] lg:pb-[100px] text-white flex flex-col justify-center">
                        {/* <p className="mb-[10px] uppercase text-[12px] md:text-[14px] tracking-[1px]">Manufacturing</p> */}
                        <h1 className="text-[30px] xsm:text-[40px] lg:text-[50px] 3xl:text-[50px] leading-[1] font-[300]">Excellence of European-Style <br className="hidden md:block" /> Doors, Crafted Locally in Lagos</h1>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="w-[90%] max-w-[1248px] mx-auto py-[40px] md:py-[100px]">

                <div className="border-b pb-[20px] md:pb-[40px]">
                    <div className="mb-[10px] md:mb-[40px]">
                        <p><Link to="/our-investments" className="hover:underline font-[200]">Our Investments</Link> &gt; <span className="text-[#381313] font-[200] text-[14px] md:text-[16px]">Ecojoinery</span></p>
                    </div>
                    <p className="title-w__underline uppercase">ecojoinery</p>
                </div>



                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] lg:gap-[100px] mt-[20px] md:mt-[40px]">
                    <div className="w-full lg:w-[90%]">
                        <img src={EcoJoineryInnerImg} className="w-full" alt="r28" />
                    </div>

                    <div className="">
                        <div className="">

                            <p className="text-[16px] md:text-[18px] leading-[1.6] font-[200]">
                                <span className="text-[18px] md:text-[24px] leading-[1.4] text-[#381313]">Eco Joinery is a manufacturing company established in collaboration with European door experts with the objective of manufacturing high-quality internal doors in Nigeria.</span>
                                <br /><br />
                                Dedicated to highlighting Nigeria's manufacturing prowess while maintaining international standards, Eco Joinery prioritizes local sourcing and meticulous craftsmanship.
                                <br /><br />
                                With a firm dedication to excellence, Eco Joinery pledges to provide superior-quality doors crafted locally at competitive prices in Naira. Emphasizing quality, value, and the promotion of employment opportunities and training for Nigerian workers, the company takes pride in its Nigerian heritage while upholding European standards in its cutting-edge 52,000 square feet factory located in Lagos Island.
                                <br /><br /><br />
                            </p>
                            <p className="text-[12px] md:text-[14px]">To learn more... visit <b><a className="hover:underline" href="https://www.ecojoinery.ng" target="_blank">www.ecojoinery.ng</a></b></p>

                        </div>

                    </div>
                </div>


            </div>
        </section>

        <Strip />
    </>
}