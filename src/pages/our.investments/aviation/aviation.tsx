import heroImg from "../../../assets/images/aac_hero.jpg"
// import { ArrowRight } from "../../../components/Arrow.Right"
import { Link } from "react-router-dom"
import { useEffect } from "react"
import { Strip } from "../../../components/Strip"
import AACInnerImg from "../../../assets/images/aac_inner.jpg"

export const AAC = () => {

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
                        {/* <p className="uppercase text-[12px] md:text-[14px] tracking-[1px] mb-[10px]">Aviation & Infrastructure</p> */}
                        <h1 className="text-[30px] xsm:text-[40px] lg:text-[50px] 3xl:text-[50px] leading-[1] font-[300]">Creating Better Travel Experience</h1>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="w-[90%] max-w-[1248px] mx-auto py-[40px] md:py-[100px] ">
                <div className="border-b pb-[20px] md:pb-[40px]">
                    <div className="mb-[10px] md:mb-[40px]">
                        <p><Link to="/our-investments" className="hover:underline font-[200]">Our Investments</Link> &gt; <span className="text-[#381313] font-[200] text-[14px] md:text-[16px]">Asaba Airport Company</span></p>
                    </div>
                    <p className="title-w__underline">Asaba Airport Company</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] lg:gap-[100px] mt-[20px] md:mt-[40px]">
                    <div className="w-full lg:w-[90%]">
                        <img src={AACInnerImg} className="w-full" alt="r28" />
                    </div>


                    <div className="">
                        <div className="">

                            <p className="text-[18px] md:text-[24px] font-[200] text-[#381313] leading-[1.4]">
                                R28 operates in the aviation sector via Asaba Airport Company, the concessionaire responsible for managing Asaba International Airport.
                                <br /><br />
                            </p>

                            <p className="text-[16px] md:text-[18px] leading-[1.6] font-[200]">
                                Established as a specialised entity, Asaba Airport Company (AAC) drives the turnaround management, operations, and maintenance at the airport. The Asaba International Airport is an airport serving the city of Asaba, its environs, and the Niger-Delta region. The airport currently handles domestic flight services connecting the metropolis to Nigeria's major metropolitan centers.
                                <br /><br />
                                The primary goal of the concession is to enhance the air travel experience across the South-East and South-South regions, positioning the airport as a pivotal hub for air traffic between West and Central Africa.
                                <br /><br />
                                AAC's primary focus lies in managing, operating, maintaining, and developing Asaba International Airport. Our business model extends beyond airport operations to capitalise on the commercial and growth prospects within the travel and aviation sectors. Looking ahead, our vision is to transform Asaba International Airport into a central nexus for connectivity and sustainability. We aim to exceed expectations by providing world-class services to individuals and businesses, all while generating sustainable value for our stakeholders.
                                <br /><br /><br />

                            </p>
                            <p className="text-[12px] md:text-[14px]">To learn more... visit <b><a className="hover:underline" href="https://www.asabaairport.com/corporate" target="_blank">www.asabaairport.com/corporate</a></b></p>

                        </div>

                    </div>
                </div>


            </div>
        </section>

        <Strip />
    </>
}