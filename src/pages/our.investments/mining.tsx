import heroImg from "../../assets/images/mining-hero.jpg"

export const Mining = () => {
    return <>
        <section className="h-[70vh] 2xl:h-[50vh] w-full hero">
            <img src={heroImg} alt="r28 holding" className="w-full h-full object-cover" />
            <div className="absolute inset-0">
                <div className="w-[90%] max-w-[1248px] mx-auto h-full relative z-[2]">
                    <div className="h-full pt-[100px] pb-[20px] lg:pb-[100px] text-white flex flex-col justify-center">
                        <p className="pl-0 lg:pl-[10px]">Our Investments</p>
                        <h1 className="text-[30px] xsm:text-[40px] lg:text-[60px] 3xl:text-[60px] leading-[1] font-[300]">Mining</h1>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div>
                <div className="w-[90%] max-w-[1248px] mx-auto py-[40px] md:py-[100px] ">
                    <div className="border-b mb-[20px] md:mb-[40px]">
                        <h1 className="text-[28px] md:text-[36px] 2xl:text-[36px] font-[200] text-[#381313] leading-[1.2] mb-[20px] md:mb-[40px]">
                            Extracting <br className="hidden lg:block" /> sustainable value
                        </h1>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] lg:gap-[20px]">
                        <div>
                            <div className="w-full md:w-[90%] h-[250px] md:h-[350px] bg-gray-500"></div>
                        </div>

                        <div>
                            <div className="">

                                <p className="text-[16px] md:text-[18px] leading-[1.6] font-[200]">
                                    R28 Limited operates in the mining sector through Prestige Quarry, with activities in Abuja, Lagos, Plateau and Bauchi.
                                    <br /><br />
                                    Prestige Quarry was established to explore and develop mining licenses for natural stone and other solid minerals.
                                    <br /><br />
                                    The Company currently owns and operates quarries in Abuja and Ibadan, providing a wide range of stone products including marble, granite, limestone, sandstone, and slate.
                                    <br /><br />
                                    Prestige Quarry also has the capability and experience to undertake similar and related mining services and is currently conducting exploratory activities for other solid minerals propositions.
                                </p>


                            </div>

                        </div>
                    </div>


                </div>
            </div>
        </section>
    </>
}