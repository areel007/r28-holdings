import heroImg from "../../../assets/images/posmoreti_hero.jpg"
// import { ArrowRight } from "../../../components/Arrow.Right"
import { Link } from "react-router-dom"
import { useEffect } from "react"
import { Strip } from "../../../components/Strip"
import PosmoretiInnerImg from "../../../assets/images/posmoreti_inner.jpg"

export const Posmoreti = () => {

    useEffect(() => { window.scrollTo(0, 0) }, [])

    return <>
        <section className="h-[70vh] 2xl:h-[50vh] w-full hero">
            <img src={heroImg} alt="r28 holding" className="w-full h-full object-cover" />
            <div className="absolute inset-0">
                <div className="w-[90%] max-w-[1248px] mx-auto h-full relative z-[2]">
                    <div className="h-full pt-[100px] pb-[20px] lg:pb-[100px] text-white flex flex-col justify-center">
                        {/* <p className="mb-[10px] uppercase text-[12px] md:text-[14px] tracking-[1px]">Retail services</p> */}
                        <h1 className="text-[30px] xsm:text-[40px] lg:text-[50px] 3xl:text-[50px] leading-[1] font-[300]">Premium value you can lay</h1>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="w-[90%] max-w-[1248px] mx-auto py-[40px] md:py-[100px]">

                <div className="border-b pb-[20px] md:pb-[40px]">
                    <div className="mb-[10px] md:mb-[40px]">
                        <p><Link to="/our-investments" className="hover:underline font-[200]">Our Investments</Link> &gt; <span className="text-[#381313] font-[200] text-[14px] md:text-[16px]">Posmoreti</span></p>
                    </div>
                    <p className="title-w__underline uppercase">Posmoreti</p>
                </div>


                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] lg:gap-[100px] mt-[20px] md:mt-[40px]">
                    <div className="w-full lg:w-[90%]">
                        <img src={PosmoretiInnerImg} className="w-full" alt="r28" />
                    </div>

                    <div className="">
                        <div className="">

                            <p className="text-[16px] md:text-[18px] leading-[1.6] font-[200]">
                                <span className="text-[18px] md:text-[24px] leading-[1.4] text-[#381313]">Posmoreti, a dynamic porcelain tile brand renowned for its superior quality, offers an extensive selection of porcelain tiles tailored for both interior and exterior applications.</span>
                                <br /><br />
                                With an unwavering commitment to excellence, Posmoreti sets itself apart in the market, providing one-of-a-kind collections that exude class and sophistication. Each tile is meticulously crafted to elevate any space, embodying the brand's dedication to timeless elegance and impeccable design.
                                <br /><br /><br />
                            </p>
                            <p className="text-[12px] md:text-[14px]">To learn more... visit <b><a className="hover:underline" href="https://www.posmoreti.com" target="_blank">www.posmoreti.com</a></b></p>

                        </div>

                    </div>
                </div>


            </div>
        </section>

        <Strip />
    </>
}