import heroImg from "../../assets/images/real-estate-hero.jpg"

export const RealEstate = () => {
    return <>
        <section className="h-[70vh] 2xl:h-[50vh] w-full hero">
            <img src={heroImg} alt="r28 holding" className="w-full h-full object-cover" />
            <div className="absolute inset-0">
                <div className="w-[90%] max-w-[1248px] mx-auto h-full relative z-[2]">
                    <div className="h-full pt-[100px] pb-[20px] lg:pb-[100px] text-white flex flex-col justify-center">
                        <p className="pl-0 lg:pl-[10px]">Our Investments</p>
                        <h1 className="text-[30px] xsm:text-[40px] lg:text-[60px] 3xl:text-[60px] leading-[1] font-[300]">Real Estate</h1>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="w-[90%] max-w-[1248px] mx-auto py-[40px] md:py-[100px] grid grid-cols-1 lg:grid-cols-2 gap-[40px] lg:gap-[20px]">
                <div>
                    <h1 className="text-[28px] md:text-[36px] 2xl:text-[36px] font-[200] text-[#381313] leading-[1.2] mb-[40px]">
                        Shaping tomorrow's <br className="hidden lg:block" /> communities
                    </h1>

                    <div className="w-[90%] h-[350px] bg-gray-500"></div>
                </div>

                <div>
                    <div className="">

                        <p className="text-[16px] md:text-[18px] leading-[1.6] font-[200]">
                            R28 Limited operates in the real estate sector through First Investment Development Company (FIDC).
                            <br /><br />
                            FIDC is one of the progressive and most valuable real estate development and investment companies in Nigeria. With proven competencies in properties, shopping malls & retail, airports and hospitality & leisure, FIDC is uniquely positioned to shape new lifestyles and transform communities with a focus on design excellence, build quality and timely delivery.
                            <br /><br />
                            The Company is currently involved in implementing real estate programs for public and private sector clients.
                            <br /><br />
                            Our extensive experience covers a wide range of projects including corporate headquarters, office buildings, residential and student housing, healthcare facilities, industrial infrastructure, aviation facilities and mixed-use development.
                            <br /><br />
                            By establishing best-in-class local and foreign professional management teams with relevant expertise, and through leveraging its own equity capital, the Company has built extensive track record in identifying, recommending, and executing the most appropriate financing, development, and management solutions.
                        </p>


                    </div>



                </div>


            </div>
        </section>
    </>
}