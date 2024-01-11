import { useState, ReactNode } from "react"
import { Card } from "../components/Card"
import { Hero } from "../layouts/Hero"
import { Link } from "react-router-dom"
import { Growth } from "../components/Growth"

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
            title: 'Capital',
            subtitle: '$67B AUM',
            description: 'Large-scale control-oriented private equity investing',
            svg: <Growth />,
            subContent: {
                name: 'product',
                contents: ['hshsjsjjs', 'retsysusus', 'teteydydudu']
            }
        },
        {
            direction: '0',
            color: '#2F6871',
            isReveal: false,
            title: 'Growth',
            subtitle: '$24B AUM',
            description: 'Large-scale control-oriented private equity investing',
            svg: <Growth />,
            subContent: {
                name: 'product',
                contents: ['hshsjsjjs', 'retsysusus', 'teteydydudu']
            }
        },
        {
            direction: '-100%',
            color: '#5E6D47',
            isReveal: false,
            title: 'Impact',
            subtitle: '$18B AUM',
            description: 'Large-scale control-oriented private equity investing',
            svg: <Growth />,
            subContent: {
                name: 'product',
                contents: ['hshsjsjjs', 'retsysusus', 'teteydydudu']
            }
        },
        {
            direction: '0',
            color: '#BB9E5E',
            isReveal: false,
            title: 'Angelo Gordon',
            subtitle: '$18B AUM',
            description: 'Large-scale control-oriented private equity investing',
            svg: <Growth />,
            subContent: {
                name: 'product',
                contents: ['hshsjsjjs', 'retsysusus', 'teteydydudu']
            }
        },
        {
            direction: '0',
            color: '#553B64',
            isReveal: false,
            title: 'Real Estate',
            subtitle: '$18B AUM',
            description: 'Large-scale control-oriented private equity investing',
            svg: <Growth />,
            subContent: {
                name: 'product',
                contents: ['hshsjsjjs', 'retsysusus', 'teteydydudu']
            }
        },
        {
            direction: '-100%',
            color: '#8B5329',
            isReveal: false,
            title: 'Market Solutions',
            subtitle: '$18B AUM',
            description: 'Large-scale control-oriented private equity investing',
            svg: <Growth />,
            subContent: {
                name: 'product',
                contents: ['hshsjsjjs', 'retsysusus', 'teteydydudu']
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



    return <>
        <Hero />
        <div className="w-full h-auto py-[60px] md:py-[100px]" id="overview">
            <div className="max-w-[1280px] w-[90%] mx-auto">
                <span className="text-[14px] md:text-[16px]">Overview</span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] lg:gap-[60px]">
                    <p className="text-[30px] md:text-[40px] lg:text-[60px] font-[300] leading-[1]">Focussed on Impact</p>
                    <div>
                        <p className="text-[18px] md:text-[20px] font-[200] mb-[16px]">Through R28's family office roots, entrepreneurial heritage, and West Coast base, we have developed a differentiated approach to alternative investments based on innovation, organic growth, and a culture of openness and collaboration. Since our founding in 1992, we have developed a distinct position in the industry, with a broadly diversified set of investment strategies, including private equity, impact, credit, real estate, and market solutions.</p>

                        <Link to="/overviews" className="flex items-center gap-[20px]">
                            <span className="w-[15px] h-[15px] rounded-full bg-blue-700"></span>
                            <span>Our portfolio companies</span>
                            <span>&gt;</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="stat py-[60px] md:py-[100px]">
            <div className="max-w-[1248px] w-[90%] mx-auto relative z-[2] grid grid-cols-1 lg:grid-cols-[40%_1fr] gap-[50px] lg:gap-0">
                <h1 className="text-white text-[30px] md:text-[40px] lg:text-[60px] max-w-full lg:max-w-[245px] w-[100%] leading-[1] font-[300]">R28 at a Glance</h1>
                <div className="grid grid-cols-2 gap-[40px]">
                    <div className="border-l border-white pl-[20px] md:pl-[40px]">
                        <span className="block text-[50px] lg:text-[80px] text-white">$212B</span>
                        <span className="text-gray-300">AUM</span>
                    </div>

                    <div className="border-l border-white pl-[20px] md:pl-[40px]">
                        <span className="block text-[50px] lg:text-[80px] text-white">300+</span>
                        <span className="text-gray-300">
                            Active Portfolio Companies Headquartered in more than 30 countries
                        </span>
                    </div>

                    <div className="border-l border-white pl-[20px] md:pl-[40px]">
                        <span className="block text-[50px] lg:text-[80px] text-white">1800+</span>
                        <span className="text-gray-300">
                            Employees around the world
                        </span>
                    </div>

                    <div className="border-l border-white pl-[20px] md:pl-[40px]">
                        <span className="block text-[50px] lg:text-[80px] text-white">52</span>
                        <span className="text-gray-300">
                            Operations professionals with specialized sector knowledge and experience
                        </span>
                    </div>

                    <div className="border-l border-white pl-[20px] md:pl-[40px]">
                        <span className="block text-[50px] lg:text-[80px] text-white">400</span>
                        <span className="text-gray-300">
                            Diverse Directors appointed by our portfolio companies since 2017
                        </span>
                    </div>

                    <div className="border-l border-white pl-[20px] md:pl-[40px]">
                        <span className="block text-[50px] lg:text-[80px] text-white">75%</span>
                        <span className="text-gray-300">
                            of TPG’s investors are invested across three or more of our products
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div className="py-[60px] md:py-[100px]">
            <div className="max-w-[1248px] w-[90%] mx-auto">
                <span>What we do</span>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] lg:gap-[50px] mb-[40px] lg:mb-[100px]">
                    <p className="text-[30px] md:text-[40px] lg:text-[60px] font-[300] leading-[1] capitalize">Our platforms</p>
                    <p className="text-[20px] lg:text-[20px] font-[300]">
                        R28 puts capital to work through six platforms. Throughout our history, we have grown organically into opportunities we identified through deep thematic work in key sectors and geographies, and through strategic acquisitions to diversify our offerings.</p>
                </div>
                <div className="w-full max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-[30px]">

                    {cards.map((_card, i) => {
                        return <Card card={_card} toggleCard={toggleCard} key={i} />
                    })}
                </div>
            </div>
        </div>
    </>
}

// _color: '#043867',