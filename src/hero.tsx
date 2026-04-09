import sectionImg from './imgs/section-img.png'
export default function Hero({ navbarHeight }: { navbarHeight: number }) {
  return (
    <section style={{ paddingTop: navbarHeight, scrollMarginTop: navbarHeight }} id={`home`} className={` flex  min-h-screen `}>
      <div id={`imgbg-1`} style={{ paddingBottom: navbarHeight }} className={` w-full `}>
        <div className={`max-w-300 bg-mamber-800 h-full items-center flex mx-auto`}>

          <div className={`bg-grmeen-400 w-1/2 p-8 max-sm:w-full `}>
            <div className={`flex gap-2 items-center`}><img className={``} src={sectionImg} alt="section" /><span className={`font-medium text-[14px] tracking-[1px]`}>WE GIVE YOU THE BEST!</span></div>
            <h2 className={`max-w-150 text-4xl leading-[1.4] font-bold!`}>We Provide <span className={`text-light-blue`}>Medical</span> Services That You Can <span className={`text-light-blue`}>Trust!</span></h2>
            <p className={`pt-2.5 pb-7  max-w-110  leading-[1.6]`}>Need professional help? Our support staff will answer your questions. Visit us Now or Make an Appointment!</p>
            <div className={`flex items-center bg-ammber-300 gap-4`}>
              <a className={`cursor-pointer py-2.5 px-6 text-[14px] rounded-[5px] bg-light-blue text-white font-medium hover:bg-[#135fa1] duration-300`} href="#hom">Get Appointment</a>
              <a className={`cursor-pointer py-2.5 px-6 text-[14px] rounded-[5px] bg-dark-gray text-white font-medium  hover:bg-[#4c4f6e] duration-300`} href="#contact">Contact Now</a>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}