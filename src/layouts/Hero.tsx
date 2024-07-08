import HeroVideo from "../assets/videos/R28xhome (1).webm"
import { ArrowDown } from "../components/Arrow.Down"

export const Hero = () => {
    return <section className="h-screen w-full hero">
        <video src={HeroVideo} controls autoPlay loop muted width={1920} height={500} className="object-cover w-full h-full"></video>
        <div className="absolute top-0 w-full h-full">
            <div className="w-[90%] max-w-[1248px] mx-auto h-full relative z-[2]">
                {/* <div className="h-[108px]"></div> */}
                <div className="h-full pt-[100px] pb-[20px] lg:pb-[100px] grid grid-cols-1 lg:grid-cols-[1fr_auto] items-start gap-[30px] lg:gap-0">
                    <div className="h-full flex flex-col justify-center">
                        <p className="text-white pl-0 lg:pl-[10px]">Meet R28 Holdings</p>
                        <h1 className="text-[50px] xsm:text-[60px] lg:text-[80px] 3xl:text-[100px] text-white leading-[1] font-[600]">Investing in Tomorrow's Possibilities Today!</h1>
                    </div>
                    <div className="relative h-auto lg:h-full hidden lg:block">
                        {/* <div className="h-[108px] hidden lg:block"></div>
                        <p className="text-[16px] md:text-[20px] text-white border-l-[2px] border-white pl-[10px] font-[200]">A leader in the alternative asset space, TPG manages $212 billion in assets through a principled focus on innovation.</p> */}
                        <a href="#overview" className="absolute bottom-[20px] right-[0] w-[40px] h-[40px] rounded-full border-[3px] border-white hidden lg:flex justify-center items-center cursor-pointer">
                            <ArrowDown />
                        </a>
                    </div>

                    <a href="#overview" className="w-[40px] h-[40px] rounded-full border-[3px] border-white flex lg:hidden justify-center items-center cursor-pointer">
                        <ArrowDown />
                    </a>
                </div>


            </div>
        </div>
    </section>
}