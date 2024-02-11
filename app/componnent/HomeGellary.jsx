import { TbPlaystationSquare } from "react-icons/tb";
import Container from "./Container";

const HomeGellary = () => {
    return (
        <div className='h-[80vh] homegellary'>
            <Container>
                <div className="h-[80vh] flex items-center w-full gap-10">
                    <div className="wbg h-[400px] w-[600px] shadow-2xl rounded-md flex">
                        <div className="pbg w-[50px] h-full flex flex-col items-center justify-between py-5" >
                            <TbPlaystationSquare className="text-white text-xl" />
                            <TbPlaystationSquare className="text-white text-xl" />
                            <TbPlaystationSquare className="text-white text-xl" />
                            <TbPlaystationSquare className="text-white text-xl" />
                            <TbPlaystationSquare className="text-white text-xl" />
                            <TbPlaystationSquare className="text-white text-xl" />
                            <TbPlaystationSquare className="text-white text-xl" />
                            <TbPlaystationSquare className="text-white text-xl" />
                            <TbPlaystationSquare className="text-white text-xl" />
                            <TbPlaystationSquare className="text-white text-xl" />
                            <TbPlaystationSquare className="text-white text-xl" />
                            <TbPlaystationSquare className="text-white text-xl" />
                        </div>
                        <div className="p-5">gdfgdf</div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default HomeGellary;