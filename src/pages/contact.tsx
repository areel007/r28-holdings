import ContactImg from "../assets/images/contact-us.jpg"
import { useEffect } from "react"
import { Strip } from "../components/Strip"

export const Contact = () => {

    // scroll top
    useEffect(() => { window.scrollTo(0, 0) }, [])

    return <>
        <section className="h-[70vh] 2xl:h-[50vh] w-full hero">
            <img src={ContactImg} alt="r28 holding" className="w-full h-full object-cover" />
            <div className="absolute inset-0">
                <div className="w-[90%] max-w-[1248px] mx-auto h-full relative z-[2]">
                    <div className="h-full pt-[100px] pb-[20px] lg:pb-[100px] text-white flex flex-col justify-center">
                        {/* <p className="pl-0 lg:pl-[10px]">Contact</p> */}
                        <h1 className="text-[30px] xsm:text-[40px] lg:text-[60px] 3xl:text-[60px] leading-[1] font-[300]">Contact</h1>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="w-[90%] max-w-[950px] mx-auto h-full relative z-[2] grid grid-cols-1 md:grid-cols-2 gap-[30px] md:gap-[60px] py-[40px] md:py-[100px]">

                <div>
                    <p className="mb-[10px] text-[20px] text-[#381313] font-[300]">You can find us here.</p>
                    <p className="font-[200]">
                        <span className="font-[400] text-[#381313]">Corporate HQ</span> <br />
                        <span>54A Adeola Odeku Street, <br />Victoria Island, <br />Lagos, Nigeria</span> <br />
                        <br />
                        <span className="font-[400] text-[#381313]">Phone</span> <br />
                        <span>+234 906 245 7050, +234 906 245 7051</span> <br /><br />
                        <span className="font-[400] text-[#381313]">Email</span><br />
                        <span>info@r28.ng</span>
                    </p>
                </div>

                <form action="" className="grid grid-cols-1 gap-[10px]">
                    <input type="text" className="p-[10px] border border-gray-300" placeholder="Your name" />
                    <input type="text" className="p-[10px] border border-gray-300" placeholder="Your email" />
                    <input type="text" className="p-[10px] border border-gray-300" placeholder="Company" />
                    <input type="text" className="p-[10px] border border-gray-300" placeholder="Phone" />
                    <textarea className="p-[10px] border border-gray-300 resize-none" placeholder="message"></textarea>
                    <button className="w-[min-content] whitespace-nowrap p-[10px_20px] bg-[#381313] text-white">Send message</button>
                </form>
            </div>
        </section>

        <section className="h-[300px] md:h-[500px] my-[3px] max-w-[1000px] w-[90%] mx-auto mb-[40px]">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7288832546024!2d3.419875075229059!3d6.428866024255366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf52d848df33b%3A0xbb9a68e21c7b8c7f!2s54A%20Adeola%20Odeku%20St%2C%20beside%20MTN%2C%20Victoria%20Island%2C%20Lagos%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1707933431059!5m2!1sen!2sng" width="600" height="450" style={{ border: 0, width: '100%', height: '100%' }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </section>

        <Strip />

    </>
}