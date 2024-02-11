import Vedio from "./Vedio";

export default function Hero() {
    return (
        <section className="h-fit">
            <div className="h-full relative">
                <Vedio />

                <div className="absolute top-0 w-full h-[240px] sm:h-[380px] md:h-[500px] lg:h-full flex flex-col justify-center items-center">
                    <h1 className='text-3xl sm:text-5xl md:text-8xl font-bold text-center text-white heroTextShadow'>GET READY</h1>
                    <h2 className="text-1xl sm:text-3xl md:text-5xl w-4xl font-bold text-center text-white pt-1 heroTextShadow">TO BE PART OF ALUMNI</h2>
                    <button className="text-sm sm:text-lg md:text-xl mt-4 md:mt-7 pbg wCl py-2 px-4 rounded-lg transition hover:scale-110 hover:shadow-xl">Registration Now</button>
                </div>
            </div>

        </section>
    )
}