import heroImg from "../../../assets/images/biswal_hero.jpg"
// import { ArrowRight } from "../../../components/Arrow.Right"
import { Link } from "react-router-dom"
import { useEffect } from "react"
import { Strip } from "../../../components/Strip"
import BiswalInnerImg from "../../../assets/images/biswal_inner.jpg"

export const Biswal = () => {

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
                        <h1 className="text-[30px] xsm:text-[40px] lg:text-[50px] 3xl:text-[50px] leading-[1] font-[300]">Seamlessly Supporting the Telecom Sector</h1>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="w-[90%] max-w-[1248px] mx-auto py-[40px] md:py-[100px]">
                <div className="border-b pb-[20px] md:pb-[40px]">
                    <div className="mb-[10px] md:mb-[40px]">
                        <p><Link to="/our-investments" className="hover:underline font-[200]">Our Investments</Link> &gt; <span className="text-[#381313] font-[200] text-[14px] md:text-[16px]">Biswal</span></p>
                    </div>
                    <p className="title-w__underline">Biswal</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] lg:gap-[100px]">

                    <div className="w-full lg:w-[90%]">
                        <img src={BiswalInnerImg} className="w-full" alt="r28" />
                    </div>

                    <div className="">
                        <div className="">

                            <p className="text-[18px] md:text-[24px] font-[200] text-[#381313] leading-[1.4] mt-[20px] md:mt-[40px]">
                                Biswal specialises in delivering customised support services to the telecommunications sector, ensuring high-quality solutions for companies aiming to provide exceptional services to their customers.
                                <br /><br />
                            </p>

                            <p className="text-[16px] md:text-[18px] leading-[1.6] font-[200]">
                                Biswal offers extensive technical and material support to facilitate end-to-end telecom infrastructure deployment and provides ongoing maintenance and energy management solutions for the local and international markets.
                                <br /><br />
                                With over two decades of experience, Biswal takes pride in its ability to acquire, develop, and deploy resources that guarantee superior service quality. The company's commitment to excellence enables it to offer cost-effective support services and innovative products to leading telecommunications firms in Nigeria and beyond.
                                <br /><br /><br />
                            </p>
                            <p className="text-[12px] md:text-[14px]">To learn more... visit <b><a className="hover:underline" href="https://www.biswal.ng" target="_blank">www.biswal.ng</a></b></p>

                        </div>

                    </div>
                </div>


            </div>
        </section>

        <Strip />
    </>
}