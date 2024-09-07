import { useState, useEffect } from "react"
import OurInvestmentsImg from "../../assets/images/our-investments.jpg"
import { InvestmentCard } from "../../components/Investment.Card"
import ConstructionImg from "../../assets/images/construction-biz.jpg"
import AviationImg from "../../assets/images//aviation-biz.jpg"
import MiningImg from "../../assets/images/mining-biz.jpg"
import TelecomsImg from "../../assets/images/telecoms-biz.jpg"
import RealEstateImg from "../../assets/images/real-estate-biz.jpg"
import EngineeringImg from "../../assets/images/engineering-biz.jpg"

import ArbicoImg from "../../assets/images/arbico.jpg"
import BiswalImg from "../../assets/images/biswal.jpg"
import FIDCImg from "../../assets/images/fidc.jpg"
import AFLImg from "../../assets/images/afl.jpg"
import NivaferImg from "../../assets/images/nivafer.jpg"
import VeenocksImg from "../../assets/images/veenocks.jpg"
import LedcoImg from "../../assets/images/ledco.jpg"
// import OSCImg from "../../assets/images/osc.jpg"
import EcoImg from "../../assets/images/ecojoinery.jpg"
import UtopianImg from "../../assets/images/utopian.jpg"
// import PosmoretiImg from "../../assets/images/posmoreti.jpg"
import AnkerImg from "../../assets/images/anker.jpg"
import AACImg from "../../assets/images/aac.jpg"
import PrestigeImg from "../../assets/images/prestige.jpg"
import { Strip } from "../../components/Strip"

