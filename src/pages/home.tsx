import { useState, ReactNode, useEffect } from "react"
import { Card } from "../components/Card"
import { Hero } from "../layouts/Hero"
import axios from "axios"
// import { Link } from "react-router-dom"
import { ConstructionEngineering } from "../assets/icons/sectors"
import { RealEstateIcon } from "../assets/icons/sectors"
import { TelecommunicationTechnology } from "../assets/icons/sectors"
import { AviationIcon } from "../assets/icons/sectors"
import { ManufacturingIcon } from "../assets/icons/sectors"
import { QuarryingMining } from "../assets/icons/sectors"
import { RetailBusinessesIcon } from "../assets/icons/sectors"
import { HealthcareIcon } from "../assets/icons/sectors"

type subContent = {
    name: string;
    contents: string[]
}

type CardProps = {
    color: string;
    direction: string;
    isReveal: boolean;
    title: string;
    subtitle: string;
    description: string;
    svg: ReactNode;
    subContent: subContent;
}

export const Home = () => {
    const [cards, setCards] = useState([
        {
            direction: '0',
            color: '#214A74',
            isReveal: false,
            title: 'Construction & Engineering Solutions',
            subtitle: '$67B AUM',
            description: 'Large-scale control-oriented private equity investing',
            svg: <ConstructionEngineering />,
            subContent: {
                name: 'Companies',
                contents: [
                    {
                        name: "arbico plc",
                        url: "/our-investments/arbico"
                    },
                    {
                        name: "nivafer engineering & construction limited",
                        url: "/our-investments/nivafer"
                    }
                ]
            }
        },
        {
            direction: '0',
            color: '#2F6871',
            isReveal: false,
            title: 'Real Estate',
            subtitle: '$24B AUM',
            description: 'Large-scale control-oriented private equity investing',
            svg: <RealEstateIcon />,
            subContent: {
                name: 'product',
                contents: [
                    {
                        name: "first investment development company",
                        url: "/our-investments/fidc"
                    }
                ]
            }
        },
        {
            direction: '0',
            color: '#BB9E5E',
            isReveal: false,
            title: 'Telecommunication & Technology Solutions',
            subtitle: '$18B AUM',
            description: 'Large-scale control-oriented private equity investing',
            svg: <TelecommunicationTechnology />,
            subContent: {
                name: 'product',
                contents: [
                    {
                        name: "biswal",
                        url: "/our-investments/biswal"
                    },
                    {
                        name: "afl networks",
                        url: "/our-investments/afl"
                    }
                ]
            }
        },
        {
            direction: '-100%',
            color: '#5E6D47',
            isReveal: false,
            title: 'Aviation & Infrastructure',
            subtitle: '$18B AUM',
            description: 'Large-scale control-oriented private equity investing',
            svg: <AviationIcon />,
            subContent: {
                name: 'product',
                contents: [
                    {
                        name: "asaba airport company",
                        url: "/our-investments/aac"
                    }
                ]
            }
        },

        {
            direction: '0',
            color: '#5B5329',
            isReveal: false,
            title: 'Manufacturing',
            subtitle: '$18B AUM',
            description: 'Large-scale control-oriented private equity investing',
            svg: <ManufacturingIcon />,
            subContent: {
                name: 'product',
                contents: [
                    {
                        name: "veenocks",
                        url: "/our-investments/veenocks"
                    },
                    {
                        name: "Ecojoinery",
                        url: "/our-investments/eco-joinery"
                    },
                    {
                        name: "OSC Garments",
                        url: "/our-investments/osc"
                    },
                ]
            }
        },

        {
            direction: '0',
            color: '#8B5329',
            isReveal: false,
            title: 'Quarrying & Mining',
            subtitle: '$18B AUM',
            description: 'Large-scale control-oriented private equity investing',
            svg: <QuarryingMining />,
            subContent: {
                name: 'product',
                contents: [
                    {
                        name: "prestige chen jun",
                        url: "/our-investments/prestige-chen-jun"
                    }
                ]
            }
        },

        {
            direction: '0',
            color: '#553B64',
            isReveal: false,
            title: 'Retail Business',
            subtitle: '$18B AUM',
            description: 'Large-scale control-oriented private equity investing',
            svg: <RetailBusinessesIcon />,
            subContent: {
                name: 'product',
                contents: [
                    {
                        name: "posmoreti",
                        url: "/our-investments/posmoreti"
                    },
                    {
                        name: "anker",
                        url: "/our-investments/anker"
                    }
                ]
            }
        },
        {
            direction: '-100%',
            color: '#2B5629',
            isReveal: false,
            title: 'Healthcare',
            subtitle: '$18B AUM',
            description: 'Large-scale control-oriented private equity investing',
            svg: <HealthcareIcon />,
            subContent: {
                name: 'product',
                contents: [
                    {
                        name: "utopian consulting llc",
                        url: "/our-investments/utopian"
                    }
                ]
            }
        },
    ])
    // const [isReveal, setIsReveal] = useState(false)
    const toggleCard = (clickedCard: CardProps) => {
        setCards((prevCards) => {
            return prevCards.map((card) => {
                if (card.title === clickedCard.title) {
                    // Toggle isReveal for the clicked card
                    return { ...card, isReveal: !card.isReveal };
                }
                return card;
            });
        });
    };

    // overview
    const [overview, setOverview] = useState({
        highlight: "",
        content: ""
    })

    const getOverview = async () => {
        const response = await axios.get("https://r28-backend.onrender.com/api/home/overview/66bdcca99be8fa17916b0a74")
        setOverview(response.data.overview)
    }

    // statistics
    const [statistics, setStatistics] = useState({
        sectors: "",
        portfolios: "",
        employees: "",
        operations: "",
    })

    const getStatistics = async () => {
        const response = await axios.get("https://r28-backend.onrender.com/api/home/stats/66bdcd3f9be8fa17916b0a84")
        setStatistics(response.data.stats)
    }

    // what we do
    const [whatWeDo, setWhatWeDo] = useState({
        highlight: "",
        content: ""
    })

    const getWhatWeDo = async () => {
        const response = await axios.get("https://r28-backend.onrender.com/api/home/what-we-do/66bdcdc89be8fa17916b0a92");
        setWhatWeDo(response.data.whatWeDo)
    }

    useEffect(() => {
        getOverview()
        getStatistics()
        getWhatWeDo()
    }, []);

    // scroll top
    useEffect(() => { window.scrollTo(0, 0) }, [])

    return <>
        <Hero />

        <div className="w-full h-auto py-[60px] md:py-[100px]" id="overview">
            <div className="max-w-[1280px] w-[90%] mx-auto">
                <span className="text-[14px] md:text-[16px]">Overview</span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[30px] lg:gap-[60px] mt-[10px]">
                    <p className="text-[30px] md:text-[40px] lg:text-[60px] font-[300] leading-[1.2] md:leading-[1.1]">{overview.highlight ? overview.highlight : "Focused on Impact"}</p>
                    <div>
                        <p className="text-[14px] md:text-[16px] font-[300] mb-[16px] leading-[1.6]">{overview.content ? <span dangerouslySetInnerHTML={{ __html: overview.content }} /> : <span>R28 is a dynamic private investment holding company based in Nigeria, dedicated to creating sustainable value through strategic investments across various industry sectors. Founded on the principles of entrepreneurship and a commitment to excellence, we leverage local market insights to identify and capitalise on investment opportunities that spur economic growth and deliver tangible results.
                            <br /><br />

                            Our commitment to innovation, sustainable growth, and collaboration underpins our diversified investment strategies across the construction, real estate, aviation, oil & gas, mining, telecommunications, and manufacturing sectors. We are committed to generating long-term value and positive socio-economic impact.</span>}
                        </p>

                        {/* <Link to="/overviews" className="flex items-center gap-[20px]">
                            <span className="w-[15px] h-[15px] rounded-full bg-blue-700"></span>
                            <span>Our portfolio companies</span>
                            <span>&gt;</span>
                        </Link> */}
                    </div>
                </div>
            </div>
        </div>

        <div className="stat py-[60px] md:py-[100px]">
            <div className="max-w-[1248px] w-[90%] mx-auto relative z-[2] grid grid-cols-1 gap-[50px] xl:gap-[100px]">
                <h1 className="text-white text-[40px] md:text-[50px] lg:text-[50px] leading-[1] font-[300]">R28 at a Glance</h1>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-[40px]">
                    <div className="">
                        <span className="block text-[50px] 2xl:text-[80px] text-white">{statistics.sectors ? statistics.sectors : "10"}</span>
                        <span className="text-gray-300 text-[14px] md:text-[16px]">Business Sectors</span>
                    </div>

                    <div className="border-l border-white pl-[20px] md:pl-[40px]">
                        <span className="block text-[50px] 2xl:text-[80px] text-white">{statistics.portfolios ? statistics.portfolios : "14"}</span>
                        <span className="text-gray-300 text-[14px] md:text-[16px]">
                            Active Portfolio Companies
                        </span>
                    </div>

                    <div className="border-l-none lg:border-l border-white pl-0 lg:pl-[40px]">
                        <span className="block text-[50px] 2xl:text-[80px] text-white">{statistics.employees ? statistics.employees : "2000+"}</span>
                        <span className="text-gray-300 text-[14px] md:text-[16px]">
                            Professional Employees
                        </span>
                    </div>

                    <div className="border-l border-white pl-[20px] md:pl-[40px]">
                        <span className="block text-[50px] 2xl:text-[80px] text-white">{statistics.operations ? statistics.operations : "100"}</span>
                        <span className="text-gray-300 text-[14px] md:text-[16px]">
                            Operation professionals with specialised sector knowledge and experience
                        </span>
                    </div>

                    {/* <div className="border-l border-white pl-[20px] md:pl-[40px]">
                        <span className="block text-[50px] lg:text-[80px] text-white">120+</span>
                        <span className="text-gray-300">
                            Directors combined years of professional experience
                        </span>
                    </div>

                    <div className="border-l border-white pl-[20px] md:pl-[40px]">
                        <span className="block text-[50px] lg:text-[80px] text-white">75%</span>
                        <span className="text-gray-300">
                            xxxxx
                        </span>
                    </div> */}
                </div>
            </div>
        </div>

        <div className="py-[60px] md:py-[100px]">
            <div className="max-w-[1248px] w-[90%] mx-auto">
                <span>What we do</span>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] md:gap-[30px] lg:gap-[50px] mb-[40px] lg:mb-[100px] mt-[10px]">
                    <p className="text-[30px] md:text-[40px] font-[300] leading-[1.2] md:leading-[1.1]">{whatWeDo.highlight ? whatWeDo.highlight : "Building Valuable and Sustainable Businesses"}</p>
                    <p className="text-[14px] md:text-[16px] font-[300] mb-[16px] leading-[1.6]" dangerouslySetInnerHTML={{ __html: whatWeDo.content ? whatWeDo.content : "Collectively, our companies represent our involvement across ten (10) sectors committed to delivering sustainable value for our stakeholders while enhancing societal impact." }} />
                </div>
                <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-4 gap-[30px]">

                    {cards.map((_card, i) => {
                        return <Card card={_card} toggleCard={toggleCard} key={i} />
                    })}
                </div>
            </div>
        </div>
    </>
}

// _color: '#043867',