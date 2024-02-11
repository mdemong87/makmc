import Image from "next/image";
import Logo from "../../public/headerLogo.png";
import Container from "./Container";
import Navber from "./Navber";
import Trands from "./Trands";


export default function Header() {
    return (
        <header className="h-[70px] md:h-[120px] flex items-center wbg fixed text-gray-800 w-screen headerShadox z-50">
            <Container>
                <div className="flex items-center justify-between w-full">
                    <div>
                        <Image className="w-[50px] md:w-full" src={Logo} priority={true} alt="Logo" />
                    </div>
                    <Navber />
                </div>
            </Container>
            <Trands />
        </header>
    )
}