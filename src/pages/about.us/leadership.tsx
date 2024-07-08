import LeadershipImg from "../../assets/images/leadership (1).jpg"
import { LeadershipCard } from "../../components/Leadership.Card"
// import Kessington from "../../assets/images/chief.webp"
import MrBisi from "../../assets/images/adebisi.jpg"
import Afolabi from "../../assets/images/afolabi.jpg"
import Eyo from "../../assets/images/eyo.jpg"
import { Link } from "react-router-dom"
import { Strip } from "../../components/Strip"

const Leaders = [
    // {
    //     img: Kessington,
    //     name: "Sir Kesington Adebukunola Adebutu",
    //     honor: "CON, KJW, FISM",
    //     position: "Chairman",
    //     to: "/about-us/leadership/sir-kesington",
    // },

    {
        img: MrBisi,
        name: "Adebisi Adebutu",
        position: "Group President / CEO",
        honor: "",
        to: "/about-us/leadership/adebisi"
    },
    {
        img: Afolabi,
        name: "Afolabi Aiyeola",
        position: "Group Executive Director",
        honor: "",
        to: "/about-us/leadership/afolabi"
    },
    {
        img: Eyo,
        name: "Eyo Asuquo",
        position: "Group Executive Director",
        honor: "",
        to: "/about-us/leadership/eyo"
    },
]

export const Leadership = () => {
    return <>
        <section className="h-[70vh] 2xl:h-[50vh] w-full hero">
            <img src={LeadershipImg} alt="r28 holding" className="w-full h-full object-cover" />
            <div className="absolute inset-0">
                <div className="w-[90%] max-w-[1248px] mx-auto h-full relative z-[2]">
                    <div className="h-full pt-[100px] pb-[20px] lg:pb-[100px] text-white flex flex-col justify-center">
                        {/* <p className="pl-0 lg:pl-[10px] uppercase text-[12px] md:text-[14px] tracking-[1px]">About us</p> */}
                        <h1 className="text-[30px] xsm:text-[40px] lg:text-[50px] 3xl:text-[50px] leading-[1] font-[300]">Leading with Purpose</h1>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="w-[90%] max-w-[1100px] mx-auto py-[40px] md:py-[100px]">
                <div className="max-w-[818px] w-full mx-auto">
                    <h3 className="text-[16px] md:text-[18px] leading-[1.4] mb-[50px] font-[200] text-[#381313]">At the helm, our Board of Directors brings diverse expertise and strategic guidance, ensuring sound governance and long-term sustainability. Complementing their vision, our dynamic Management team drives operational excellence, innovation, and growth.</h3>
                </div>

                {/* <div className="mb-[40px] md:mb-[70px] flex justify-center gap-[10px] md:gap-[20px]">
                    <button className="p-[10px_20px] bg-gray-100 border-b-[3px] border-[#381313] text-[14px] md:text-[16px]">Board of Directors</button>
                    <button className="p-[10px_20px] bg-gray-100 text-[14px] md:text-[16px]">Management Team</button>
                </div> */}

                <div className="leadership__card__grid">
                    {Leaders.map(leader => <Link to={leader.to} key={leader.name} ><LeadershipCard img={leader.img} name={leader.name} position={leader.position} honor={leader.honor} /></Link>)}
                </div>

            </div>
        </section>

        <Strip />
    </>
}