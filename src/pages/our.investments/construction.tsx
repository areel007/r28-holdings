import heroImg from "../../assets/images/construction-hero.jpg"

export const Construction = () => {
    return <>
        <section className="h-[70vh] 2xl:h-[50vh] w-full hero">
            <img src={heroImg} alt="r28 holding" className="w-full h-full object-cover" />
            <div className="absolute inset-0">
                <div className="w-[90%] max-w-[1248px] mx-auto h-full relative z-[2]">
                    <div className="h-full pt-[100px] pb-[20px] lg:pb-[100px] text-white flex flex-col justify-center">
                        <p className="pl-0 lg:pl-[10px]">Our Investments</p>
                        <h1 className="text-[30px] xsm:text-[40px] lg:text-[50px] 3xl:text-[50px] leading-[1] font-[300]">Arbico Plc</h1>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="w-[90%] max-w-[1248px] mx-auto py-[40px] md:py-[100px] grid grid-cols-1 lg:grid-cols-2 gap-[40px] lg:gap-[20px]">
                <div className="">
                    <h1 className="text-[28px] md:text-[36px] 2xl:text-[36px] font-[200] text-[#381313] leading-[1.2] mb-[40px]">
                        Time-tested <br className="hidden lg:block" /> construction solutions
                    </h1>

                    <div className="w-[90%] h-[350px] bg-gray-500"></div>
                </div>

                <div className="">
                    <div className="">

                        <p className="text-[16px] md:text-[18px] leading-[1.6] font-[200]">
                            R28 operates in the construction sector through her subsidiary, Arbico Plc. Arbico is a full service, building and civil engineering contracting company.
                            <br /><br />
                            Established in 1958, it has been quoted on the Nigerian Stock Exchange since 1978. Arbico has become one of the foremost building construction companies in Nigeria.
                            <br /><br />
                            The Company has developed substantial experience in building and civil engineering for government institutions, multinational companies, multilateral agencies, industrial groups, as well as high-net worth individuals.
                            <br /><br />
                            Arbico has been involved in pre- construction, general contracting, design-build, construction management, project management and construction services across a wide-range of projects in the following sectors:
                        </p>
                        <ul className="text-[16px] md:text-[18px] leading-[1.6] font-[200] list-disc ml-[20px] column-1 md:columns-2">
                            <li>Civil Engineering</li>
                            <li>Infrastructure</li>
                            <li>Aviation</li>
                            <li>Healthcare</li>
                            <li>Hospitality</li>
                            <li>Manufacturing and Industrial</li>
                            <li>Residential</li>
                            <li>Water and Wastewater</li>
                            <li>Education</li>
                            <li>Corporate and commercial Offices</li>

                        </ul>
                        <br />
                        <p className="text-[16px] md:text-[18px] leading-[1.6] font-[200]">
                            Arbico's construction management team has vast experience ranging from private residences, high-rise buildings and factories to plants and infrastructure projects. The company has a proven track record of delivering construction projects on schedule and within budget.
                        </p>

                    </div>



                </div>


            </div>
        </section>
    </>
}