export const OurInvestments = () => {

    // const [investmentName, setInvestmentName] = useState("Portfolio companies")
    const [isInvestmentsDropdown, setIsInvestmentsDropdown] = useState(false)
    const [isCompaniesDropdown, setIsCompaniesDropdown] = useState(false)
    const [selectedSector, setSelectedSector] = useState("all sectors");
    const [selectedCompany, setSelectedCompany] = useState("our companies");
    const companies = [
        {
            name: "Arbico",
            to: "/our-investments/arbico",
            img: ArbicoImg,
            imgBack: ConstructionImg,
            sector: "construction & engineering solutions",
            textBack: "construction & engineering solutions"
        },
        {
            name: "nivafer",
            to: "/our-investments/nivafer",
            img: NivaferImg,
            imgBack: ConstructionImg,
            sector: "construction & engineering solutions",
            textBack: "construction & engineering solutions"
        },
        {
            name: "asaba airport company",
            to: "/our-investments/aac",
            img: AACImg,
            imgBack: AviationImg,
            sector: "aviation & infrastructure",
            textBack: "aviation"
        },
        {
            name: "veenocks",
            to: "/our-investments/veenocks",
            img: VeenocksImg,
            imgBack: ConstructionImg,
            sector: "manufacturing",
            textBack: "manufacturing"
        },
        {
            name: "Biswal",
            to: "/our-investments/biswal",
            img: BiswalImg,
            imgBack: TelecomsImg,
            sector: "telecommunication & technology solutions",
            textBack: "telecoms & technology solutions"
        },
        {
            name: "LEDCo",
            to: "/our-investments/ledco",
            img: LedcoImg,
            imgBack: TelecomsImg,
            sector: "aviation & infrastructure",
            textBack: "infrastructure"
        },
        {
            name: "FIDC",
            to: "/our-investments/fidc",
            img: FIDCImg,
            imgBack: RealEstateImg,
            sector: "real estate",
            textBack: "real estate"
        },
        {
            name: "anker support services",
            to: "/our-investments/anker",
            img: AnkerImg,
            imgBack: ConstructionImg,
            sector: "retail business",
            textBack: "retail business"
        },
        {
            name: "eco joinery",
            to: "/our-investments/eco-joinery",
            img: EcoImg,
            imgBack: ConstructionImg,
            sector: "manufacturing",
            textBack: "manufacturing"
        },
        {
            name: "prestige chen jun",
            to: "/our-investments/prestige-chen-jun",
            img: PrestigeImg,
            imgBack: MiningImg,
            sector: "mining",
            textBack: "mining"
        },
        {
            name: "utopian consulting LLC",
            to: "/our-investments/utopian",
            img: UtopianImg,
            imgBack: ConstructionImg,
            sector: "healthcare",
            textBack: "healthcare"
        },
        {
            name: "AFL networks",
            to: "/our-investments/afl",
            img: AFLImg,
            imgBack: TelecomsImg,
            sector: "telecommunication & technology solutions",
            textBack: "technology solutions"
        },

        // {
        //     name: "OSC garments",
        //     to: "/our-investments/osc",
        //     img: OSCImg,
        //     imgBack: ConstructionImg,
        //     sector: "manufacturing",
        //     textBack: "manufacturing"
        // },


        // {
        //     name: "posmoreti",
        //     to: "/our-investments/posmoreti",
        //     img: PosmoretiImg,
        //     imgBack: ConstructionImg,
        //     sector: "retail business",
        //     textBack: "retail business"
        // },


    ]
    const sectors = [
        {
            name: "construction & engineering solutions",
            to: "/our-investments/construction",
            img: ConstructionImg,
        },
        {
            name: "real estate",
            to: "/our-investments/real-estate",
            img: RealEstateImg,
        },
        {
            name: "aviation & infrastructure",
            to: "/our-investments/aviation",
            img: AviationImg,
        },
        {
            name: "telecommunication & technology solutions",
            to: "/our-investments/telecommunications",
            img: TelecomsImg,
        },
        {
            name: "retail business",
            to: "/our-investments/technology-and-solutions",
            img: EngineeringImg,
        },
        {
            name: "mining",
            to: "/our-investments/mining",
            img: MiningImg,
        },
        {
            name: "manufacturing",
            to: "/our-investments/mining",
            img: MiningImg,
        },
        {
            name: "healthcare",
            to: "/our-investments/mining",
            img: MiningImg,
        },
    ]
    const [cardSectors, setCardSectors] = useState(companies)


    // Sort
    const sortedSectors = sectors.sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();

        if (nameA < nameB) {
            return -1;
        }

        if (nameA > nameB) {
            return 1;
        }

        return 0;
    });



    // const sortedCompanies = companies.sort((a, b) => {
    //     const nameA = a.name.toLowerCase();
    //     const nameB = b.name.toLowerCase();

    //     if (nameA < nameB) {
    //         return -1;
    //     }

    //     if (nameA > nameB) {
    //         return 1;
    //     }

    //     return 0;
    // })


    const toggleInvestmentsDropdown = () => {
        setIsCompaniesDropdown(false)
        setIsInvestmentsDropdown(prev => !prev)
    }

    const toggleCompaniesDropdown = () => {
        setIsInvestmentsDropdown(false)
        setIsCompaniesDropdown(prev => !prev)
    }

    const handleSelectSector = (e: React.MouseEvent<HTMLLIElement>) => {
        const selectedSector = e.currentTarget.textContent || "";
        setSelectedSector(selectedSector);
        // setInvestmentName(selectedSector)

        if (selectedSector === 'all sector') {
            setCardSectors(companies);
        } else {
            const selectedSectorObject = companies.filter(sector => sector.sector === selectedSector);
            if (selectedSectorObject) {
                setCardSectors(selectedSectorObject);
            }
        }

        setIsInvestmentsDropdown(false);
    }

    const handleSelectCompany = (e: React.MouseEvent<HTMLLIElement>) => {
        const selectedCompany = e.currentTarget.textContent || "";
        setSelectedCompany(selectedCompany);
        // setCompanyName(selectedCompany)


        if (selectedCompany === 'all companies') {
            setCardSectors(companies)
        } else {
            const selectedSectorObject = companies.find(sector => sector.name === selectedCompany);
            if (selectedSectorObject) {
                setCardSectors([selectedSectorObject]);
            }
        }

        setIsCompaniesDropdown(false);
    }

    // logic to load the page from the top of the page
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return <>
        <div>
            <section className="h-[70vh] 2xl:h-[50vh] w-full hero">
                <img src={OurInvestmentsImg} alt="r28 holding" className="w-full h-full object-cover" />
                <div className="absolute inset-0">
                    <div className="w-[90%] max-w-[1248px] mx-auto h-full relative z-[2]">
                        <div className="h-full pt-[100px] pb-[20px] lg:pb-[100px] text-white flex flex-col justify-center">
                            {/* <p className="pl-0 lg:pl-[10px] uppercase text-[12px] md:text-[14px] tracking-[1px]">Our Investments</p> */}
                            <h1 className="text-[30px] xsm:text-[40px] lg:text-[60px] 3xl:text-[60px] leading-[1] font-[300] capitalize">Our companies</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="w-[90%] max-w-[1248px] mx-auto py-[40px] md:py-[100px]">
                    <h1 className="text-[32px] lg:text-[48px] font-[200] mb-[20px]">Filter</h1>
                    <div className="">
                        <div className="filter__grid">
                            <div className="relative">
                                <div className="flex justify-between items-center py-[10px] border-b border-gray-400 cursor-pointer" onClick={toggleInvestmentsDropdown}>
                                    <span className="capitalize">{selectedSector}</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>

                                </div>

                                <ul className={`bg-white shadow-md p-[20px] absolute top-full w-full z-[10] ${isInvestmentsDropdown ? 'block' : 'hidden'}`}>
                                    <li className="p-[10px] cursor-pointer capitalize text-[14px] hover:underline" onClick={handleSelectSector}>all sector</li>
                                    {sortedSectors.map(sector => <li key={sector.name} className="p-[10px] cursor-pointer capitalize text-[14px] hover:underline" onClick={handleSelectSector}>{sector.name}</li>)}
                                </ul>
                            </div>


                            <div className="relative">
                                <div className="flex justify-between items-center py-[10px] border-b border-gray-400 cursor-pointer" onClick={toggleCompaniesDropdown}>
                                    <span className="capitalize">{selectedCompany}</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>

                                </div>

                                <ul className={`bg-white shadow-md p-[20px] absolute top-full w-full z-[10] ${isCompaniesDropdown ? 'block' : 'hidden'}`}>
                                    <li className="p-[10px] cursor-pointer capitalize text-[14px] hover:underline" onClick={handleSelectCompany}>our companies</li>
                                    {companies.map(company => <li key={company.name} className="p-[10px] cursor-pointer capitalize text-[14px] hover:underline" onClick={handleSelectCompany}>{company.name}</li>)}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gray-100">
                <div className="w-[90%] max-w-[900px] mx-auto py-[40px] md:py-[100px]">
                    <div className="investment__card__grid">
                        {
                            cardSectors.map(sector => <InvestmentCard key={sector.name} imgFront={sector.img} imgBack={sector.imgBack} to={sector.to} sectors={sector.textBack} />)
                        }
                    </div>
                </div>
            </section>
        </div>

        <Strip />
    </>
}