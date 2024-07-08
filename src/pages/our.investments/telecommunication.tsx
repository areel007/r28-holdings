import heroImg from "../../assets/images/telcoms-hero.jpg"

export const Telecommunications = () => {
    return <>
        <section className="h-[70vh] 2xl:h-[50vh] w-full hero">
            <img src={heroImg} alt="r28 holding" className="w-full h-full object-cover" />
            <div className="absolute inset-0">
                <div className="w-[90%] max-w-[1248px] mx-auto h-full relative z-[2]">
                    <div className="h-full pt-[100px] pb-[20px] lg:pb-[100px] text-white flex flex-col justify-center">
                        <p className="pl-0 lg:pl-[10px]">Our Investments</p>
                        <h1 className="text-[30px] xsm:text-[40px] lg:text-[60px] 3xl:text-[60px] leading-[1] font-[300]">Telecommunications</h1>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="w-[90%] max-w-[1248px] mx-auto py-[40px] md:py-[100px] grid grid-cols-1 lg:grid-cols-2 gap-[40px] lg:gap-[20px]">
                <div>
                    <h1 className="text-[28px] md:text-[36px] 2xl:text-[36px] font-[200] text-[#381313] leading-[1.2] mb-[40px]">
                        Seamlessly supporting <br className="hidden lg:block" /> the telecoms sector
                    </h1>

                    <div className="w-[90%] h-[350px] bg-gray-500"></div>
                </div>

                <div>
                    <div className="">

                        <p className="text-[16px] md:text-[18px] leading-[1.6] font-[200]">
                            R28 Limited operates in the telecommunications sector through its subsidiary, Biswal Limited.
                            <br /><br />
                            The company provides a full range of technical services and material support to allow end-to-end telecoms infrastructure deployment, as well as post deployment maintenance and energy solutions management, both within and outside Nigeria.
                            <br /><br />
                            Biswal provides high quality, bespoke services to the telecommunications industry. We pride ourselves on the acquisition, development and deployment of all resources required to allow a telecommunications company to provide excellent service to its own customers.
                            <br /><br />
                            We provide support services to the telecommunications industry. With more than twenty years' experience, we deliver high quality, cost-effective support services and innovative products to leading telecommunications companies in Nigeria.
                            <br /><br />
                            We acquire, develop and deploy resources in order to deliver the best possible quality in service for the telecommunications industry.
                        </p>


                    </div>

                </div>

            </div>
        </section>
    </>
}