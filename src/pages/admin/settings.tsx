import axios from "axios"
import { useState, useEffect } from "react"

type TUser = {
    _id: string;
    username: string;
    password: string;
    role: string;
}

export const CMSSettings = () => {
    const [users, setUsers] = useState<TUser[] | null>(null)
    const [password, setPassword] = useState({
        currentPassword: '',
        newPassword: '',
    })
    const [step, setStep] = useState(1)

    const [msg, setMsg] = useState("")

    const [newUser, setNewUser] = useState({
        username: '',
        password: '',
    })

    const getUsers = async () => {
        const response = await axios.get("https://r28-backend.onrender.com/api/users")
        setUsers(response.data)


    }

    const changePassword = async () => {
        setStep(2)
    }

    const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword({
            ...password,
            [e.target.name]: e.target.value
        })
    }

    const handleChangePassword = async () => {
        try {
            await axios.patch("https://r28-backend.onrender.com/api/users/change-password", {
                username: 'super_admin',
                currentPassword: password.currentPassword,
                newPassword: password.newPassword,
            })

            setPassword({
                currentPassword: '',
                newPassword: '',
            })
        } catch (error) {
            setMsg("Error changing password")
        }

        setTimeout(() => {
            setMsg("")
        }, 3000)
    }

    const handleDeletePassword = async (_: React.MouseEvent<SVGSVGElement, MouseEvent>, id: string) => {
        await axios.delete(`https://r28-backend.onrender.com/api/users/${id}`)
        getUsers()
    }

    const onNewUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        })
    }

    const handleAddUser = async () => {
        await axios.post("https://r28-backend.onrender.com/api/auth/register", newUser)
        getUsers()

        setNewUser({
            username: '',
            password: '',
        })
    }

    useEffect(() => {
        getUsers()
    }, []);
    return window.sessionStorage.getItem("role") === "super admin" ? <div className="p-[40px] max-w-[400px] flex flex-col gap-[40px]">
        <span className="inline-block text-[20px]">Users</span>

        <div className="flex flex-col gap-[10px]">
            {users?.map((user, i) => {
                return <div key={i} className="flex items-center gap-[20px] shadow-md p-[10px] hover:border hover:shadow-sm justify-between">
                    <div className="flex gap-[10px]">
                        <span className="">{i + 1}.</span>
                        <span className="">{user.username === "super_admin" ? "Super Admin" : user.username}</span>
                    </div>

                    {user.role === "super admin" ? <abbr title="Edit password">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-zinc-800 cursor-pointer" onClick={changePassword}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>
                    </abbr> : <abbr title="Delete user">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-red-500 cursor-pointer" onClick={(e) => handleDeletePassword(e, user._id)}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>
                    </abbr>
                    }

                </div>
            })}

            {step === 3 ? null : <button className="bg-[#381313] p-[10px] text-white" onClick={() => setStep(3)}>New User</button>}
        </div>

        {step === 2 && <div className="flex flex-col gap-[10px]">
            <span>{msg}</span>
            <input type="password" name="currentPassword" placeholder="Current Password" className="p-[10px] shadow border w-full" onChange={onPasswordChange} value={password.currentPassword} />
            <input type="password" name="newPassword" placeholder="New Password" className="p-[10px] shadow border w-full" onChange={onPasswordChange} value={password.newPassword} />
            <button className="bg-[#381313] p-[10px] text-white" onClick={handleChangePassword}>Submit</button>
        </div>}

        {step === 3 && <div className="flex flex-col gap-[10px]">
            <input type="text" name="username" placeholder="Username" className="p-[10px] shadow border w-full" onChange={onNewUserChange} value={newUser.username} />
            <input type="password" name="password" placeholder="Password" className="p-[10px] shadow border w-full" onChange={onNewUserChange} value={newUser.password} />
            <button className="bg-[#381313] p-[10px] text-white" onClick={handleAddUser}>Submit</button>
        </div>}
    </div> : <div className="p-[40px] flex gap-[5px]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-[20px] h-[20px] fill-red-500"><path d="M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" /></svg>
        <span className="text-zinc-800">Your are not authorized to view this page</span>
    </div>
}