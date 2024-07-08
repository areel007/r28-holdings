import { Link } from "react-router-dom";
import "./custom.css/flip.card.css"

interface IInvestmentCardProps {
    imgFront: string;
    imgBack: string;
    to: string;
    sectors: string;
}

export const InvestmentCard = ({ imgFront, sectors, to }: IInvestmentCardProps) => {
    return <Link to={to} className="investment__card rounded-md cursor-pointer">
        <div className="investment__card__inner">
            <div className="investment__card__front w-full h-full">
                <img src={imgFront} alt="r28 holdings" className="w-full h-full object-contain" />
            </div>
            <div className="investment__card__back w-full h-full absolute left-0 top-0 bg-[#381313] flex items-center p-[20px] justify-center">
                {/* <img src={imgBack} alt="r28 holdings" className="w-full h-full object-cover" /> */}
                <p className="text-white uppercase font-[400] text-[12px] text-center">{sectors}</p>
            </div>
        </div>
    </Link>
}