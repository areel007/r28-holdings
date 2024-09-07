import axios from "axios"
import { useState, useEffect } from "react"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Title = ({ title }: { title: string }) => {
    return <span className="text-[14px] uppercase text-primary font-[700] tracking-[1px] block mb-[20px]">{title}</span>
}

export const CMSAboutUs = () => {
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

    const [whoWeAre, setWhoWeAre] = useState({
        highlight: "",
        content: ""
    })

    const [coreValues, setCoreValues] = useState({
        integrity: "",
        excellence: "",
        innovation: "",
    })

    const onchangeCoreValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCoreValues({
            ...coreValues,
            [e.target.name]: e.target.value
        })
    }

    const getWhoWeAre = async () => {

        const response = await axios.get("https://r28-backend.onrender.com/api/about/who-we-are/66bde252d05dbfe164810a6c")

        setWhoWeAre({
            ...whoWeAre,
            highlight: response.data.whoWeAre.highlight,
            content: response.data.whoWeAre.content
        })

    }

    const onchangeWWAHighlight = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setWhoWeAre({
            ...whoWeAre,
            [e.target.name]: e.target.value
        })
    }

    const onchangeWWAContent = (content: string) => {
        setWhoWeAre({
            ...whoWeAre,
            content: content
        });
    };

    const updateWhoWeAre = async () => {
        await axios.patch("https://r28-backend.onrender.com/api/about/who-we-are/66bde252d05dbfe164810a6c", whoWeAre)
        getWhoWeAre()
    }

    const getCoreValues = async () => {
        const response = await axios.get("https://r28-backend.onrender.com/api/about/core-values/66bde3a3d05dbfe164810a76")

        setCoreValues(response.data.coreValues)

    }

    const updateCoreValues = async () => {
        await axios.patch("https://r28-backend.onrender.com/api/about/core-values/66bde3a3d05dbfe164810a76", coreValues)
        getCoreValues()
    }

    // who we are - banners
    const [whoWeAreBannerString, setWhoWeAreBannerString] = useState<string | ArrayBuffer | null>("")

    const onchangeWWABannerImgString = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target

        if (files && files[0]) {
            const reader = new FileReader();
            reader.readAsDataURL(files[0]);
            reader.onload = () => {
                setWhoWeAreBannerString(reader.result);
            };
        }
    }

    const updateWhoWeAreBannerString = async () => {

        axios.patch("https://r28-backend.onrender.com/api/about/who-we-are/banner-image/66c74e07ad69f5b45fa7c6b8", { bannerImgString: whoWeAreBannerString })
    }

    // core values - banners
    const [coreValuesBannerString, setCoreValuesBannerString] = useState<string | ArrayBuffer | null>("")

    const onchangeCVBannerImgString = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target

        if (files && files[0]) {
            const reader = new FileReader();
            reader.readAsDataURL(files[0]);
            reader.onload = () => {
                setCoreValuesBannerString(reader.result);
            };
        }
    }

    const updateCoreValuesBannerString = async () => {
        axios.patch("https://r28-backend.onrender.com/api/about/core-values/banner-image/66c7531ead69f5b45fa7c721", { bannerImgString: coreValuesBannerString })
    }

    useEffect(() => {
        getWhoWeAre()
        getCoreValues()
    }, []);

    return <div className="p-[40px] flex flex-col gap-[40px]">
        <div>
            <Title title="who we are" />

            <div className="grid gap-[20px] max-w-[500px]">
                <div className="flex flex-col gap-[10px]">
                    <span className="text-[12px] text-red-500">Max image size: 70KB, Image dimension: 1920px by 600px</span>
                    <div className="flex gap-[5px]">
                        <input type="file" className="p-[10px] border shadow w-full" onChange={onchangeWWABannerImgString} />
                        <button className="p-[10px] bg-primary text-white" onClick={updateWhoWeAreBannerString}>Submit</button>
                    </div>
                </div>

                <textarea name="highlight" onChange={onchangeWWAHighlight} value={whoWeAre.highlight} className="shadow border p-[10px] h-[150px]"></textarea>

                <div>
                    <ReactQuill
                        modules={{ toolbar: toolbarOptions }}
                        theme="snow"
                        value={whoWeAre.content}
                        onChange={onchangeWWAContent}
                    />
                </div>

                <button className="bg-primary p-[10px] text-white" onClick={updateWhoWeAre}>Submit</button>
            </div>
        </div>

        <div>
            <Title title="core values" />

            <div className="grid gap-[20px] max-w-[500px]">
                <div className="flex flex-col gap-[10px]">
                    <span className="text-[12px] text-red-500">Max image size: 70KB, Image dimension: 1920px by 600px</span>
                    <div className="flex gap-[5px]">
                        <input type="file" className="p-[10px] border shadow w-full" onChange={onchangeCVBannerImgString} />
                        <button className="p-[10px] bg-primary text-white" onClick={updateCoreValuesBannerString}>Submit</button>
                    </div>
                </div>

                <textarea name="integrity" onChange={onchangeCoreValue} value={coreValues.integrity} className="shadow border p-[10px] h-[150px]"></textarea>

                <textarea name="excellence" onChange={onchangeCoreValue} value={coreValues.excellence} className="shadow border p-[10px] h-[150px]"></textarea>

                <textarea name="innovation" onChange={onchangeCoreValue} value={coreValues.innovation} className="shadow border p-[10px] h-[150px]"></textarea>

                <button className="bg-primary p-[10px] text-white" onClick={updateCoreValues}>Submit</button>
            </div>
        </div>
    </div>
}