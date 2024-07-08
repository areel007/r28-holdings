import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import NewsImg from "../../assets/images/news&events.jpg"
import axios from "axios"

type TNews = {
    _id: string;
    title: string;
    subtitle: string;
    content: string;
    newsImgUrl: string;
    createdAt: Date;
}

export const News = () => {

    const [news, setNews] = useState<TNews[] | null>(null)
    const [searchedNews, setSearchedNews] = useState<TNews[] | null>(null)
    const [searchInput, setSearchInput] = useState<string | undefined>("")
    const [loading, setLoading] = useState(true)
    // const [images, setImages] = useState([])


    const fetchNews = async () => {
        try {
            const response = await axios.get('https://r28-api.onrender.com/api/news-and-events');
            setNews(response.data.newsAndEvents);
            setLoading(false)
        } catch (error) {
            console.error('Error fetching news:', error);
        }
    };


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value);
    }

    const handleSearch = () => {
        if (!searchInput) {
            // If search input is empty, show all news
            setSearchedNews(news);
        } else {
            // Filter news based on search input
            const filteredNews = news?.filter(_news =>
                _news.title.toLowerCase().includes(searchInput.toLowerCase()) ||
                _news.subtitle.toLowerCase().includes(searchInput.toLowerCase())
            );
            // Check if filteredNews is not undefined before setting state
            if (filteredNews !== undefined) {
                setSearchedNews(filteredNews);
            }
        }
    }

    useEffect(() => {
        fetchNews();
    }, []);


    useEffect(() => {
        handleSearch();
    }, [searchInput]);

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
            <div className="w-[90%] max-w-[1248px] mx-auto py-[40px] md:py-[100px]">
                <div className="p-[10px] border border-black max-w-[400px] w-full flex items-center gap-[5px] rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>

                    <input type="text" name="search" className="w-full outline-none" placeholder="search for news..." onChange={(e) => handleChange(e)} />
                </div>

                {loading ? <div className="mt-[40px] sm:mt-[50px] h-[400px]">
                    <p className="text-[18px] font-[500]">Loading news and events...</p>
                </div> : <div className="grid grid-cols-1 sm:grid-cols-2 mt-[40px] sm:mt-[50px] gap-[30px] md:gap-[50px] max-w-[1000px]">

                    {
                        !searchInput ? news?.map(_news => <Link to={`/news-and-events/${_news._id}`} key={_news._id} className="grid grid-cols-[1fr] gap-[20px] group">

                            <div className="w-full h-[289.109px] bg-[#f5f5f5] overflow-hidden">
                                <img src={`https://r28-api.onrender.com/${_news.newsImgUrl.split(",")[0]}`} alt="lagos arena" className="w-full h-full group-hover:scale-[1.3] ease-in-out transition" />
                            </div>
                            <div>
                                <h3 className="text-[20px] leading-[1.2] mb-[10px] font-[600]">{_news.title}</h3>
                                <p className="text-[12px] text-gray-600">{_news.subtitle} <br /> <b className="hover:underline">Read more</b></p>
                            </div>
                        </Link>) : searchedNews?.map(_news => <Link to={`/news-and-events/${_news._id}`} key={_news._id} className="grid grid-cols-[1fr] gap-[20px] group">

                            <div className="w-full h-full overflow-hidden">
                                <img src={`https://r28-api.onrender.com/${_news.newsImgUrl.split(",")[0]}`} alt="lagos arena" className="w-full h-full group-hover:scale-[1.3] ease-in-out transition" />
                            </div>
                            <div>
                                <h3 className="text-[20px] leading-[1.2] mb-[10px] font-[600]">{_news.title}</h3>
                                <p className="text-[12px] text-gray-600">{_news.subtitle} <br /> <b className="hover:underline">Read more</b></p>
                            </div>
                        </Link>)
                    }
                </div>}
            </div>
        </section>



    </>
}
