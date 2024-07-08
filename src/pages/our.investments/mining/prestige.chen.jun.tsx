import heroImg from "../../../assets/images/prestige_hero.jpg"
// import { ArrowRight } from "../../../components/Arrow.Right"
import { Link } from "react-router-dom"
import { useEffect } from "react"
import { Strip } from "../../../components/Strip"
import PrestigeInnerImg from "../../../assets/images/prestige_inner.jpg"

export const PrestigeChenJun = () => {

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
                        {/* <p className="mb-[10px] uppercase text-[12px] md:text-[14px] tracking-[1px]">Mining</p> */}
                        <h1 className="text-[30px] xsm:text-[40px] lg:text-[50px] 3xl:text-[50px] leading-[1] font-[300]">Extracting Sustainable Value</h1>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="w-[90%] max-w-[1248px] mx-auto py-[40px] md:py-[100px]">
                <div className="border-b pb-[20px] md:pb-[40px]">
                    <div className="mb-[10px] md:mb-[40px]">
                        <p><Link to="/our-investments" className="hover:underline font-[200]">Our Investments</Link> &gt; <span className="text-[#381313] font-[200] text-[14px] md:text-[16px]">FIDC</span></p>
                    </div>
                    <p className="title-w__underline uppercase">Prestige Chen Jun Quarry</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] lg:gap-[100px] mt-[20px] md:mt-[40px]">
                    <div className="w-full lg:w-[90%]">
                        <img src={PrestigeInnerImg} className="w-full" alt="r28" />
                    </div>

                    <div className="">
                        <div className="">

                            <p className="text-[16px] md:text-[18px] leading-[1.4] font-[200]">
                                <span className="text-[18px] md:text-[22px] text-[#381313]">Prestige Quarry was established to explore and develop mining licenses for natural stone and other solid minerals.</span>
                                <br /><br />
                                With operational quarries in Abuja and Ibadan, the company offers a diverse range of stone products such as marble, granite, limestone, sandstone, and slate. Beyond quarrying, Prestige Quarry possesses the expertise and resources to provide various mining services and is actively engaged in exploratory ventures for additional solid mineral opportunities.
                                <br /><br /><br /><br /><br className="hidden lg:block" /><br className="hidden lg:block" /><br className="hidden lg:block" /><br className="hidden lg:block" /><br className="hidden lg:block" />

                            </p>
                            {/* <p className="text-[12px] md:text-[14px]">Visit <b><a className="hover:underline" href="https://www.arbico.ng" target="_blank">www.anker.ng</a></b> to learn more</p> */}

                        </div>

                    </div>
                </div>


            </div>
        </section>

        <Strip />
    </>
}