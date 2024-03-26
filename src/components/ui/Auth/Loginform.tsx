"use client"

import { useUser } from "@/lib/auth";
import auth from "@/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Loginform = () => {

    const route = useRouter()
    const user = useUser()

    if(user !== null && user !== false){
       return route.push("/home")
    }

    const handleSignin = async (e: any) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        
        await signInWithEmailAndPassword(auth, email, password)
            .then((res: any) => {
                console.log(res);

                route.push("/home")
            })
            .catch((error: any) => console.log(error)
            )

    }

    return (
        <div>
            <form onSubmit={handleSignin} className="space-y-5">
                <label className="input input-bordered outline-none flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                    <input name="email" type="text" className="grow" placeholder="Email" />
                </label>

                <label className="input relative input-bordered outline-none flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                    <input type="password" name="password" className="grow" placeholder="Password" />
                    <p className="absolute -bottom-6 left-0">forget password?</p>
                </label>
                <div className="flex py-3 items-center justify-between">
                    <input className="btn btn-success text-white" type="submit" value={"Login"} />
                    <Link href="/register">Create a new account</Link>
                </div>
            </form>
        </div>
    );
};

export default Loginform;