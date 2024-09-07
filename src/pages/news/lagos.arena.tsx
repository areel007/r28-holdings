import { useEffect } from "react"
import NewsImg from "../../assets/images/news&events.jpg"
import LagosArenaImg from "../../assets/images/lagoarena.jpg"
// import galleryImg1 from "../../assets/images/events/polo1.jpg"
// import galleryImg2 from "../../assets/images/events/polo2.jpg"
// import galleryImg3 from "../../assets/images/events/polo3.jpg"
// import galleryImg4 from "../../assets/images/events/polo4.jpg"
// import galleryImg5 from "../../assets/images/events/polo5.jpg"
// import galleryImg6 from "../../assets/images/events/polo6.jpg"
// import galleryImg7 from "../../assets/images/events/polo7.jpg"
// import galleryImg8 from "../../assets/images/events/polo8.jpg"
// import galleryImg9 from "../../assets/images/events/polo9.jpg"
import { Strip } from "../../components/Strip"

export const LagosArena = () => {
    // const imgs = [galleryImg1, galleryImg2, galleryImg3, galleryImg4, galleryImg5, galleryImg6, galleryImg7, galleryImg8, galleryImg9]
    // const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

    // const handleImageClick = (index: number) => {
    //     setSelectedImageIndex(index);
    // };

    // const handleCloseImage = () => {
    //     setSelectedImageIndex(null);
    // };

    // const handleNextImage = () => {
    //     setSelectedImageIndex((prevIndex: number | null) =>
    //         prevIndex === null ? 0 : prevIndex === imgs.length - 1 ? 0 : prevIndex + 1
    //     );
    // };

    // const handlePrevImage = () => {
    //     setSelectedImageIndex((prevIndex: number | null) =>
    //         prevIndex === null ? imgs.length - 1 : prevIndex === 0 ? imgs.length - 1 : prevIndex - 1
    //     );
    // };

    useEffect(() => window.scrollTo(0, 0))

    return <>
        <section className="h-[70vh] 2xl:h-[50vh] w-full hero">
            <img src={NewsImg} alt="r28 holding" className="w-full h-full object-cover" />
            <div className="absolute inset-0">
                <div className="w-[90%] max-w-[1248px] mx-auto h-full relative z-[2]">
                    <div className="h-full pt-[100px] pb-[20px] lg:pb-[100px] text-white flex flex-col justify-center">
                        {/* <p className="pl-0 lg:pl-[10px] uppercase text-[12px] md:text-[14px] tracking-[1px]">About us</p> */}
                        <h1 className="text-[30px] xsm:text-[40px] lg:text-[50px] 3xl:text-[50px] leading-[1] font-[300]">News and Events</h1>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="w-[90%] max-w-[1248px] mx-auto py-[40px] md:py-[100px] grid grid-cols-1 lg:grid-cols-[2fr_1fr] xl:grid-cols-[780px_1fr] gap-[30px] xl:gap-[100px]">
                <div>
                    <h1 className="text-[24px] md:text-[40px] leading-[1.2] mb-[25px] md:mb-[50px] font-[500] text-[#381313] max-w-[780px]">Innovation at its Core: Arbico Plc Drives Design and Construction of Lagos Arena</h1>


                    <img src={LagosArenaImg} alt="lagos arena" />

                    <div className="mt-[28px] md:mt-[42px] max-w-[780px]">
                        <p className="leading-[1.6] text-[14px] md:text-[16px] font-[300] text-gray-700">
                            The Lagos Arena, boasting a staggering capacity of 12,000, emerges as not just a venue but an immersive experience, poised to host a diverse array of events ranging from music galas and electrifying sports showdowns to cultural spectacles. This architectural marvel stands as a testament to Arbico's dedication to quality and service, as the Engineering, Procurement, and Construction (EPC) contractor, who oversaw the design, procurement, and construction of the Lagos Arena.
                            <br /><br />
                            From groundbreaking to the final flourish, Arbico's construction prowess transformed blueprints into reality, culminating in the majestic Lagos Arena standing tall and ready to welcome the world. Beyond its physical presence, the arena holds profound significance for Nigeria's creative economy, catalyzing job creation, investments, and opportunities within the community.
                            <br /><br />
                            With Nigeria's vibrant music scene and a rapidly growing population exceeding 220 million, the $100 million Lagos Arena emerges as a groundbreaking initiative, poised to become the country's premier destination for live entertainment. Designed to host a diverse range of events, from global music performances to basketball games and UFC fights, the arena represents a significant milestone in Nigeria's cultural evolution.
                            <br /><br />
                            Anticipating over 200 events annually, the Arena aims to position itself as Africa's leading entertainment destination, offering a dedicated space for both local and international artists to showcase their talents. This endeavour not only propels the expansion of Nigeria's music, sports, and entertainment sectors but also creates over 1500 direct and indirect job opportunities, fostering economic growth and development.
                            <br /><br />
                            The groundbreaking ceremony symbolizes a new era in Nigeria's entertainment landscape, promising to elevate the country's cultural prominence on the global stage. As construction commences on this transformative project, the consortium's vision of a vibrant, dynamic arena in the heart of Lagos takes shape, laying the foundation for a future filled with excitement, creativity, and boundless possibilities.


                        </p>
                    </div>
                </div>

                <div>
                    <p className="mb-[10px] text-[16px] font-[300]">Latest news and events</p>
                    <a className="text-[14px] hover:underline" href="/news-and-events/low-cup">
                        Arbico Plc and R28 Elevate Low Cup Experience at The Lagos International Polo Tournament
                    </a>
                </div>
            </div>
        </section>


        {/* <section>
            <div className="w-[90%] max-w-[780px] mx-auto py-[20px] md:py-[50px]">
                <div className="enlarged__img__grid">
                    {
                        imgs.map((_img, index) => <img src={_img} alt="r28" key={_img} className="w-full cursor-pointer hover:grayscale-[10]" onClick={() => handleImageClick(index)} />)
                    }
                </div>
            </div>

            {selectedImageIndex !== null && (
                <>
                    <div className={`${imgs[selectedImageIndex] ? 'block' : 'hidden'}`}>
                        <div className="fixed inset-0 bg-[#fff] z-[99] opacity-[.9]"></div>
                        <div className="fixed inset-0 z-[100] h-full">
                            <span className="absolute z-[101] top-[50%] translate-y-[-50%] left-[20px] text-[24px] cursor-pointer" onClick={handlePrevImage}>&lt;</span>
                            <span className="absolute z-[101] top-[50%] translate-y-[-50%] right-[20px] text-[24px] cursor-pointer" onClick={handleNextImage}>&gt;</span>
                            <div className="flex justify-center items-center h-full relative">

                                <div className="relative w-[70%] xl:w-[800px] 2xl:w-[1000px] mx-auto">
                                    <span className="absolute right-[10px] top-[-35px] text-[28px] md:text-[40px] leading-[1] cursor-pointer text-red-500" onClick={handleCloseImage}>
                                        &times;
                                    </span>
                                    <img src={imgs[selectedImageIndex]} className="w-full" alt="Enlarged Image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </section> */}

        <Strip />

    </>
}