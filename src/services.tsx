import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import servicesArray from './arrays/servicesArray'
import sectionImg from './imgs/section-img.png'
import { useSelector } from 'react-redux'
import type { RootState } from './hieghtRedux'

export default function Services() {
  const { navbarHeight } = useSelector((state: RootState) => { return state.layout })
  return (
    <section style={{ scrollMarginTop: navbarHeight }} id={`services`} className={`py-20 `}>
      <div className={`max-w-300 mx-auto px-8`}>
        {/* stable */}
        <div className={`flex flex-col pb-16 items-center gap-5`}>
          <h2 className={`text-[32px] max-w-150 text-center `}>We Offer Different Services To Improve Your Health</h2>
          <img className={`w-fit flex `} src={sectionImg} alt="section " />
          <p className={`text-[16px]! max-w-150 text-center`}>Our medical center provides comprehensive healthcare services designed to support every member of your family.
            From routine check-ups to specialized treatments, we are committed to delivering compassionate care and
            clinical excellence in a welcoming environment. </p>

        </div>
        {/* row */}
        <div className={` grid grid-cols-3 gap-x-12 gap-y-16 pxc-8 max-[630px]:grid-cols-1 max-[900px]:grid-cols-2`}>
          {servicesArray.map((item) => {
            return (
              <div className={` flex gap-5`} key={item.id}>
                <div className={`text-[40px] text-light-blue flex pt-1`}><FontAwesomeIcon icon={item.icon}></FontAwesomeIcon></div>
                <div className={`flex flex-col gap-5`}>
                  <h3 className={`text-xl`}>{item.name}</h3>
                  <p>{item.desc}</p>
                </div>

              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}