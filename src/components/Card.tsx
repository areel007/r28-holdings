import { HTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";

type Contentt = {
    name: string;
    url: string;
}

type subContent = {
    name: string;
    contents: Contentt[]
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

interface ICardProps extends HTMLAttributes<HTMLDivElement> {
    card: CardProps;
    toggleCard: (e: any) => void;
}

export const Card = ({ card, toggleCard }: ICardProps) => {
    return (
        <div
            style={{ backgroundColor: card.color, height: '100%' }}
            className={`${card.isReveal ? `w-[100%] lg:w-[200%] z-[1] ${card.direction === '-100%' ? 'reverse' : 'normal'} card` : 'w-[100%]'} transition-all min-h-[300px] md:min-h-[340px] p-[30px] rounded-[10px] shadow group relative flex flex-col md:flex-row gap-[40px] lg:gap-0`}
        >

            <div className={`w-full ${!card.isReveal ? 'w-full' : 'w-[50%] pr-[20px]'} flex flex-col gap-[20px] text-white`}>
                {card.svg}

                <p className="text-[18px] md:text-[22px] 2xl:text-[22px] font-[300] leading-[1.2]">{card.title}</p>

                {/* <p className="text-[12px] md:text-[14px] font-[200]">{card.subtitle}</p> */}

                {/* <p className="text-[12px] md:text-[14px] font-[200]">{card.description}</p> */}

                {!card.isReveal ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[30px] h-[30px] absolute bottom-[30px] right-[30px] cursor-pointer" onClick={() => toggleCard(card)}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                    : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[30px] h-[30px] absolute bottom-[30px] right-[30px]" onClick={() => toggleCard(card)}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>}


            </div>
            <div className={`${card.isReveal ? 'block' : 'hidden'} w-full text-white border-l border-gray-400 pl-[30px]`}>
                <div className="h-[20px]"></div>
                <p className="mb-[15px] uppercase font-[400]">{card.subContent.contents.length > 1 ? 'companies' : 'company'}</p>
                <ul>
                    {
                        card.subContent.contents.map((_subcontent, i) => <li className="mb-[10px] last:mb-0 font-[200] text-[14px] hover:underline" key={i}>
                            <Link to={_subcontent.url} className="uppercase">{_subcontent.name}</Link>
                        </li>)
                    }
                </ul>
            </div>

        </div>
    );
};
