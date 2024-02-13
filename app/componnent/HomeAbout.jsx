import Image from "next/image";
import { FaTree } from "react-icons/fa";
import { RiArrowRightSFill } from "react-icons/ri";
import homeaboutImage from "../../public/HomeAbout.png";
import Container from "./Container";

const HomeAbout = () => {
    return (
        <div className="py-16 md:py-28">
            <Container>
                <div className="h-fit flex flex-col gap-12 md:gap-0 md:flex-row">
                    <div className="w-full h-fit flex gap-4">
                        <div className="hidden xl:block py-7 px-3 pbg w-fit h-fit rounded-tl-xl rounded-tr-xl rounded-bl-full rounded-br-full border border-green-300">
                            <FaTree className="wCl text-5xl" />
                        </div>
                        <div className="pl-2 pr-4">
                            <h1 className="text-4xl font-bold pCl">MORE THAN READY.</h1>
                            <h1 className="text-4xl font-bold pCl">WE ARE READY.</h1>
                            <p className="py-10">
                                We believe a Jesuit education acquired at Loyola University Maryland best prepares you for academic achievement, the new world of work, and a balanced, flourishing, and purposeful life. From our strong academic programs to the thoughtful mentorship and guidance from faculty, coaches, and mentors, Loyola will help you discover your true potential. You will graduate ready for anything—and ready for everything.
                            </p>
                            <button className="text-md mt-4 md:mt-7 pbg wCl py-2 px-4 rounded-lg flex gap-1 items-center transition hover:shadow-xl hover:scale-110">
                                <span>Explore More</span>
                                <RiArrowRightSFill className="text-xl" />
                            </button>
                        </div>
                    </div>
                    <div className="w-full h-fit">
                        <Image src={homeaboutImage} alt="Home-about-image" />
                    </div>
                </div>
            </Container>
        </div>
    )
}


export default HomeAbout;