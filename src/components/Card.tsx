import { HTMLAttributes, ReactNode } from "react";

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

interface ICardProps extends HTMLAttributes<HTMLDivElement> {
    card: CardProps;
    toggleCard: (e: any) => void;
}

export const Card = ({ card, toggleCard }: ICardProps) => {
    return (
        <div
            style={{ backgroundColor: card.color }}
            className={`${card.isReveal ? `w-[100%] lg:w-[200%] z-[1] ${card.direction === '-100%' ? 'reverse' : 'normal'} card` : 'w-[100%]'} transition-all min-h-[300px] md:min-h-[420px] p-[30px] rounded-[10px] shadow group relative flex flex-col md:flex-row gap-[40px] lg:gap-0`}
        >

            <div className={`w-full ${!card.isReveal ? 'w-full' : 'w-[50%]'} flex flex-col gap-[10px] text-white`}>
                {card.svg}

                <p className="text-[24px] font-[300]">{card.title}</p>

                <p className="text-[14px] font-[200]">{card.subtitle}</p>

                <p className="text-[14px] font-[200]">{card.description}</p>

                {!card.isReveal ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[30px] h-[30px] absolute bottom-[30px] right-[30px]" onClick={() => toggleCard(card)}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[30px] h-[30px] absolute bottom-[30px] right-[30px]" onClick={() => toggleCard(card)}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>}

            </div>
            <div className={`${card.isReveal ? 'block' : 'hidden'} w-full text-white border-l border-gray-400 pl-[30px]`}>
                <p className="mb-[20px] capitalize">{card.subContent.name}</p>
                <ul>
                    {
                        card.subContent.contents.map((_subcontent, i) => <li className="mb-[10px] last:mb-0 font-[200]" key={i}>{_subcontent}</li>)
                    }
                </ul>
            </div>

        </div>
    );
};
