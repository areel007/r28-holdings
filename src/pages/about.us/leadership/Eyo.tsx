import LeadershipImg from "../../../assets/images/leadership (1).jpg"
import { useEffect } from "react"
import EyoImg from "../../../assets/images/eyo.jpg"
import { Link } from "react-router-dom"
import { Strip } from "../../../components/Strip"

export const Eyo = () => {
    useEffect(() => window.scrollTo(0, 0), [])

    return <>
        <section className="h-[50vh] 2xl:h-[30vh] w-full hero">
            <img src={LeadershipImg} alt="r28 holding" className="w-full h-full object-cover" />
            <div className="absolute inset-0">
                <div className="w-[90%] max-w-[1248px] mx-auto h-full relative z-[2]">
                    <div className="h-full pt-[100px] pb-[20px] lg:pb-[100px] text-white flex flex-col justify-center">
                        {/* <p className="pl-0 lg:pl-[10px] uppercase text-[12px] md:text-[14px] tracking-[1px]">About us</p> */}
                        <h1 className="text-[30px] xsm:text-[40px] lg:text-[50px] 3xl:text-[50px] leading-[1] font-[300]">Leadership</h1>
                    </div>
                    <p className="mb-[20px] md:mb-[40px] font-[300] text-[13px] mt-[5px]"><Link to="/about-us/leadership" className="hover:underline">Leadership</Link> &gt; Eyo Asuquo</p>
                </div>
            </div>
        </section>

        <section>
            <div className="w-[90%] max-w-[900px] mx-auto py-[40px] md:py-[100px]">

                <div className="grid grid-cols-1 sm:grid-cols-[200px_1fr] xl:grid-cols-[250px_1fr] gap-[40px]">
                    <img src={EyoImg} alt="r28" className="w-full" />
                    <div>
                        <h3 className="text-[20px] md:text-[28px] mb-[10px]">Eyo Asuquo</h3>
                        <p className="text-[14px] md:text-[16px] leading-[1.6] font-[300]">
                            Eyo Asuquo possesses over 20 years of leadership and executive
                            management experience in Business Consulting, Commercial Banking,
                            Insurance, Infrastructure, Construction, and Real Estate. <br />
                            <br />
                            Eyo started his career with a globally recognized management
                            consulting and audit firm. He has acquired significant experience
                            in business management and led several strategy and change
                            initiatives across several sectors, has deep mergers and
                            acquisition experience and achieved capital raise for several
                            infrastructure projects including an airport terminal,
                            internationally branded hotel assets. <br />
                            <br />
                            He is an alumnus of University of Nigeria, Nsukka, and Cass
                            Business School, London, and a member of the Chartered Institute
                            of Bankers.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <Strip />
    </>
}