import "./custom.css/flip.card.css"

interface ILeadershipCardProps {
    img: string;
    name: string;
    position: string;
    honor: string;
}

export const LeadershipCard = ({ img, name, position, honor }: ILeadershipCardProps) => {

    return <div className="relative cursor-pointer group leadership__card">
        <img src={img} alt="r28" className="w-full h-full transition ease-in-out group-hover:grayscale-[40]" />
        <div className="mt-[10px]">
            {name === 'Sir Kesington Adebukunola Adebutu' ? <p className="leading-[1.2]">
                {name} - <span className="text-[14px] font-[300]">{honor}</span>
            </p> : <p>{name}</p>}
            <p className="font-[300] text-[14px]">{position}</p>
        </div>

    </div>
}