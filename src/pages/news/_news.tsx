import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Strip } from "../../components/Strip";
import NewsImg from "../../assets/images/news&events.jpg"

type TNews = {
    _id: string;
    title: string;
    subtitle: string;
    content: string;
    newsImgUrl: string;
    createdAt: Date;
}

export const SingleNews = () => {

    const { id } = useParams()
    const [news, setNews] = useState<TNews | null>(null)
    const [allNews, setAllNews] = useState<TNews[] | null>(null)
    const [imgs, setImg] = useState<string[] | undefined>(undefined)

    const fetchNewsAndEvents = async () => {
        try {
            const response = await axios.get(`https://r28-backend.onrender.com/api/news-and-events/${id}`)
            const newsData = response.data.newsAndEvents;
            setNews(newsData);
            if (newsData) {
                setImg(newsData.newsImgUrl.split(','));
            }
        } catch (error) {
            console.log(error);
        }
    }

    const fetchAllNews = async () => {
        try {
            const response = await axios.get('https://r28-backend.onrender.com/api/news-and-events')
            setAllNews(response.data.newsAndEvents)

        } catch (error) {
            console.log(error);
        }
    }



    useEffect(() => { fetchNewsAndEvents(), fetchAllNews() }, [])


    useEffect(() => window.scrollTo(0, 0), []);

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
            <div className={`w-[90%] max-w-[1248px] mx-auto ${imgs && imgs.length > 1 ? 'py-[50px] md:py-[100px]' : 'py-[50px] md:py-[100px]'}`}>
                <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] xl:grid-cols-[780px_1fr] gap-[30px] xl:gap-[100px]">
                    <div className="block lg:hidden">
                        {allNews && allNews?.length > 1 ? <p className="mb-[10px] text-[16px] font-[300]">Latest news and events</p> : null}
                        <aside>
                            {allNews && allNews.map(_allNews => {
                                return <a className="text-[14px] hover:underline" href={`/news-and-events/${_allNews._id}`} key={_allNews._id}>{_allNews.title === news?.title ? null : _allNews.title}</a>
                            })}
                        </aside>
                    </div>

                    <div>
                        <h1 className="text-[24px] md:text-[40px] leading-[1.2] mb-[25px] md:mb-[50px] font-[500] text-[#381313]">
                            {news?.title}
                        </h1>


                        <div className="w-full">
                            <img src={news?.newsImgUrl} alt="r28 news and events" className="w-full" />
                        </div>

                        <div className="text-[14px] md:text-[16px] font-[300] leading-[1.6] mt-[28px] md:mt-[42px] max-w-[780px]" dangerouslySetInnerHTML={{ __html: news ? news.content : "" }}></div>
                    </div>

                    <div className="hidden lg:block">
                        {allNews && allNews?.length > 1 ? <p className="mb-[10px] text-[16px] font-[300]">Latest news and events</p> : null}
                        <aside className="flex flex-col gap-[10px]">
                            <a className="text-[14px] hover:underline" href="/news-and-events/low-cup">
                                Arbico Plc and R28 Elevate Low Cup Experience at The Lagos International Polo Tournament
                            </a>

                            <a className="text-[14px] hover:underline" href="/news-and-events/lagos-arena">
                                Innovation at its Core: Arbico Plc Drives Design and Construction of Lagos Arena
                            </a>

                        </aside>
                    </div>
                </div>
            </div>
        </section>


        <Strip />

    </>
}
