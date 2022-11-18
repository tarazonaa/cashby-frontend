import type { NextPage } from "next";
import Image from "next/image";
import Logo from "../assets/Images/logoCashby.png";
import Logo2 from "../assets/Images/Recurso 1.svg";
import Link from "next/link";

// Components

const Home: NextPage = () => {
    if (typeof window !== "undefined") {
        const localStorage = window.localStorage;
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }

    return (<div className="bg-gradient-to-b from-primary to-acc justify-center w-full h-screen flex flex-row align-center">
        <div className="flex w-screen mt-40 flex-col sm:space-y-24 justify-center align-center h-screen">
            <div id="logoBox" className="px-24 mx-auto text-cream sm:w-full max-w-[500px] flex flex-col justify-center align-center">
                <Image src={Logo.src} alt="Logo" width={500} height={500} />
            </div>
            <div className="w-screen flex flex-row sm:flex-col space-x-24 sm:space-x-0 h-screen justify-center align-center">
                <div className="flex mx-auto flex-row sm:flex-col justify-center container align-center bg-backgrounds py-24 w-full rounded-2xl shadow-2xl">
                    <div>
                        <Image src={Logo2.src} alt="Logo" width={100} height={100} />
                    </div>
                    <Link
                        href="/certificates"
                        passHref
                    >
                        <button className="h-20 w-36 rounded-2xl bg-cream hover:scale-105 shadow-md hover:shadow-lg hover:bg-backgrounds text-md text-primary text-md font-bold">Certiblocks</button>
                    </Link>
                </div>
                <div className="flex flex-col justify-center align-center">
                    <Link
                        href="/finance"
                        passHref
                    >
                        <button className="h-20 w-36 rounded-2xl text-primary bg-cream shadow-md to-backgrounds hover:shadow-lg hover:bg-backgrounds hover:scale-105 bg-cream text-md font-bold">Cashby Finance</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>);
};

export default Home;
