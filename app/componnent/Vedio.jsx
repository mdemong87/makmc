import Video from 'next-video';
// import awesomeVideo from '../../videos/hero.mp4';

export default function Vedio() {
    return (
        <div className="w-full h-full z-0">
            <Video className="w-full" src={'https://stream.mux.com/RqUm56KR5M3jZgMUUoDFdPO6Gcne7fk01kqVREzLoQBI.m3u8'} autoPlay={true} muted loop />
        </div>
    )
}
