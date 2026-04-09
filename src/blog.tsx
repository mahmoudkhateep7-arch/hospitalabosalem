import { useSelector } from 'react-redux'
import { blogArray } from './arrays/blogArray'
import sectionImg from './imgs/section-img.png'
import type { RootState } from './hieghtRedux'

export default function Blog() {
  const { navbarHeight } = useSelector((state: RootState) => { return state.layout })
  return (
    <section style={{ scrollMarginTop: navbarHeight }} id={`blogs`} className={`bg--300 py-20`}>
      <div className={`max-w-300 mx-auto px-8`}>


        {/* stable component h2 img p */}
        <div className={`flex flex-col pb-16 items-center gap-5`}>
          <h2 className={`text-[32px] max-w-150 text-center `}>Keep Up With Our Most Recent Medical News</h2>
          <img className={`w-fit flex `} src={sectionImg} alt="section " />
          <p className={`text-[16px]! max-w-150 text-center`}>"Explore the latest breakthroughs from April 2026, including a newly discovered brain-aging protein, advances in precision 'DNA drugs' for cancer, and the first successful gene therapy injections for reversing deafness.</p>
        </div>

        {/* row */}
        <div className={`grid grid-cols-3 gap-8 max-[1000px]:grid-cols-2 max-[650px]:grid-cols-1`}>
          {blogArray.map((item) => {
            return (
              <div className={`hover:shadow-xl group shadow duration-300 relative`} key={item.id}>
                <div className={`absolute group-hover:w-full bottom-0 w-0 left-0 h-0.75 duration-400 ease-linear bg-light-blue `}></div>
                <div><img src={item.imgUrl} alt={item.event} /></div>
                <div className={`p-8`}>
                  <p className={`py-2.5 px-3 w-fit bg-light-blue text-white! rounded-[5px]`}>{item.date}</p>
                  <h3 className={`py-2.5 font-medium!`}>{item.event}</h3>
                  <p>{item.pele}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}