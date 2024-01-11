type TMenu = {
    name: string;
    to: string;
    submenu?: TMenu[];
};

type TMobileMenu = {
    isMobileMenuOut: boolean;
    menu: TMenu[];
    step: number;
    handleChooseStep: (e?: TMenu[]) => void;
    submenu?: TMenu[];
}

export const MobileMenu = ({ isMobileMenuOut, menu, step, handleChooseStep, submenu }: TMobileMenu) => {
    return <div className={`w-full p-[20px] bg-white fixed top-[108px] z-[5] transition ease-in-out capitalize shadow ${isMobileMenuOut ? 'translate-x-[0]' : 'translate-x-[-100%]'}`}>
        {step === 1 ? <ul className="flex flex-col gap-[10px]">
            {
                menu.map((_menu, i) => {
                    return <li key={i}>
                        {
                            _menu.submenu ? <span className="flex justify-between items-center" onClick={() => handleChooseStep(_menu.submenu)}><span>{_menu.name}</span> <span>&gt;</span></span> : <a href={_menu.to}>{_menu.name}</a>
                        }
                    </li>
                })
            }
        </ul> : <ul className="flex flex-col gap-[10px]">
            {
                submenu?.map((_submenu, i) => {
                    return <li key={i} className="">
                        <a href={_submenu.to}>{_submenu.name}</a>
                    </li>
                })
            }
        </ul>}

    </div>
}