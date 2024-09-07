import { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';

type TNews = {
    _id: string;
    title: string;
    subtitle: string;
    content: string;
    newsImgUrl: string;
    createdAt: Date;
}

export const NewsAndEvents = () => {
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

    const [form, setForm] = useState({
        title: '',
        subtitle: '',
        base64: '',
    });

    const [blogImage, setBlogImage] = useState<string | ArrayBuffer | null>('')
    const [value, setValue] = useState('')

    const [news, setNews] = useState<null | TNews[]>(null)

    const fetchNews = async () => {
        const response = await axios.get('https://r28-backend.onrender.com/api/news-and-events');
        setNews(response.data.newsAndEvents);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, _: string) => {
        const { name, value, files } = e.target;

        setForm({
            ...form,
            [name]: value
        });

        if (files && files[0]) {
            const reader = new FileReader();
            reader.readAsDataURL(files[0]);
            reader.onload = () => {
                setBlogImage(reader.result);
            };
        }

    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()


        await axios.post('https://r28-backend.onrender.com/api/news-and-events', {
            title: form.title,
            subtitle: form.subtitle,
            content: value,
            newsImgUrl: blogImage,
        });

        fetchNews()
    };

    useEffect(() => {
        fetchNews()
    }, [])

    const handleDeleteNewsAndEvents = async (e: React.MouseEvent<SVGSVGElement, MouseEvent>, id: string) => {
        e.preventDefault()
        try {
            await axios.delete(`https://r28-backend.onrender.com/api/news-and-events/${id}`)
            fetchNews()
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <ul className="p-[40px] flex flex-col gap-[20px]">
                {news?.map(_news => {
                    return <li key={_news._id} className='flex items-center gap-[20px] p-[10px] bg-[#f5f5f5] justify-between'>
                        <span>{_news.title}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer" onClick={(e) => handleDeleteNewsAndEvents(e, _news._id)}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>

                    </li>
                })}
            </ul>
            <div className='p-[40px]'>
                <p className='mb-[10px] text-[#381313] text-[24px]'>Add news and events</p>

                <form className="flex flex-col gap-[20px]" onSubmit={handleSubmit}>
                    <input
                        type='text'
                        name='title'
                        placeholder="News and Events Title"
                        className="p-[10px] border resize-none max-w-[400px]"
                        value={form.title}
                        onChange={(e) => handleChange(e, form.title)}
                        required
                    />
                    <input
                        type='text'
                        name='subtitle'
                        placeholder="News and Events Subtitle"
                        className="p-[10px] border resize-none max-w-[400px]"
                        value={form.subtitle}
                        onChange={(e) => handleChange(e, form.title)}
                        required
                    />
                    <input type="file" onChange={(e) => handleChange(e, form.base64)} className="p-[10px] border resize-none max-w-[400px]" multiple required />
                    <div className='max-w-[800px]'>
                        <ReactQuill
                            modules={{ toolbar: toolbarOptions }}
                            theme="snow"
                            value={value}
                            onChange={setValue}
                        />
                    </div>
                    <button type='submit' className='w-[150px] bg-[#381313] text-white p-[10px]'>Submit</button>
                </form>
            </div>
        </div>
    );
};
