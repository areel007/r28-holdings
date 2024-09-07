import { useState, useEffect } from "react"
import NewsImg from "../../assets/images/news&events.jpg"
import galleryImg1 from "../../assets/images/events/polo1.jpg"
import galleryImg2 from "../../assets/images/events/polo2.jpg"
import galleryImg3 from "../../assets/images/events/polo3.jpg"
import galleryImg4 from "../../assets/images/events/polo4.jpg"
import galleryImg5 from "../../assets/images/events/polo5.jpg"
import galleryImg6 from "../../assets/images/events/polo6.jpg"
import galleryImg7 from "../../assets/images/events/polo7.jpg"
import galleryImg8 from "../../assets/images/events/polo8.jpg"
import galleryImg9 from "../../assets/images/events/polo9.jpg"
import { Strip } from "../../components/Strip"

export const LowCup = () => {
    const imgs = [galleryImg1, galleryImg2, galleryImg3, galleryImg4, galleryImg5, galleryImg6, galleryImg7, galleryImg8, galleryImg9]
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

    const handleImageClick = (index: number) => {
        setSelectedImageIndex(index);
    };

    const handleCloseImage = () => {
        setSelectedImageIndex(null);
    };

    const handleNextImage = () => {
        setSelectedImageIndex((prevIndex: number | null) =>
            prevIndex === null ? 0 : prevIndex === imgs.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrevImage = () => {
        setSelectedImageIndex((prevIndex: number | null) =>
            prevIndex === null ? imgs.length - 1 : prevIndex === 0 ? imgs.length - 1 : prevIndex - 1
        );
    };

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
                    <h1 className="text-[24px] md:text-[40px] leading-[1.2] mb-[25px] md:mb-[50px] font-[500] text-[#381313] max-w-[780px]">
                        Arbico Plc and R28 Elevate Low Cup Experience at The Lagos International Polo Tournament
                    </h1>


                    <div className="w-full h-[220px] md:h-[400px] bg-gray-500 max-w-[780px]">
                        <img src={galleryImg1} alt="lagos arena" className="w-full h-full object-cover" />
                    </div>

                    <div className="mt-[28px] md:mt-[42px] max-w-[780px]">
                        <p className="leading-[1.6] text-[14px] md:text-[16px] font-[300] text-gray-700">
                            The Lagos International Polo Tournament, amidst the vibrant ambience of horse hooves thundering across the turf and the spirited cheers of spectators, witnessed a memorable collaboration between Arbico Plc and the parent company, R28 Limited, as they co-sponsored the prestigious Low Cup.
                            <br /><br />
                            Held at the Lagos Polo Club, the event fused polo excellence, sociability, and relaxed sophistication. The tournament served as a perfect blend of local enthusiasts, seasoned professionals, and renowned polo players and enthusiasts from all over the world. The tournament not only served as a hub for showcasing participants' prowess but also strengthened existing bonds and fostered a sense of camaraderie among lovers of the polo sport.
                            <br /><br />
                            With Arbico Plc's longstanding dedication to promoting sportsmanship and R28's commitment to excellence, this partnership brought an added dimension to the tournament, elevating the experience for players and attendees alike. The Low Cup garnered heightened attention as a result of this collaboration.
                            <br /><br />
                            Among the different cups contested during the tournament, the Low Cup stood out as a delightful and leisurely affair. Teams with handicaps ranging from +2 to +7 competed fiercely, yet with a sense of brotherhood that exemplified the spirit of the sport. The final showdown on February 11th, 2024, saw Lagos A+/A1 & Lagos MSD Baby Bear emerge as the contenders, with Lagos A+/A One clinching victory in Arbico's Low Cup. Spanning from February 6th to the 11th, the tournament concluded with an exciting presentation ceremony where Mr. Eyo Asuquo and Mr. Afolabi Aiyeola, Executive Directors of Arbico Plc and R28 Limited respectively, bestowed the cup upon the deserving winners.
                            <br /><br />
                            Arbico Plc and R28 curated an unforgettable experience for the Low Cup, transcending mere competition to create an atmosphere of relaxation and enjoyment. Spectators lounged in elegant marquees, sipping chilled beverages and feasting on luscious dishes. Within the exclusive VIP lounge, hosted by Arbico Plc and R28, dignitaries, socialites, and polo enthusiasts convened alongside representatives from various R28 subsidiary companies and their guests. Notable figures such as Mr. Chuks Wornu, Managing Director of Nivafer Engineering, Mr. Richard Shittu, CEO of Outposts Investment Limited and owner, Koko Beach Resort, and Mr. Christophe Penninck, Managing Director of Asaba Airport Company, graced the gathering, fostering business connections and nurturing friendships.
                            <br /><br />
                            As the sun set over the Lagos Polo Club, casting a golden glow over the proceedings, participants and spectators alike departed with cherished memories of an unforgettable event. The Lagos International Polo Tournament, with the support of Arbico Plc and R28, had once again affirmed its status as a premier destination for polo enthusiasts and aficionados of leisure alike.


                        </p>
                    </div>
                </div>

                <div>
                    <p className="mb-[10px] text-[16px] font-[300]">Latest news and events</p>
                    <a className="text-[14px] hover:underline" href="/news-and-events/lagos-arena">
                        Innovation at its Core: Arbico Plc Drives Design and Construction of Lagos Arena
                    </a>
                </div>
            </div>
        </section >


        <section>
            <div className="w-[90%] max-w-[1248px] mx-auto py-[20px] md:py-[50px]">
                <div className="enlarged__img__grid max-w-[780px]">
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
        </section>

        <Strip />

    </>
}