import LeadershipImg from "../../../assets/images/leadership (1).jpg"
import { useEffect } from "react"
import AdebisiImg from "../../../assets/images/adebisi.jpg"
import { Link } from "react-router-dom"
import { Strip } from "../../../components/Strip"

export const Adebisi = () => {
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
                    <p className="mb-[20px] md:mb-[40px] font-[300] text-[13px] mt-[5px]"><Link to="/about-us/leadership" className="hover:underline">Leadership</Link> &gt; Adebisi Adebutu</p>
                </div>
            </div>
        </section>

        <section>
            <div className="w-[90%] max-w-[900px] mx-auto py-[40px] md:py-[100px]">

                <div className="grid grid-cols-1 sm:grid-cols-[200px_1fr] xl:grid-cols-[250px_1fr] gap-[40px]">
                    <img src={AdebisiImg} alt="r28" className="w-full" />
                    <div>
                        <h3 className="text-[20px] md:text-[28px] mb-[10px]">Adebisi Adebutu</h3>
                        <p className="text-[14px] md:text-[16px] leading-[1.6] font-[300]">
                            Adebisi has over 25 years of inspiring entrepreneurial
                            experience as founder and business owner in several organizations
                            from telecommunication, gaming, hospitality, entertainment,
                            construction, and property development. <br />
                            <br />
                            A consummate entrepreneur with a high degree of personal integrity
                            and effective leadership and management style, offering expertise
                            in core areas of business management operations. <br />
                            <br />
                            Adebisi possesses a contagious passion for excellence, a talent
                            for resourceful business solutions, and a capacity for motivated
                            leadership. He is an alumnus of the University of Swansea, United
                            Kingdom and also alumnus of Insead Business School.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <Strip />
    </>
}