type THamburger = {
    scrolled: boolean;
}

export const Hamburger = ({ scrolled }: THamburger) => {
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 block lg:hidden ${scrolled ? 'text-black' : 'text-white'}`}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>

}


