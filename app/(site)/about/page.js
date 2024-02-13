import HomeAbout from "@/app/componnent/HomeAbout";
import HomeRecentlyHosted from "@/app/componnent/HomeRecentlyHosted";

export default function AboutPage() {
  return (

    <main className="h-fit pb-10">
      {/* pt-16 md:pt-28 */}
      <div className='pt-16 md:pt-28'>
        <HomeAbout />
        <HomeRecentlyHosted />
      </div>
    </main>
  )
}