import Hero from '../componnent/Hero'
import HomeAbout from '../componnent/HomeAbout'
import HomeGellary from '../componnent/HomeGellary'
import HomeNewsWrper from '../componnent/HomeNewsWrper'
import HomeRecentlyHosted from '../componnent/HomeRecentlyHosted'
import HomeWork from '../componnent/HomeWork'

export default function Home() {
  return (
    <main className="h-fit pb-10 w-screen">
      <div className='pt-[72px] md:pt-[120px]'>
        <Hero />
      </div>
      <HomeNewsWrper />
      <HomeAbout />
      <HomeWork />
      <HomeGellary />
      <HomeRecentlyHosted />
      <HomeWork />
    </main>
  )
}
