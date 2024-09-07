import axios from "axios"
import { useState, useEffect } from "react"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Title = ({ title }: { title: string }) => {
    return <span className="text-[14px] uppercase text-primary font-[700] tracking-[1px] block mb-[20px]">{title}</span>
}


export const CMSStrategicAlliances = () => {
    // react quill setup
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

    const [strategicAlliances, setStrategicAlliances] = useState({
        highlight: "",
        content: ""
    })

    const getStrategicAlliances = async () => {
        const response = await axios.get("https://r28-backend.onrender.com/api/strategic-alliances/66bde4e5d05dbfe164810aad")

        setStrategicAlliances({
            ...strategicAlliances,
            highlight: response.data.strategicAlliances.highlight,
            content: response.data.strategicAlliances.content
        })

    }

    const onchangeSAHighlight = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setStrategicAlliances({
            ...strategicAlliances,
            [e.target.name]: e.target.value
        })
    }

    const onchangeSAContent = (content: string) => {
        setStrategicAlliances({
            ...strategicAlliances,
            content: content
        });
    };

    const updateStrategicAlliances = async () => {
        await axios.patch("https://r28-backend.onrender.com/api/strategic-alliances/66bde4e5d05dbfe164810aad", strategicAlliances)

        getStrategicAlliances()

    }

    // banner image
    const [strategicAlliancesBannerImgString, setStrategicAlliancesBannerImgString] = useState<string | ArrayBuffer | null>("")

    const onchangeSABannerImgString = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target

        if (files && files[0]) {
            const reader = new FileReader();
            reader.readAsDataURL(files[0]);
            reader.onload = () => {
                setStrategicAlliancesBannerImgString(reader.result);
            };
        }
    }

    const updateStrategicAlliancesBanner = async () => {
        await axios.patch("https://r28-backend.onrender.com/api/strategic-alliances/banner-image/66c7751898c061c9e0f3b40a", {
            bannerImgString: strategicAlliancesBannerImgString
        })
    }

    useEffect(() => {
        getStrategicAlliances()
    }, []);


    return <div className="p-[40px] flex flex-col gap-[40px]">
        <div>
            <Title title="Strategic Alliances" />

            <div className="grid gap-[20px] max-w-[500px]">

                <div className="flex flex-col gap-[10px]">
                    <span className="text-[12px] text-red-500">Max image size: 70KB, Image dimension: 1920px by 600px</span>
                    <div className="flex gap-[5px]">
                        <input type="file" className="p-[10px] border shadow w-full" onChange={onchangeSABannerImgString} />
                        <button className="p-[10px] bg-primary text-white" onClick={updateStrategicAlliancesBanner}>Submit</button>
                    </div>
                </div>

                <textarea name="highlight" onChange={onchangeSAHighlight} value={strategicAlliances.highlight} className="shadow border p-[10px] h-[150px]"></textarea>

                <div>
                    <ReactQuill
                        modules={{ toolbar: toolbarOptions }}
                        theme="snow"
                        value={strategicAlliances.content}
                        onChange={onchangeSAContent}
                    />
                </div>

                <button className="bg-primary p-[10px] text-white" onClick={updateStrategicAlliances}>Submit</button>
            </div>
        </div>
    </div>
}