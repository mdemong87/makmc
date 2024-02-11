import Link from "next/link";
import { FaLink } from "react-icons/fa6";

const HomeNews = () => {
    return (
        <div className="wbg h-fit lg:h-[230px] md:translate-y-[-30%] lg:translate-y-[-50%] rounded-lg shadow-xl flex flex-col justify-between">
            <div className="flex h-full flex-col md:flex-row md:justify-between p-4 homeNewShadow">
                <div className="border-b md:border-r md:border-b-0 border-gray-200 h-full w-full px-4 py-4 cursor-pointer transition hover:bg-gray-100 hover:rounded-lg">
                    <h3 className="pCl font-bold text-lg">News</h3>
                    <p className="text-gray-800 font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, sunt?</p>
                </div>
                <div className="border-b md:border-r md:border-b-0 border-gray-200 h-full w-full px-4 py-4 cursor-pointer transition hover:bg-gray-100 hover:rounded-lg">
                    <h3 className="pCl font-bold text-lg">News</h3>
                    <p className="text-gray-800 font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, sunt?</p>
                </div>
                <div className="h-full w-full px-4 py-4 cursor-pointer transition hover:bg-gray-100 hover:rounded-lg">
                    <h3 className="pCl font-bold text-lg">News</h3>
                    <p className="text-gray-800 font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, sunt?</p>
                </div>
            </div>
            <div className="h-[90px] py-4 px-6 flex gap-4 items-center">
                <div className="pbg p-3 hidden sm:block rounded-full w-fit h-fit">
                    <FaLink className="wCl text-xl" />
                </div>
                <div className="flex justify-between items-center gap-5 md:justify-start">
                    <Link className="pCl text-md sm:text-lg font-bold hover:underline" href={"/"}>All News</Link>
                    <Link className="pCl text-md sm:text-lg font-bold hover:underline" href={"/"}>All Events</Link>
                    <Link className="pCl text-md sm:text-lg font-bold hover:underline" href={"/"}>Stories</Link>
                </div>
            </div>
        </div>
    )
}

export default HomeNews;