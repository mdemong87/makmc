import vedioSrc from "../../public/hero.mp4";

export default function Vedio() {
    return (
        <div className="w-full h-full z-0">
            <video className="w-full" src={vedioSrc} autoPlay={true} muted loop />
        </div>
    )
}