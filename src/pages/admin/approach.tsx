import axios from "axios"
import { useState, useEffect } from "react"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Title = ({ title }: { title: string }) => {
    return <span className="text-[14px] uppercase text-primary font-[700] tracking-[1px] block mb-[20px]">{title}</span>
}

export const CMSApproach = () => {
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

    const [approach, setApproach] = useState({
        highlight: '',
        content: ''
    })

    const getApproach = async () => {
        const response = await axios.get("https://r28-backend.onrender.com/api/approach/66bde43cd05dbfe164810a94")

        setApproach({
            ...approach,
            highlight: response.data.approach.highlight,
            content: response.data.approach.content
        })

    }

    const onchangeApproachHighlight = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setApproach({
            ...approach,
            [e.target.name]: e.target.value
        })
    }

    const onchangeApproachContent = (content: string) => {
        setApproach({
            ...approach,
            content: content
        });
    };

    const updateApproach = () => {
        axios.patch("https://r28-backend.onrender.com/api/approach/66bde43cd05dbfe164810a94", approach)
        getApproach()
    }

    // banner
    const [approachBannerImgString, setApproachBannerImgString] = useState<string | ArrayBuffer | null>("")

    const onchangeCVBannerImgString = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target

        if (files && files[0]) {
            const reader = new FileReader();
            reader.readAsDataURL(files[0]);
            reader.onload = () => {
                setApproachBannerImgString(reader.result);
            };
        }
    }

    const updateApproachBannerString = async () => {
        await axios.patch("https://r28-backend.onrender.com/api/approach/banner-image/66c75a312fc76fb25cf2ca50", {
            bannerImgString: approachBannerImgString
        })
    }

    useEffect(() => {
        getApproach()
    }, []);


    return <div className="p-[40px] flex flex-col gap-[40px]">
        <div>
            <Title title="Approach" />

            <div className="grid gap-[20px] max-w-[500px]">

                <div className="flex flex-col gap-[10px]">
                    <span className="text-[12px] text-red-500">Max image size: 70KB, Image dimension: 1920px by 600px</span>
                    <div className="flex gap-[5px]">
                        <input type="file" className="p-[10px] border shadow w-full" onChange={onchangeCVBannerImgString} />
                        <button className="p-[10px] bg-primary text-white" onClick={updateApproachBannerString}>Submit</button>
                    </div>
                </div>

                <textarea name="highlight" onChange={onchangeApproachHighlight} value={approach.highlight} className="shadow border p-[10px] h-[150px]"></textarea>

                <div>
                    <ReactQuill
                        modules={{ toolbar: toolbarOptions }}
                        theme="snow"
                        value={approach.content}
                        onChange={onchangeApproachContent}
                    />
                </div>

                <button className="bg-primary p-[10px] text-white" onClick={updateApproach}>Submit</button>
            </div>
        </div>
    </div>
}