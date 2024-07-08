import { ReactEventHandler, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import LoginImg from "../../assets/images/r28_c6sdgz.jpeg"

interface FormProps {
    username: string;
    password: string;
}

interface SignInProps {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>, inputName: string) => void;
    handleLogin: ReactEventHandler;
    form: FormProps;
    errMsg: string;
    isSignedIn: string | null;
}

export const Login = ({ handleChange, handleLogin, form, errMsg, isSignedIn }: SignInProps) => {
    const navigate = useNavigate();

    const [redirected, setRedirected] = useState(false);

    useEffect(() => {
        if (isSignedIn && !redirected) {
            navigate("/admin/dashboard");
            setRedirected(true);
        }
    }, [isSignedIn, navigate, redirected]);

    return <main className="w-full h-screen">
        <div className="w-full h-full grid grid-cols-[400px_1fr]">
            <div className="w-full h-full bg-[#fff] p-[100px_50px] relative">
                <h1 className="mb-[20px] text-[#381313] text-[24px]">R28 CMS</h1>
                <span className="block mb-[5px] text-[14px] font-[300] text-red-500">{errMsg}</span>
                <form onSubmit={handleLogin} className="flex flex-col gap-[20px]">
                    <input type="text" placeholder="username" className="p-[10px] border w-full" name="username" value={form.username} onChange={(e) => handleChange(e, form.username)} />
                    <input type="password" name="password" placeholder="password" className="p-[10px] border w-full" value={form.password} onChange={(e) => handleChange(e, form.password)} />
                    <button className="bg-[#381313] p-[10px] text-white" type="submit">Submit</button>
                </form>
                <p className="text-[14px] font-[300] absolute bottom-0 left-[50%] translate-x-[-50%] text-[#381313] text-center whitespace-nowrap">&copy; R28 Holding. All rights reserved</p>
            </div>
            <div className="w-full h-full relative after:w-full after:h-full after:bg-[#381313] after:absolute after:inset-0 after:opacity-[.7]">
                <img src={LoginImg} alt="r28" className="w-full h-full object-cover" />
            </div>
        </div>
    </main>
}