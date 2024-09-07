import axios from "axios"
import { useState, useEffect } from "react"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Title = ({ title }: { title: string }) => {
    return <span className="text-[14px] uppercase text-primary font-[700] tracking-[1px] block mb-[20px]">{title}</span>
}

export const CMSHome = () => {
    // react quill
    const toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block'],
        ['link', 'image', 'video', 'formula'],
        [{ 'header': 1 }, { 'header': 2 }],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'list': 'check' }],
        [{ 'script': 'sub' }, { 'script': 'super' }],
        [{ 'indent': '-1' }, { 'indent': '+1' }],
        [{ 'direction': 'rtl' }],
        [{ 'size': ['small', false, 'large', 'huge'] }],
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'font': [] }],
        [{ 'align': [] }],
        ['clean']
    ];

    // hero text
    const [heroText, setHeroText] = useState("")

    const onchangeHeroText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setHeroText(e.target.value)
    }

    const getHeroText = async () => {
        const response = await axios.get("https://r28-backend.onrender.com/api/home/hero/hero-text/66bdcc209be8fa17916b0a6c")
        setHeroText(response.data.heroText.text);
    }

    const updateHeroText = async () => {
        await axios.patch("https://r28-backend.onrender.com/api/home/hero/hero-text/66bdcc209be8fa17916b0a6c", { text: heroText })

        getHeroText()
    }

    // overview
    const [overview, setOverview] = useState({
        highlight: "",
        content: ""
    })

    const getOverview = async () => {
        const response = await axios.get("https://r28-backend.onrender.com/api/home/overview/66bdcca99be8fa17916b0a74")
        setOverview(response.data.overview)
    }

    const onchangeOverviewHighlight = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setOverview({ ...overview, [e.target.name]: e.target.value })
    }

    const onchangeOverviewContent = (content: string) => {
        setOverview({ ...overview, content })
    }

    const updateOverview = async () => {
        await axios.patch("https://r28-backend.onrender.com/api/home/overview/66bdcca99be8fa17916b0a74", overview)
    }

    // statistics
    const [statistics, setStatistics] = useState({
        sectors: "",
        portfolios: "",
        employees: "",
        operations: "",
    })

    const getStatistics = async () => {
        const response = await axios.get("https://r28-backend.onrender.com/api/home/stats/66bdcd3f9be8fa17916b0a84")
        setStatistics(response.data.stats)
    }

    const onchangeStatistics = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setStatistics({ ...statistics, [e.target.name]: e.target.value })
    }

    const updateStatistics = async () => {
        await axios.patch("https://r28-backend.onrender.com/api/home/stats/66bdcd3f9be8fa17916b0a84", statistics)
    }

    // what we do
    const [whatWeDo, setWhatWeDo] = useState({
        highlight: "",
        content: ""
    })

    const getWhatWeDo = async () => {
        const response = await axios.get("https://r28-backend.onrender.com/api/home/what-we-do/66bdcdc89be8fa17916b0a92");
        setWhatWeDo(response.data.whatWeDo)
    }

    const onchangeWhatWeDoHighlight = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setWhatWeDo({ ...whatWeDo, [e.target.name]: e.target.value })
    }

    const onchangeWhatWeChangeContent = (content: string) => {
        setWhatWeDo({ ...whatWeDo, content })
    }

    const updateWhatWeDo = async () => {
        await axios.patch("https://r28-backend.onrender.com/api/home/what-we-do/66bdcdc89be8fa17916b0a92", whatWeDo)
    }

    // footer
    const [footer, setFooter] = useState({
        about: "",
        address: "",
        telephones: "",
        email: "",
    })

    const getFooter = async () => {
        const response = await axios.get("https://r28-backend.onrender.com/api/home/footer/66bdceaf9be8fa17916b0aa8")
        setFooter(response.data.footer)

    }

    const onchangeFooter = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFooter({ ...footer, [e.target.name]: e.target.value })
    }

    const onchangeFooterAddress = (content: string) => {
        setFooter({ ...footer, address: content })
    }

    const updateFooter = async () => {
        await axios.patch("https://r28-backend.onrender.com/api/home/footer/66bdceaf9be8fa17916b0aa8", footer)
    }

    useEffect(() => {
        getHeroText()
        getOverview()
        getStatistics()
        getWhatWeDo()
        getFooter()
    }, []);

    return <div className="p-[40px] flex flex-col gap-[40px]">
        <div>
            <Title title="home" />

            {/* hero */}
            <div className="mb-[20px]">
                <span className="block mb-[10px] text-zinc-800">Hero</span>
                <div className="max-w-[500px] flex flex-col gap-[10px]">
                    <textarea className="shadow border p-[10px] h-[70px]" value={heroText} onChange={onchangeHeroText}></textarea>
                    <button className="bg-primary text-white px-[20px] py-[10px]" onClick={updateHeroText}>Submit</button>
                </div>
            </div>

            {/* overview */}
            <div className="mb-[20px]">
                <span className="block mb-[10px] text-zinc-800">Overview</span>
                <div className="max-w-[500px] flex flex-col gap-[10px]">
                    <textarea name="highlight" className="shadow border p-[10px] h-[70px]" value={overview.highlight} onChange={onchangeOverviewHighlight}></textarea>
                    <ReactQuill
                        modules={{ toolbar: toolbarOptions }}
                        theme="snow"
                        value={overview.content}
                        onChange={onchangeOverviewContent}
                    />
                    <button className="bg-primary text-white px-[20px] py-[10px]" onClick={updateOverview}>Submit</button>
                </div>
            </div>

            {/* stat */}
            <div className="mb-[20px]">
                <span className="block mb-[10px] text-zinc-800">Statistics</span>
                <div className="max-w-[500px] flex flex-col gap-[10px]">
                    <textarea name="sectors" className="shadow border p-[10px] h-[70px]" value={statistics.sectors} onChange={onchangeStatistics}></textarea>

                    <textarea name="portfolios" className="shadow border p-[10px] h-[70px]" value={statistics.portfolios} onChange={onchangeStatistics}></textarea>

                    <textarea name="employees" className="shadow border p-[10px] h-[70px]" value={statistics.employees} onChange={onchangeStatistics}></textarea>

                    <textarea name="operations" className="shadow border p-[10px] h-[70px]" value={statistics.operations} onChange={onchangeStatistics}></textarea>

                    <button className="bg-primary text-white px-[20px] py-[10px]" onClick={updateStatistics}>Submit</button>
                </div>
            </div>

            {/* what we do */}
            <div className="mb-[20px]">
                <span className="block mb-[10px] text-zinc-800">What we do</span>
                <div className="max-w-[500px] flex flex-col gap-[10px]">
                    <textarea name="highlight" className="shadow border p-[10px] h-[70px]" value={whatWeDo.highlight} onChange={onchangeWhatWeDoHighlight}></textarea>
                    <ReactQuill
                        modules={{ toolbar: toolbarOptions }}
                        theme="snow"
                        value={whatWeDo.content}
                        onChange={onchangeWhatWeChangeContent}
                    />
                    <button className="bg-primary text-white px-[20px] py-[10px]" onClick={updateWhatWeDo}>Submit</button>
                </div>
            </div>

            {/* footer */}
            <div className="mb-[20px]">
                <span className="block mb-[10px] text-zinc-800">Footer</span>
                <div className="max-w-[500px] flex flex-col gap-[10px]">
                    <textarea name="about" className="shadow border p-[10px] h-[120px]" value={footer.about} onChange={onchangeFooter}></textarea>
                    <ReactQuill
                        modules={{ toolbar: toolbarOptions }}
                        theme="snow"
                        value={footer.address}
                        onChange={onchangeFooterAddress}
                    />
                    <textarea name="telephones" className="shadow border p-[10px] h-[70px]" value={footer.telephones} onChange={onchangeFooter}></textarea>
                    <textarea name="email" className="shadow border p-[10px] h-[70px]" value={footer.email} onChange={onchangeFooter}></textarea>
                    <button className="bg-primary text-white px-[20px] py-[10px]" onClick={updateFooter}>Submit</button>
                </div>
            </div>
        </div>


    </div>
}