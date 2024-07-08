import heroImg from "../../assets/images/aviation-hero.jpg"

export const Aviation = () => {
    return <>
        <section className="h-[70vh] 2xl:h-[50vh] w-full hero">
            <img src={heroImg} alt="r28 holding" className="w-full h-full object-cover" />
            <div className="absolute inset-0">
                <div className="w-[90%] max-w-[1248px] mx-auto h-full relative z-[2]">
                    <div className="h-full pt-[100px] pb-[20px] lg:pb-[100px] text-white flex flex-col justify-center">
                        <p className="pl-0 lg:pl-[10px]">Our Investments</p>
                        <h1 className="text-[30px] xsm:text-[40px] lg:text-[60px] 3xl:text-[60px] leading-[1] font-[300]">Aviation</h1>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="w-[90%] max-w-[1248px] mx-auto py-[40px] md:py-[100px] grid grid-cols-1 lg:grid-cols-2 gap-[40px] lg:gap-[20px]">
                <div>
                    <h1 className="text-[28px] md:text-[36px] 2xl:text-[36px] font-[200] text-[#381313] leading-[1.2] mb-[40px]">
                        Creating a better <br className="hidden lg:block" /> travel experience.
                    </h1>

                    <div className="w-[90%] h-[350px] bg-gray-500"></div>
                </div>

                <div>
                    <div className="">

                        <p className="text-[16px] md:text-[18px] leading-[1.6] font-[200]">
                            R28 Limited operates in the aviation sector via Asaba Airport Company (AAC).
                            <br /><br />
                            The company recently signed a thirty (30) years concession agreement with the Delta State Government to redevelop, operate and manage the Asaba International Airport (IATA: ABB, ICAO: DNAS).
                            <br /><br />
                            The Asaba International Airport is an airport serving the city of Asaba, its environs, and the Niger-Delta region. The airport currently handles domestic flight services connecting the metropolis to Nigeria's major metropolitan centers, with few international flights in the recent past.
                            <br /><br />
                            The objectives of the concession are to foster the remodeling and deployment of requisite airport infrastructure, elevate air travel experience and create a regional hub for air traffic movement connecting West and Central Africa. In this regard, our vision is to provide professional excellence in airport management and operations, help airlines operate safely, securely, and efficiently and provide a pleasurable and convenient travel experience to passengers.
                            <br /><br />
                            The sustainability of Asaba International Airport is critical for the local economy since it is in a position to support the expected trade and economic growth of the Niger-Delta region. The remodeling and expansion of the airport will address current capacity issues and the expected cargo and passenger traffic growth.
                        </p>


                    </div>



                </div>


            </div>
        </section>
    </>
}