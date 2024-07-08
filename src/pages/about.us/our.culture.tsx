import OurCultureImg from "../../assets/images/core-value.jpg"
import { Strip } from "../../components/Strip"
import Integrity from "../../assets/images/integrity.svg"
import Innovation from "../../assets/images/innovation.svg"
import Excellence from "../../assets/images/excellence.svg"

export const OurCulture = () => {
    return <>
        <section className="h-[70vh] 2xl:h-[50vh] w-full hero">
            <img src={OurCultureImg} alt="r28 holding" className="w-full h-full object-cover" />
            <div className="absolute inset-0">
                <div className="w-[90%] max-w-[1248px] mx-auto h-full relative z-[2]">
                    <div className="h-full pt-[100px] pb-[20px] lg:pb-[100px] text-white flex flex-col justify-center">
                        {/* <p className="pl-0 lg:pl-[10px] uppercase text-[12px] md:text-[14px] tracking-[1px]">Culture & Values</p> */}
                        <h1 className="text-[30px] xsm:text-[40px] lg:text-[50px] 3xl:text-[50px] leading-[1] font-[300]">Culture Built on Enduring Values</h1>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="w-[90%] max-w-[1248px] mx-auto py-[40px] md:py-[100px]">
                <p className="max-w-[700px] w-full text-[18px] md:text-[22px] leading-[1.4] font-[200] text-[#381313]">Everyone at R28 has an ongoing responsibility to share and live by our corporate values and ambitions. The Group’s thinking, interaction and decision-making process is grounded in these values, and continuous adherence is essential to our growth.</p>

                <div className="max-w-[1100px] grid grid-cols-1 md:grid-cols-3 gap-[40px] md:gap-[100px] mt-[50px]">
                    <div className="flex flex-col gap-[20px]">
                        <img src={Integrity} alt="r28 holdings" className="w-[50px]" />
                        <div>
                            <p className="text-[18px] md:text-[32px] font-[300]">Integrity</p>
                            <p className="text-gray-600 text-[16px] md:text-[18px] font-[300]">Cornerstone of our actions</p>
                        </div>
                        <p className="text-[14px] md:text-[16px]">
                            Integrity forms the cornerstone of everything we do. We uphold the highest ethical standards in all our interactions, ensuring transparency, honesty, and accountability in every decision we make.
                        </p>
                    </div>

                    <div className="flex flex-col gap-[20px]">
                        <img src={Excellence} alt="r28 holdings" className="w-[58px]" />
                        <div>
                            <p className="text-[18px] md:text-[32px] font-[300]">Excellence</p>
                            <p className="text-gray-600 text-[16px] md:text-[18px] font-[300]">Our guiding principle</p>
                        </div>
                        <p className="text-[14px] md:text-[16px]">
                            Excellence is ingrained in our culture, driving us to constantly strive for the best possible outcomes. We are committed to delivering exceptional quality in our products, services, and operations, exceeding the expectations of our customers and stakeholders.
                        </p>
                    </div>

                    <div className="flex flex-col gap-[20px]">
                        <img src={Innovation} alt="r28 holdings" className="w-[58px]" />
                        <div>
                            <p className="text-[18px] md:text-[32px] font-[300]">Innovation</p>
                            <p className="text-gray-600 text-[16px] md:text-[18px] font-[300]">Drives us forward</p>
                        </div>
                        <p className="text-[14px] md:text-[16px]">
                            Innovation fuels our progress, inspiring us to think creatively and embrace change. We continuously seek new ways to improve and evolve, harnessing cutting-edge technologies and fresh ideas to drive growth and stay ahead in a dynamic marketplace.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <Strip />
    </>
}